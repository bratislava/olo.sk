import {
  ServiceCategoryEntityFragment,
  ServiceSearchEntityFragment,
} from '@/src/services/graphql/api'

import { meiliClient } from '../meiliClient'
import { SearchIndexWrapped } from '../types'
import { getMeilisearchPageOptions, unwrapFromSearchIndex } from '../utils'

export type ServicesFilters = {
  search: string
  page: number
  pageSize: number
}

export const servicesDefaultFilters: ServicesFilters = {
  search: '',
  page: 1,
  pageSize: 6,
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
      filter: ['type = "service"'],
      attributesToRetrieve: [
        // Only properties that are required to display listing are retrieved
        'service.id',
        'service.title',
        'service.slug',
        'service.serviceCategories',
        'service.serviceCategories.title',
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
              data: hit.serviceCategories.map(
                (category: ServiceCategoryEntityFragment['attributes']) =>
                  category
                    ? {
                        attributes: { title: category.title },
                      }
                    : undefined,
              ),
            },
          },
        }
      })

      return { ...response, hits }
    })
}
