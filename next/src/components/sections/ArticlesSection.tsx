import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef, useState } from 'react'
import { StringParam, useQueryParam, withDefault } from 'use-query-params'
import { useDebounceValue } from 'usehooks-ts'

import ArticleCard from '@/src/components/common/Card/ArticleCard'
import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import SearchBar from '@/src/components/common/SearchBar/SearchBar'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import Spinner from '@/src/components/common/Spinner/Spinner'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { client } from '@/src/services/graphql'
import { ArticlesSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

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

  const { title } = section

  const [routerQueryValue] = useQueryParam('keyword', withDefault(StringParam, ''))
  const [input, setInput] = useState('')
  const [debouncedInput] = useDebounceValue(input, 300)
  const [searchValue, setSearchValue] = useState(debouncedInput)

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchValue])

  const searchFilters = {
    search: searchValue,
    page: currentPage,
    pageSize: 20,
  }

  const searchRef = useRef<null | HTMLInputElement>(null)

  useEffect(() => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [searchFilters.page, searchFilters.pageSize])

  useEffect(() => {
    setInput(routerQueryValue)
  }, [routerQueryValue])

  useEffect(() => {
    setSearchValue(debouncedInput)
  }, [debouncedInput])

  // TODO change to meilisearch and implement search and pagination
  const { data: articlesData, status } = useQuery({
    queryFn: () => client.SearchArticles({ ...searchFilters, locale }),
    queryKey: ['latestArticles', { ...searchFilters, locale }],
  })

  const searchResultsCount = articlesData?.articles?.meta.pagination.total ?? 0

  const { getFullPath } = useGetFullPath()

  const filteredArticles =
    articlesData?.articles?.data.filter((article) => isDefined(article?.attributes)) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-6 lg:gap-12">
        <div className="flex flex-col gap-6 lg:gap-8">
          <SectionHeader title={title} />
          <SearchBar
            ref={searchRef}
            input={input}
            setInput={setInput}
            setSearchQuery={setSearchValue}
            // TODO When meilisearch fetcher is implemented, set isLoading={fetchingQueriesCount > 0}
            isLoading={status === 'pending'}
          />
          {searchResultsCount > 0 ? null : (
            <Typography variant="p-default">{t('articlesSection.search.noResults')}</Typography>
          )}
          {status === 'pending' ? (
            // We add padding to lessen flickering when loading
            <Spinner className="py-[25%]" />
          ) : null}
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {filteredArticles.length > 0
              ? filteredArticles
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
                  .filter(isDefined)
              : null}
          </ul>
        </div>
        <SidebarDivider />
        <div className="flex justify-center">
          <PaginationWithInput
            currentPage={searchFilters.page}
            totalCount={
              searchResultsCount > 0 ? Math.ceil(searchResultsCount / searchFilters.pageSize) : 1
            }
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </SectionContainer>
  )
}
export default ArticlesSection
