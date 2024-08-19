import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef, useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'

import SearchResultRowCard from '@/src/components/common/Card/SearchResultRowCard'
import Input from '@/src/components/common/Input/Input'
import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import SearchBar from '@/src/components/common/SearchBar/SearchBar'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import PlaceholderWrapper from '@/src/components/placeholder/PlaceholderWrapper'
import { DocumentsSectionFragment } from '@/src/services/graphql/api'
import {
  documentsDefaultFilters,
  getMeiliDocumentsQueryKey,
  meiliDocumentsFetcher,
} from '@/src/services/meili/fetchers/documentsFetcher'
import cn from '@/src/utils/cn'
import { formatDate } from '@/src/utils/formatDate'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'
import { useRoutePreservedState } from '@/src/utils/useRoutePreservedState'

type Props = {
  section: DocumentsSectionFragment | null | undefined
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13877&t=welewzgz8FI2CbQy-4
 */

const DocumentsSection = ({ section, className }: Props) => {
  const { t } = useTranslation()
  const { title, text } = section ?? {}
  const { getFullPath } = useGetFullPath()

  const [input, setInput] = useState('')
  const [debouncedInput] = useDebounceValue(input, 300)

  const [filters, setFilters] = useRoutePreservedState(documentsDefaultFilters)

  const searchRef = useRef<null | HTMLInputElement>(null)

  useEffect(() => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [filters.page, filters.pageSize])

  useEffect(() => {
    setFilters((previousState) => ({ ...previousState, search: debouncedInput, page: 1 }))
  }, [debouncedInput, setFilters])

  const { data, isPending, isError, error } = useQuery({
    queryFn: () => meiliDocumentsFetcher(filters),
    queryKey: getMeiliDocumentsQueryKey(filters),
    placeholderData: keepPreviousData,
  })

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer className={cn('py-6 lg:py-18', className)}>
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />

        <div className="grid grid-cols-3 gap-4">
          <SearchBar
            ref={searchRef}
            input={input}
            setInput={setInput}
            setSearchQuery={(value) =>
              setFilters((previousState) => ({ ...previousState, search: value, page: 1 }))
            }
            isLoading={isPending}
            className="col-span-2"
          />
          {/* TODO Category select */}
          <PlaceholderWrapper className="rounded border-action-background-default opacity-100">
            <Input
              value=""
              onChange={() => {}}
              className="col-span-1"
              aria-label="Kategoria"
              disabled
              placeholder={t('documentsAllSection.filters.choseCategory')}
            />
          </PlaceholderWrapper>
        </div>

        {isError ? (
          // TODO display proper error
          <Typography variant="p-default">{error?.message}</Typography>
        ) : isPending ? (
          <Typography variant="p-default">{t('common.loading')}</Typography>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-lg border border-border-default">
              {data.hits
                .map((document) => {
                  if (!document.attributes) return null

                  return (
                    <SearchResultRowCard
                      key={document.id}
                      title={document.attributes.title}
                      linkHref={getFullPath(document) ?? '#'}
                      iconName="dokument"
                      metadata={[
                        t('documentsAllSection.metadata.publishDate', {
                          date: formatDate(document.attributes.publishedAt),
                        }),
                        document.attributes.documentCategory?.data?.attributes?.title,
                        // eslint-disable-next-line unicorn/no-array-callback-reference
                      ].filter(isDefined)}
                    />
                  )
                })
                // eslint-disable-next-line unicorn/no-array-callback-reference
                .filter(isDefined)}
            </div>
            {data?.estimatedTotalHits ? (
              <div className="flex items-center justify-between gap-6">
                <div>
                  <Typography>
                    {t('documentsAllSection.showingResults', {
                      current: data.hits.length,
                      total: data.estimatedTotalHits,
                    })}
                  </Typography>
                </div>
                <PaginationWithInput
                  currentPage={filters.page}
                  totalCount={Math.ceil(data.estimatedTotalHits / filters.pageSize)}
                  onPageChange={(page) =>
                    setFilters((previousState) => ({ ...previousState, page }))
                  }
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </SectionContainer>
  )
}

export default DocumentsSection
