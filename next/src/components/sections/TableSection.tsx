import React from 'react'

import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import PlaceholderWrapper from '@/src/components/placeholder/PlaceholderWrapper'
import { TableSectionFragment } from '@/src/services/graphql/api'

type Props = {
  section: TableSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=2094-18471&m=dev
 */

const TableSection = ({ section }: Props) => {
  const { title, text, anchorId } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div id={anchorId ?? undefined} className="flex flex-col gap-6 lg:gap-12">
        <SectionHeader title={title} text={text} />

        {/* TODO replace with proper table */}
        <div className="flex">
          <PlaceholderWrapper className="-m-2 rounded-lg border-action-background-default p-2 opacity-100">
            <div className="overflow-hidden rounded-lg border border-border-default">
              <table className="divide-y divide-border-default">
                <thead className="bg-background-secondary">
                  <tr className="divide-x divide-border-default">
                    {['Column 1', 'Column 2', 'Column 3'].map((column, colIndex) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <th key={colIndex} scope="col" className="px-6 py-4 text-left">
                        <Typography variant="p-default-bold">{column}</Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default">
                  {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    Array.from({ length: 4 }).map((row, rowIndex) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <tr key={rowIndex} className="divide-x divide-border-default">
                        {
                          // eslint-disable-next-line @typescript-eslint/no-unused-vars
                          Array.from({ length: 3 }).map((cell, colIndex) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <td key={colIndex} className="whitespace-nowrap px-6 py-4">
                              ...
                            </td>
                          ))
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </PlaceholderWrapper>
        </div>
      </div>
    </SectionContainer>
  )
}

export default TableSection