import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef, useState } from 'react'
import { Selection, TagGroup, TagList } from 'react-aria-components'
import { StringParam, useQueryParam, withDefault } from 'use-query-params'
import { useDebounceValue } from 'usehooks-ts'

import SearchResultRowCard from '@/src/components/common/Card/SearchResultRowCard'
import Chip from '@/src/components/common/Chip/Chip'
import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import SearchBar from '@/src/components/common/SearchBar/SearchBar'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { client } from '@/src/services/graphql'
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

type SelectionOption = { id: string; title: string }

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1748-27133&m=dev
 */

const DocumentsAllSection = ({ section, className }: Props) => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language

  const { getFullPath } = useGetFullPath()
  const { title, text } = section ?? {}

  const [input, setInput] = useState('')
  const [debouncedInput] = useDebounceValue(input, 300)
  const searchRef = useRef<null | HTMLInputElement>(null)

  const [filters, setFilters] = useRoutePreservedState(documentsDefaultFilters)

  useEffect(() => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [filters.page, filters.pageSize])

  useEffect(() => {
    setFilters((previousState) => ({ ...previousState, search: debouncedInput, page: 1 }))
  }, [debouncedInput, setFilters])

  // CATEGORIES

  const { data: documentCategoriesData } = useQuery({
    queryKey: ['DocumentCategories', locale],
    queryFn: () => client.DocumentCategories({ locale }),
  })

  // Get category names
  const selectionOptions: SelectionOption[] = [
    { id: 'all', title: t('documentsAllSection.selectionOptions.allDocuments') },
    ...(documentCategoriesData?.documentCategories?.data
      .map((category) => {
        if (!category.attributes) return null

        return { id: category.attributes.slug, title: category.attributes.title }
      })
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined) ?? []),
  ]

  // SELECTION

  const defaultSelectionOption: SelectionOption = {
    id: 'all',
    title: t('documentsAllSection.selectionOptions.allDocuments'),
  }

  const [selection, setSelection] = useState<Selection>(new Set([defaultSelectionOption.id]))

  const handleSelectionChange = (newSelection: Selection) => {
    if (new Set(newSelection).size === 0) setSelection(new Set([defaultSelectionOption.id]))
    else setSelection(newSelection)
  }

  const selectedKey: SelectionOption['id'] =
    selection !== 'all' && selection.size === 1
      ? selection.values().next().value
      : defaultSelectionOption.id

  // Extract URL query params
  const [routerQueryCategoryValue] = useQueryParam(
    'documentCategory',
    withDefault(StringParam, 'all'),
  )

  useEffect(() => {
    setSelection(new Set([routerQueryCategoryValue]))
  }, [routerQueryCategoryValue])

  // Adjust filters after selection change
  useEffect(() => {
    setFilters((previousState) => ({
      ...previousState,
      page: 1,
      categorySlug: selectedKey === 'all' ? undefined : selectedKey,
    }))
  }, [selectedKey, setFilters])

  // FILTERED RESULTS

  const { data, isPending, isError, error, isFetching } = useQuery({
    queryKey: getMeiliDocumentsQueryKey(filters),
    queryFn: () => meiliDocumentsFetcher(filters),
    placeholderData: keepPreviousData,
  })

  const resultsCount = data?.estimatedTotalHits ?? 0

  // TODO consider extracting this to a hook (also in GlobalSearchSection)
  const resultsCountMessage = t('globalSearch.searchResultsFound.specific', {
    from: (filters.page - 1) * filters.pageSize + 1,
    to: Math.min(resultsCount, filters.page * filters.pageSize),
    all: resultsCount,
  })

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer className={cn('py-6 lg:py-18', className)}>
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />
        <SearchBar
          ref={searchRef}
          input={input}
          setInput={setInput}
          setSearchQuery={(value) =>
            setFilters((previousState) => ({ ...previousState, search: value, page: 1 }))
          }
          isLoading={isFetching}
          className="w-full"
        />

        <TagGroup
          aria-label={t('documentsAllSection.selectionOptions.aria')}
          selectionMode="single"
          selectedKeys={selection}
          onSelectionChange={handleSelectionChange}
        >
          <TagList className="negative-x-spacing -m-1.5 flex flex-nowrap gap-x-2 overflow-auto p-1.5 scrollbar-hide lg:flex-wrap lg:gap-4">
            {selectionOptions.map((option, index) => {
              return (
                <Chip
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  id={option.id}
                  variant="single-choice"
                  size="large"
                  // data-cy={`${option.title}-tab`}
                >
                  {option.title}
                </Chip>
              )
            })}
          </TagList>
        </TagGroup>

        {isError ? (
          // TODO display proper error
          <Typography variant="p-default">{error?.message}</Typography>
        ) : isPending ? (
          <Typography variant="p-default">{t('common.loading')}</Typography>
        ) : (
          <div className="flex flex-col gap-6">
            <ul className="divide-y divide-border-default rounded-lg border border-border-default focus-within:z-1">
              {data.hits
                .map((document) => {
                  if (!document.attributes) return null

                  return (
                    <li key={document.id}>
                      <SearchResultRowCard
                        title={document.attributes.title}
                        linkHref={getFullPath(document)}
                        type="documents"
                        className="focus-within:rounded-lg"
                        metadata={[
                          t('documentsAllSection.metadata.publishDate', {
                            date: formatDate(document.attributes.publishedAt),
                          }),
                          document.attributes.documentCategory?.data?.attributes?.title,
                          // eslint-disable-next-line unicorn/no-array-callback-reference
                        ].filter(isDefined)}
                      />
                    </li>
                  )
                })
                // eslint-disable-next-line unicorn/no-array-callback-reference
                .filter(isDefined)}
            </ul>
            {data?.estimatedTotalHits ? (
              <div className="flex items-center justify-between gap-6">
                <Typography>{resultsCountMessage}</Typography>
                <PaginationWithInput
                  currentPage={filters.page}
                  totalCount={Math.ceil(data.estimatedTotalHits / filters.pageSize)}
                  onPageChange={(page) =>
                    setFilters((previousState) => ({ ...previousState, page }))
                  }
                />
              </div>
            ) : (
              <Typography>{t('globalSearch.noResults')}</Typography>
            )}
          </div>
        )}
      </div>
    </SectionContainer>
  )
}

export default DocumentsAllSection
