import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef, useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'

import ArticleCard from '@/src/components/common/Card/ArticleCard'
import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import SearchBar from '@/src/components/common/SearchBar/SearchBar'
import Divider from '@/src/components/common/Sidebar/Divider'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { ArticlesSectionFragment } from '@/src/services/graphql/api'
import {
  articlesDefaultFilters,
  getMeiliArticlesQueryKey,
  meiliArticlesFetcher,
} from '@/src/services/meili/fetchers/articlesFetcher'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'
import { useRoutePreservedState } from '@/src/utils/useRoutePreservedState'

type Props = {
  section: ArticlesSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=5036-22339&m=dev
 * Search based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/sections/SearchSection/GlobalSearchSectionContent.tsx
 */

const ArticlesSection = ({ section }: Props) => {
  const { t, i18n } = useTranslation()
  const locale = i18n?.language
  const { getFullPath } = useGetFullPath()

  const { title, text } = section

  const [input, setInput] = useState('')
  const [debouncedInput] = useDebounceValue(input, 300)

  const [filters, setFilters] = useRoutePreservedState(articlesDefaultFilters)

  const searchRef = useRef<null | HTMLInputElement>(null)

  useEffect(() => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [filters.page, filters.pageSize])

  useEffect(() => {
    setFilters((previousState) => ({ ...previousState, search: debouncedInput, page: 1 }))
  }, [debouncedInput, setFilters])

  const { data, isPending, isError, error, isFetching } = useQuery({
    queryFn: () => meiliArticlesFetcher(filters, locale),
    queryKey: getMeiliArticlesQueryKey(filters, locale),
    placeholderData: keepPreviousData,
  })

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-6 lg:gap-12">
        <div className="flex flex-col gap-6 lg:gap-8">
          <SectionHeader title={title} text={text} />
          <SearchBar
            ref={searchRef}
            input={input}
            setInput={setInput}
            setSearchQuery={(value) =>
              setFilters((previousState) => ({ ...previousState, search: value, page: 1 }))
            }
            isLoading={isFetching}
          />
          {isError ? (
            // TODO display proper error
            <Typography variant="p-default">{error?.message}</Typography>
          ) : isPending ? (
            <Typography variant="p-default">{t('common.loading')}</Typography>
          ) : (
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
              {data.hits
                .map((article) => {
                  if (!article.attributes) return null

                  const {
                    title: articleTitle,
                    coverMedia,
                    articleCategory,
                    slug,
                  } = article.attributes

                  return (
                    <li key={slug}>
                      <ArticleCard
                        key={slug}
                        title={articleTitle}
                        linkHref={getFullPath(article) ?? '#'}
                        imgSrc={coverMedia?.data?.attributes?.url}
                        tagText={articleCategory?.data?.attributes?.title}
                      />
                    </li>
                  )
                })
                // eslint-disable-next-line unicorn/no-array-callback-reference
                .filter(isDefined)}
            </ul>
          )}
        </div>
        {data?.estimatedTotalHits ? (
          <>
            <Divider />
            <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-between">
              <Typography>
                {t('common.showingResults', {
                  current: data.hits.length,
                  total: data.estimatedTotalHits,
                })}
              </Typography>
              <PaginationWithInput
                currentPage={filters.page}
                totalCount={Math.ceil(data.estimatedTotalHits / filters.pageSize)}
                onPageChange={(page) => setFilters((previousState) => ({ ...previousState, page }))}
              />
            </div>
          </>
        ) : null}
      </div>
    </SectionContainer>
  )
}
export default ArticlesSection
