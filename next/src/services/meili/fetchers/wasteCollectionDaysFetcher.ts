import { WasteCollectionDayEntityFragment } from '@/src/services/graphql/api'

import { meiliClient } from '../meiliClient'
import { SearchIndexWrapped, WasteCollectionDayMeili } from '../types'
import { getMeilisearchPageOptions, unwrapFromSearchIndex } from '../utils'

export type WasteCollectionDaysFilters = {
  search: string
  page: number
  pageSize: number
}

export const wasteCollectionDaysDefaultFilters: WasteCollectionDaysFilters = {
  search: '',
  page: 1,
  pageSize: 5,
}

export const getMeiliWasteCollectionDaysQueryKey = (
  filters: WasteCollectionDaysFilters,
  wasteCollectionDaysType?: string,
) => ['WasteCollectionDays', filters, wasteCollectionDaysType]

export const meiliWasteCollectionDaysFetcher = (
  filters: WasteCollectionDaysFilters,
  wasteCollectionDaysType?: string,
) => {
  return meiliClient
    .index('waste-collection-day')
    .search<SearchIndexWrapped<'waste-collection-day', WasteCollectionDayMeili>>(filters.search, {
      ...getMeilisearchPageOptions({ page: filters.page, pageSize: filters.pageSize }),
      filter: [
        'type = "waste-collection-day"',
        wasteCollectionDaysType ? `waste-collection-day.type = ${wasteCollectionDaysType}` : '',
      ],
      sort: ['waste-collection-day.address:asc'],
    })
    .then(unwrapFromSearchIndex('waste-collection-day'))
    .then((response) => {
      const hits: WasteCollectionDayEntityFragment[] = response.hits.map((hit) => {
        return {
          __typename: 'WasteCollectionDayEntity',
          id: hit.id,
          attributes: {
            __typename: 'WasteCollectionDay',
            ...hit,
          },
        }
      })

      return { ...response, hits }
    })
}
