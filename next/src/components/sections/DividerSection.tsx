import React from 'react'

import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { DividerSectionFragment } from '@/src/services/graphql/api'

type Props = {
  section: DividerSectionFragment
}

/**
 * Figma: TODO
 */

const DividerSection = ({ section }: Props) => {
  const { backgroundColorDivider: backgroundColor } = section

  return (
    <SectionContainer background={backgroundColor ?? 'primary'} className="w-full">
      <SidebarDivider />
    </SectionContainer>
  )
}

export default DividerSection
