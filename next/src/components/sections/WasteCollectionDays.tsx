import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useRef, useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'

import PaginationWithInput from '@/src/components/common/Pagination/PaginationWithInput'
import SearchBar from '@/src/components/common/SearchBar/SearchBar'
import Typography from '@/src/components/common/Typography/Typography'
import Markdown from '@/src/components/formatting/Markdown'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import {
  WasteCollectionDayEntityFragment,
  WasteCollectionDaysFragment,
} from '@/src/services/graphql/api'
import {
  getMeiliWasteCollectionDaysQueryKey,
  meiliWasteCollectionDaysFetcher,
  wasteCollectionDaysDefaultFilters,
} from '@/src/services/meili/fetchers/wasteCollectionDaysFetcher'
import cn from '@/src/utils/cn'
import { useHorizontalScrollFade } from '@/src/utils/useHorizontalScrollFade'
import { useRoutePreservedState } from '@/src/utils/useRoutePreservedState'

type Props = {
  section: WasteCollectionDaysFragment
}

const Table = ({
  rows,
  visibleColumns,
}: {
  rows: WasteCollectionDayEntityFragment[]
  visibleColumns: string[] | null | undefined // WasteCollectionDaysFragment[ 'visibleColumns' ] is unfortunately typed as any, but docs say it should be string[]
}) => {
  const allColumns = [
    'address',
    'registrationNumber',
    'validity',
    'evenWeek',
    'oddWeek',
    'collectionDates',
    'note',
  ] as const

  const columns = visibleColumns?.length
    ? allColumns.filter((value) => visibleColumns.includes(value))
    : allColumns

  // TODO translations
  // Type has to be specified to satisfy Typescript so "headerAllColumns[column]" can be used
  const headerAllColumns: { [key: string]: string } = {
    address: 'Adresa',
    registrationNumber: 'Evidenčné číslo',
    validity: 'Platnosť',
    evenWeek: 'Párny týždeň',
    oddWeek: 'Nepárny týždeň',
    collectionDates: 'Dátumy odvozov',
    note: 'Poznámka',
  }

  const headerColumns = visibleColumns?.length
    ? visibleColumns.map((column) =>
        column in headerAllColumns ? headerAllColumns[column] : column,
      )
    : allColumns.map((column) => headerAllColumns[column])

  const tableWrapperRef = useRef<HTMLDivElement>(null)
  const { scrollFadeClassNames } = useHorizontalScrollFade({ ref: tableWrapperRef })

  return (
    // TODO Table wrapping divs that enable horizontal scrolling are reused from RichtextTable - consider separating
    <div className="lg:flex lg:justify-center">
      {/* 80rem = 1280px (max-width of SectionContainer), 4rem = 64px (its horizontal padding) */}
      <div className="grow lg:-mx-52 lg:max-w-[min(100vw-4rem,80rem-4rem)]">
        <div className="relative">
          <div
            className={cn(
              'overflow-x-auto rounded-lg border border-border-default',
              scrollFadeClassNames,
            )}
            ref={tableWrapperRef}
          >
            <table className="w-full divide-y divide-border-default">
              <thead className="bg-background-secondary">
                <tr className="divide-x divide-border-default">
                  {headerColumns.map((column) => (
                    // Height works like min-height for table cells https://stackoverflow.com/questions/19432092/can-i-use-a-min-height-for-table-tr-or-td
                    // eslint-disable-next-line react/no-array-index-key
                    <th key={column} scope="col" className="h-14 px-5 py-1 text-left">
                      <Typography variant="p-default-bold">{column}</Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-default">
                {rows.map((row) => {
                  if (!row.attributes) return null

                  const cols = columns.map((column) => {
                    return column in row.attributes! ? row.attributes![column] : null
                  })

                  return (
                    <tr key={row.id} className="divide-x divide-border-default">
                      {cols.map((cell, colIndex) => (
                        // Height works like min-height for table cells https://stackoverflow.com/questions/19432092/can-i-use-a-min-height-for-table-tr-or-td
                        // eslint-disable-next-line react/no-array-index-key
                        <td key={colIndex} className="h-14 px-5 py-1">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=2094-18471&m=dev
 */

// TODO This section is in MVP state and should be tested and finished
const WasteCollectionDays = ({ section }: Props) => {
  const { t } = useTranslation()

  const { title, text, anchorId, wasteCollectionDaysType, validityMessage, visibleColumns } =
    section

  const [input, setInput] = useState('')
  const [debouncedInput] = useDebounceValue(input, 300)

  const [filters, setFilters] = useRoutePreservedState(wasteCollectionDaysDefaultFilters)

  const searchRef = useRef<null | HTMLInputElement>(null)

  useEffect(() => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' })
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
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div id={anchorId ?? undefined} className="flex flex-col gap-6 lg:gap-8">
        <SectionHeader
          title={title}
          text={text}
          asRichtext
          isFullWidth
          additionalComponent={
            // TODO implement separate reusable component, see also OpeningTimesChangeAlert
            // TODO add warning icon
            validityMessage ? (
              <div className="flex flex-col gap-4 rounded-lg bg-warning-softBackground-default p-4">
                <Markdown content={validityMessage} />
              </div>
            ) : null
          }
        />

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
            <Table rows={data.hits} visibleColumns={visibleColumns} />
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
      </div>
    </SectionContainer>
  )
}

export default WasteCollectionDays
