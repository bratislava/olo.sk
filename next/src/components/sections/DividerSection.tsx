import React from 'react'

import Divider from '@/src/components/common/Sidebar/Divider'
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
      <Divider />
    </SectionContainer>
  )
}

export default DividerSection
