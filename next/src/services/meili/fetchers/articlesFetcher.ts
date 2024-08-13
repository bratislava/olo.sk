import { meiliClient } from '../meiliClient'
import { ArticleMeili, SearchIndexWrapped } from '../types'
import { getMeilisearchPageOptions, unwrapFromSearchIndex } from '../utils'

export type ArticlesFilters = {
  search: string
  page: number
  pageSize: number
}

export const pagesDefaultFilters: ArticlesFilters = {
  search: '',
  page: 1,
  pageSize: 5,
}

export const getMeiliArticlesQueryKey = (filters: ArticlesFilters, locale: string) => [
  'Search',
  'Articles',
  filters,
  locale,
]

export const meiliArticlesFetcher = (filters: ArticlesFilters, locale: string) => {
  return meiliClient
    .index('search_index')
    .search<SearchIndexWrapped<'article', ArticleMeili>>(filters.search, {
      ...getMeilisearchPageOptions({
        page: filters.page ?? pagesDefaultFilters.page,
        pageSize: filters.pageSize ?? pagesDefaultFilters.pageSize,
      }),
      filter: ['type = "article"', `locale = ${locale}`],
      sort: ['article.publishedAtTimestamp:desc'],
      attributesToRetrieve: [
        // Only properties that are required to display listing are retrieved
        'article.title',
        'article.slug',
      ],
    })
    .then(unwrapFromSearchIndex('article'))
    .then((response) => {
      const hits = response.hits.map((article) => {
        return {
          // used in useGetFullPath to distinguish between different types of entities
          type: response.type,
          ...article,
        } as const
      })

      return { ...response, hits }
    })
}
