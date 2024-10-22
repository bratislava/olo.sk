import { DocumentSearchEntityFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

import { meiliClient } from '../meiliClient'
import { SearchIndexWrapped } from '../types'
import { getMeilisearchPageOptions, unwrapFromSearchIndex } from '../utils'

export type DocumentsFilters = {
  search: string
  page: number
  pageSize: number
  categorySlug?: string
}

export const documentsDefaultFilters: DocumentsFilters = {
  search: '',
  page: 1,
  pageSize: 6,
}

export const getMeiliDocumentsQueryKey = (filters: DocumentsFilters) => [
  'Search',
  'Documents',
  filters,
]

export const meiliDocumentsFetcher = (filters: DocumentsFilters) => {
  return meiliClient
    .index('search_index')
    .search<SearchIndexWrapped<'document', any>>(filters.search, {
      ...getMeilisearchPageOptions({ page: filters.page, pageSize: filters.pageSize }),
      filter: [
        'type = "document"',
        filters.categorySlug?.length
          ? `document.documentCategory.slug = ${filters.categorySlug}`
          : null,
        // eslint-disable-next-line unicorn/no-array-callback-reference
      ].filter(isDefined),
      attributesToRetrieve: [
        // Only properties that are required to display listing are retrieved
        'document.id',
        'document.title',
        'document.slug',
        'document.documentCategory.title',
        'document.publishedAt',
        'document.updatedAt',
      ],
    })
    .then(unwrapFromSearchIndex('document'))
    .then((response) => {
      const hits: DocumentSearchEntityFragment[] = response.hits.map((hit) => {
        return {
          __typename: 'DocumentEntity',
          id: hit.id,
          attributes: {
            __typename: 'Document',
            slug: hit.slug,
            title: hit.title,
            publishedAt: hit.publishedAt,
            updatedAt: hit.updatedAt,
            documentCategory: {
              data: {
                attributes: {
                  title: hit.documentCategory?.title,
                },
              },
            },
          },
        }
      })

      return { ...response, hits }
    })
}
