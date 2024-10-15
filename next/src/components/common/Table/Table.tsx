import { ReactNode, useRef } from 'react'

import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { useHorizontalScrollFade } from '@/src/utils/useHorizontalScrollFade'

// TODO: use this table for table in WasteCollectionDays and Richtext components
const Table = ({
  rows,
  visibleColumns,
  allColumns,
  headerAllColumns,
}: {
  rows: { attributes: { [key: string]: string | ReactNode }; id: string }[] // TODO type this properly
  visibleColumns: string[] | null | undefined
  allColumns: string[]
  headerAllColumns: { [key: string]: string }
}) => {
  const columns = visibleColumns?.length
    ? allColumns.filter((value) => visibleColumns.includes(value))
    : allColumns

  const headerColumns = visibleColumns?.length
    ? visibleColumns.map((column) =>
        column in headerAllColumns ? headerAllColumns[column] : column,
      )
    : allColumns.map((column) => headerAllColumns[column])

  const tableWrapperRef = useRef<HTMLDivElement>(null)
  const { scrollFadeClassNames } = useHorizontalScrollFade({ ref: tableWrapperRef })

  return (
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
                    // eslint-disable-next-line react/no-array-index-key
                    <th key={column} scope="col" className="px-6 py-4 text-left">
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
                        // eslint-disable-next-line react/no-array-index-key
                        <td key={colIndex} className="px-6 py-4">
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

export default Table
