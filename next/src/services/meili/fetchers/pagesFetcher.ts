import { PageSlugEntityFragment } from '@/src/services/graphql/api'

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
        'page.id',
        'page.slug',
        'page.parentPage',
      ],
    })
    .then(unwrapFromSearchIndex('page'))
    .then((response) => {
      const hits: PageSlugEntityFragment[] = response.hits.map((hit) => {
        return {
          __typename: 'PageEntity',
          id: hit.id,
          attributes: {
            __typename: 'Page',
            slug: hit.slug,
            title: hit.title,
            updatedAt: hit.updatedAt,
            // Similar to graphql fragment PageParentPages, we need to
            // reach several parent levels in order to construct the path to the page
            parentPage: hit.parentPage
              ? {
                  data: {
                    attributes: {
                      slug: hit.slug,
                      title: hit.title,
                      parentPage: hit.parentPage
                        ? {
                            data: {
                              attributes: {
                                slug: hit.slug,
                                title: hit.title,
                                parentPage: hit.parentPage
                                  ? {
                                      data: {
                                        attributes: {
                                          slug: hit.slug,
                                          title: hit.title,
                                          parentPage: hit.parentPage
                                            ? {
                                                data: {
                                                  attributes: {
                                                    slug: hit.slug,
                                                    title: hit.title,
                                                  },
                                                },
                                              }
                                            : undefined,
                                        },
                                      },
                                    }
                                  : undefined,
                              },
                            },
                          }
                        : undefined,
                    },
                  },
                }
              : undefined,
          },
        } as const
      })

      return { ...response, hits }
    })
}
