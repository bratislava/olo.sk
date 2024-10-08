import { ReactNode } from 'react'

import Typography from '@/src/components/common/Typography/Typography'

// Table component inspired by Table component used in WasteCollectionDays component
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

  return (
    <div className="overflow-hidden rounded-lg border border-border-default">
      <table className="divide-y divide-border-default">
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
  )
}

export default Table
