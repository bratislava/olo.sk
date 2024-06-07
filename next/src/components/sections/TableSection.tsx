import React from 'react'

import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { TableSectionFragment } from '@/src/services/graphql/api'

type Props = {
  section: TableSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=2094-18471&m=dev
 */

const TableSection = ({ section }: Props) => {
  // TODO implement showing all workshops based on showAll prop
  const { title, text, anchorId } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div id={anchorId ?? undefined} className="flex flex-col gap-6 lg:gap-12">
        <SectionHeader title={title} text={text} />
        {/* TODO: Add table */}
        TODO: Here goes table
      </div>
    </SectionContainer>
  )
}

export default TableSection
