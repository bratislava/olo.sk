import React, { ReactNode } from 'react'

import SectionContainer, {
  SectionContainerProps,
} from '@/src/components/layout/Section/SectionContainer'

type SectionProps = {
  children?: ReactNode
  background?: SectionContainerProps['background']
}

const Section = ({ background, children }: SectionProps) => {
  return (
    <SectionContainer background={background}>
      {/* TODO padding-y should not fixed for all sections, see figma */}
      <div className="py-8">{children}</div>
    </SectionContainer>
  )
}

export default Section
