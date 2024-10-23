import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef, useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'

import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import SearchBar from '@/src/components/common/SearchBar/SearchBar'
import Typography from '@/src/components/common/Typography/Typography'
import WasteCollectionDaysTable from '@/src/components/sections/WasteCollectionDays/WasteCollectionDaysTable'
import {
  getMeiliWasteCollectionDaysQueryKey,
  meiliWasteCollectionDaysFetcher,
  wasteCollectionDaysDefaultFilters,
} from '@/src/services/meili/fetchers/wasteCollectionDaysFetcher'
import { useRoutePreservedState } from '@/src/utils/useRoutePreservedState'

type Props = {
  wasteCollectionDaysType: string | null | undefined
  visibleColumns?: string[] | null | undefined
}

const WasteCollectionDaysSectionContent = ({ wasteCollectionDaysType, visibleColumns }: Props) => {
  const { t } = useTranslation()

  const [input, setInput] = useState('')
  const [debouncedInput] = useDebounceValue(input, 300)

  const [filters, setFilters] = useRoutePreservedState(wasteCollectionDaysDefaultFilters)

  const searchRef = useRef<null | HTMLInputElement>(null)

  useEffect(() => {
    // Using "block: 'nearest'" to prevent scrolling on tab change
    searchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [filters.page, filters.pageSize])

  useEffect(() => {
    setFilters((previousState) => ({ ...previousState, search: debouncedInput, page: 1 }))
  }, [debouncedInput, setFilters])

  const { data, isPending, isError, error, isFetching } = useQuery({
    queryFn: () => meiliWasteCollectionDaysFetcher(filters, wasteCollectionDaysType ?? undefined),
    queryKey: getMeiliWasteCollectionDaysQueryKey(filters, wasteCollectionDaysType ?? undefined),
    placeholderData: keepPreviousData,
  })

  return (
    <div className="flex flex-col gap-6">
      <SearchBar
        ref={searchRef}
        input={input}
        setInput={setInput}
        setSearchQuery={(value) =>
          setFilters((previousState) => ({ ...previousState, search: value, page: 1 }))
        }
        isLoading={isFetching}
      />
      {isError ? (
        // TODO display proper error
        <Typography variant="p-default">{error?.message}</Typography>
      ) : isPending ? (
        <Typography variant="p-default">{t('common.loading')}</Typography>
      ) : data?.hits.length ? (
        <WasteCollectionDaysTable rows={data.hits} visibleColumns={visibleColumns} />
      ) : (
        <Typography>{t('globalSearch.noResults')}</Typography>
      )}

      {data?.estimatedTotalHits ? (
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
      ) : null}
    </div>
  )
}

export default WasteCollectionDaysSectionContent
