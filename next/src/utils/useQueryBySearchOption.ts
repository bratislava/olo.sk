import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import { ReactNode } from 'react'

import { SearchOption } from '@/src/components/sections/GlobalSearchSection'
import {
  ArticleCardEntityFragment,
  DocumentSearchEntityFragment,
  PageCardEntityFragment,
} from '@/src/services/graphql/api'
import {
  ArticlesFilters,
  getMeiliArticlesQueryKey,
  meiliArticlesFetcher,
} from '@/src/services/meili/fetchers/articlesFetcher'
import {
  getMeiliDocumentsQueryKey,
  meiliDocumentsFetcher,
} from '@/src/services/meili/fetchers/documentsFetcher'
import {
  getMeiliPagesQueryKey,
  meiliPagesFetcher,
  PagesFilters,
} from '@/src/services/meili/fetchers/pagesFetcher'
import { formatDate } from '@/src/utils/formatDate'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

export type SearchFilters = PagesFilters | ArticlesFilters

export type SearchResult = {
  title: string | null | undefined
  uniqueId?: string | null | undefined
  linkHref?: string | null | undefined
  metadata?: (string | null | undefined)[]
  coverImageSrc?: string | null | undefined
  customIconName?: string
  customIcon?: ReactNode
}

export const useQueryBySearchOption = ({
  optionKey,
  filters,
}: {
  optionKey: SearchOption['id']
  filters: SearchFilters
}) => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { getFullPath } = useGetFullPath()

  const pagesQuery = useQuery({
    queryFn: () => meiliPagesFetcher(filters, locale),
    queryKey: getMeiliPagesQueryKey(filters, locale),
    placeholderData: keepPreviousData,
    select: (data) => {
      const formattedData: SearchResult[] =
        data?.hits.map((page: PageCardEntityFragment): SearchResult => {
          return {
            title: page.attributes?.title,
            uniqueId: page.attributes?.slug,
            linkHref: getFullPath(page),
            metadata: [formatDate(page.attributes?.updatedAt)],
          }
        }) ?? []

      return { searchResultsData: formattedData, searchResultsCount: data?.estimatedTotalHits ?? 0 }
    },
  })

  const articlesQuery = useQuery({
    queryKey: getMeiliArticlesQueryKey(filters, locale),
    queryFn: () => meiliArticlesFetcher(filters, locale),
    placeholderData: keepPreviousData,
    select: (data) => {
      const formattedData: SearchResult[] =
        data?.hits?.map((article: ArticleCardEntityFragment): SearchResult => {
          return {
            title: article.attributes?.title,
            uniqueId: article.attributes?.slug,
            linkHref: getFullPath(article),
            coverImageSrc: article.attributes?.coverMedia?.data?.attributes?.url,
            metadata: [
              article.attributes?.articleCategory?.data?.attributes?.title,
              formatDate(article.attributes?.addedAt),
              // eslint-disable-next-line unicorn/no-array-callback-reference
            ].filter(isDefined),
          }
        }) ?? []

      return { searchResultsData: formattedData, searchResultsCount: data?.estimatedTotalHits ?? 0 }
    },
  })

  const documentsQuery = useQuery({
    queryFn: () => meiliDocumentsFetcher(filters),
    queryKey: getMeiliDocumentsQueryKey(filters),
    placeholderData: keepPreviousData,
    select: (data) => {
      const formattedData: SearchResult[] =
        data?.hits.map((document: DocumentSearchEntityFragment): SearchResult => {
          return {
            title: document.attributes?.title,
            uniqueId: document.attributes?.slug,
            linkHref: getFullPath(document),
            metadata: [
              document.attributes?.documentCategory?.data?.attributes?.title,
              formatDate(document.attributes?.publishedAt),
              // eslint-disable-next-line unicorn/no-array-callback-reference
            ].filter(isDefined),
          }
        }) ?? []

      return { searchResultsData: formattedData, searchResultsCount: data?.estimatedTotalHits ?? 0 }
    },
  })

  switch (optionKey) {
    case 'pages':
      return pagesQuery

    case 'articles':
      return articlesQuery

    case 'documents':
      return documentsQuery

    default:
      return null
  }
}
