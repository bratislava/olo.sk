import {
  ServiceCategoryEntityFragment,
  ServiceSearchEntityFragment,
} from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

import { meiliClient } from '../meiliClient'
import { SearchIndexWrapped } from '../types'
import { getMeilisearchPageOptions, unwrapFromSearchIndex } from '../utils'

export type ServicesFilters = {
  search: string
  page: number
  pageSize: number
  categorySlugs?: string[]
}

export const servicesDefaultFilters: ServicesFilters = {
  search: '',
  page: 1,
  pageSize: 9,
}

export const getMeiliServicesQueryKey = (filters: ServicesFilters) => [
  'Search',
  'Services',
  filters,
]

export const meiliServicesFetcher = (filters: ServicesFilters) => {
  return meiliClient
    .index('search_index')
    .search<SearchIndexWrapped<'service', any>>(filters.search, {
      ...getMeilisearchPageOptions({ page: filters.page, pageSize: filters.pageSize }),
      filter: [
        'type = "service"',
        filters.categorySlugs?.length
          ? // eslint-disable-next-line sonarjs/no-nested-template-literals
            filters.categorySlugs.map(
              (categorySlug) => `service.serviceCategories.slug = ${categorySlug}`,
            )
          : null,
        // eslint-disable-next-line unicorn/no-array-callback-reference
      ].filter(isDefined),
      attributesToRetrieve: [
        // Only properties that are required to display listing are retrieved
        'service.id',
        'service.title',
        'service.slug',
        'service.serviceCategories',
        'service.serviceCategories.title',
        'service.serviceCategories.categoryColor',
        'service.publishedAt',
        'service.updatedAt',
        'service.image.url',
        'service.image.name',
      ],
    })
    .then(unwrapFromSearchIndex('service'))
    .then((response) => {
      const hits: ServiceSearchEntityFragment[] = response.hits.map((hit) => {
        return {
          __typename: 'ServiceEntity',
          id: hit.id,
          attributes: {
            __typename: 'Service',
            slug: hit.slug,
            title: hit.title,
            publishedAt: hit.publishedAt,
            updatedAt: hit.updatedAt,
            image:
              hit.image?.url && hit.image?.name
                ? {
                    data: {
                      attributes: {
                        url: hit.image.url,
                        name: hit.image.name,
                      },
                    },
                  }
                : undefined,
            serviceCategories: {
              data: hit.serviceCategories?.length
                ? hit.serviceCategories.map(
                    (category: ServiceCategoryEntityFragment['attributes']) =>
                      category
                        ? {
                            attributes: {
                              title: category.title,
                              categoryColor: category.categoryColor,
                            },
                          }
                        : undefined,
                  )
                : undefined,
            },
          },
        }
      })

      return { ...response, hits }
    })
}
