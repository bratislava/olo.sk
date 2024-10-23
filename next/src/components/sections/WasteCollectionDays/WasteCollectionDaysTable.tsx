import { useTranslation } from 'next-i18next'
import React, { useRef } from 'react'

import Typography from '@/src/components/common/Typography/Typography'
import { WasteCollectionDayEntityFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { useHorizontalScrollFade } from '@/src/utils/useHorizontalScrollFade'

const WasteCollectionDaysTable = ({
  rows,
  visibleColumns,
}: {
  rows: WasteCollectionDayEntityFragment[]
  visibleColumns: string[] | null | undefined // WasteCollectionDaysFragment[ 'visibleColumns' ] is unfortunately typed as any, but docs say it should be string[]
}) => {
  const { t } = useTranslation()

  const allColumns = [
    'address',
    'registrationNumber',
    'evenWeek',
    'oddWeek',
    'collectionDates',
    'note',
  ] as const

  const columns = visibleColumns?.length
    ? allColumns.filter((value) => visibleColumns.includes(value))
    : allColumns

  // Type has to be specified to satisfy Typescript so "headerAllColumns[column]" can be used
  const headerAllColumns: { [key: string]: string } = {
    address: t('wasteCollectionDaysTable.header.address'),
    // eslint-disable-next-line no-secrets/no-secrets
    registrationNumber: t('wasteCollectionDaysTable.header.registrationNumber'),
    evenWeek: t('wasteCollectionDaysTable.header.evenWeek'),
    oddWeek: t('wasteCollectionDaysTable.header.oddWeek'),
    collectionDates: t('wasteCollectionDaysTable.header.collectionDates'),
    note: t('wasteCollectionDaysTable.header.note'),
  } satisfies Record<(typeof allColumns)[number], string>

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

export default WasteCollectionDaysTable
