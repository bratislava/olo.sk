import { meiliClient } from '../meiliClient'
import { PageMeili, SearchIndexWrapped } from '../types'
import { getMeilisearchPageOptions, unwrapFromSearchIndex } from '../utils'

export type PagesFilters = {
  search: string
  page: number
  pageSize: number
}

export const pagesDefaultFilters: PagesFilters = {
  search: '',
  page: 1,
  pageSize: 5,
}

export const getMeiliPagesQueryKey = (filters: PagesFilters, locale: string) => [
  'Search',
  'Pages',
  filters,
  locale,
]

export const meiliPagesFetcher = (filters: PagesFilters, locale: string) => {
  return meiliClient
    .index('search_index')
    .search<SearchIndexWrapped<'page', PageMeili>>(filters.search, {
      ...getMeilisearchPageOptions({
        page: filters.page ?? pagesDefaultFilters.page,
        pageSize: filters.pageSize ?? pagesDefaultFilters.pageSize,
      }),
      filter: ['type = "page"', `locale = ${locale}`],
      sort: [],
      attributesToRetrieve: [
        // Only properties that are required to display listing are retrieved
        'page.title',
        'page.slug',
        'page.parentPage',
      ],
    })
    .then(unwrapFromSearchIndex('page'))
    .then((response) => {
      const hits = response.hits.map((page) => {
        return {
          // used in useGetFullPath to distinguish between different types of entities
          type: response.type,
          ...page,
        } as const
      })

      return { ...response, hits }
    })
}
