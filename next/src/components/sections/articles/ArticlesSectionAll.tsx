import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef, useState } from 'react'
import { Selection, TagGroup, TagList } from 'react-aria-components'
import { StringParam, useQueryParam, withDefault } from 'use-query-params'
import { useDebounceValue } from 'usehooks-ts'

import ArticleCard from '@/src/components/common/Card/ArticleCard'
import Chip from '@/src/components/common/Chip/Chip'
import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import SearchBar from '@/src/components/common/SearchBar/SearchBar'
import Divider from '@/src/components/common/Sidebar/Divider'
import Typography from '@/src/components/common/Typography/Typography'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { client } from '@/src/services/graphql'
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

const ArticlesSectionAll = ({ section }: Props) => {
  const { t, i18n } = useTranslation()
  const locale = i18n?.language
  const { getFullPath } = useGetFullPath()

  const { title, text } = section

  // SEARCH INPUT

  const [input, setInput] = useState('')
  const [debouncedInput] = useDebounceValue(input, 300)

  const [filters, setFilters] = useRoutePreservedState(articlesDefaultFilters)

  const searchRef = useRef<null | HTMLInputElement>(null)

  useEffect(() => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [filters.page, filters.pageSize])

  // CATEGORY SELECTION

  const { data: articleCategoriesData } = useQuery({
    queryKey: ['ArticleCategories', locale],
    queryFn: () => client.ArticleCategories({ locale }),
  })

  type SelectionOption = { id: string; title: string }

  const selectionOptions: SelectionOption[] = [
    { id: 'all', title: t('articlesSection.selectionOptions.allArticles') },
    ...(articleCategoriesData?.articleCategories?.data
      .map((category) => {
        if (!category.attributes || !category.id) return null

        return { id: category.attributes.slug, title: category.attributes.title }
      })
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined) ?? []),
  ]

  const [selection, setSelection] = useState<Selection>(new Set([selectionOptions[0].id]))

  const handleSelectionChange = (newSelection: Selection) => {
    // If the new selection is empty, select the first option that displays all
    if (new Set(newSelection).size === 0) setSelection(new Set([selectionOptions[0].id]))
    else setSelection(newSelection)
  }

  const selectedKey: SelectionOption['id'] =
    selection !== 'all' && selection.size === 1
      ? selection.values().next().value
      : selectionOptions[0].id

  // URL QUERY PARAMS

  const [routerQueryCategoryValue] = useQueryParam(
    'articleCategory',
    withDefault(StringParam, 'all'),
  )
  const [routerQuerySearchValue] = useQueryParam('search', withDefault(StringParam, ''))

  useEffect(() => {
    setSelection(new Set([routerQueryCategoryValue]))
  }, [routerQueryCategoryValue])

  useEffect(() => {
    setInput(routerQuerySearchValue)
  }, [routerQuerySearchValue])

  // FETCHING

  useEffect(() => {
    setFilters((previousState) => ({
      ...previousState,
      search: debouncedInput,
      page: 1,
      categorySlugs: selectedKey === 'all' ? undefined : [selectedKey],
    }))
  }, [debouncedInput, selectedKey, setFilters])

  const { data, isPending, isError, error, isFetching } = useQuery({
    queryFn: () => meiliArticlesFetcher(filters, locale),
    queryKey: getMeiliArticlesQueryKey(filters, locale),
    placeholderData: keepPreviousData,
  })

  return (
    <div className="flex flex-col gap-6 lg:gap-12">
      <div className="flex flex-col gap-6 lg:gap-8">
        <SectionHeader title={title} text={text} />
        <div className="flex flex-col gap-4 lg:gap-4">
          <SearchBar
            ref={searchRef}
            input={input}
            setInput={setInput}
            setSearchQuery={(value) =>
              setFilters((previousState) => ({ ...previousState, search: value, page: 1 }))
            }
            isLoading={isFetching}
          />
          <TagGroup
            aria-label={t('articlesSection.selectionOptions.aria')}
            selectionMode="single"
            selectedKeys={selection}
            onSelectionChange={handleSelectionChange}
          >
            <TagList className="max-md:negative-x-spacing -m-1.5 flex gap-x-2 overflow-auto p-1.5 scrollbar-hide max-md:flex-nowrap lg:gap-x-4">
              {selectionOptions.map((option, index) => {
                return (
                  <Chip
                    variant="single-choice"
                    size="large"
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    id={option.id}
                    data-cy={`${option.title}-tab`}
                  >
                    {option.title}
                  </Chip>
                )
              })}
            </TagList>
          </TagGroup>
        </div>
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
                      className="h-full"
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
          {/* TODO separate this results count message and pagination into separate component */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-between">
            <Typography>
              {t('globalSearch.searchResultsFound.specific', {
                from: (filters.page - 1) * filters.pageSize + 1,
                to: Math.min(data.estimatedTotalHits, filters.page * filters.pageSize),
                all: data.estimatedTotalHits,
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
  )
}
export default ArticlesSectionAll
