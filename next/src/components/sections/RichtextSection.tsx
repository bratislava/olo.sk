import React from 'react'

import Markdown from '@/src/components/formatting/Markdown'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { RichtextSectionFragment } from '@/src/services/graphql/api'

type Props = {
  section: RichtextSectionFragment
}

const RichtextSection = ({ section }: Props) => {
  const { content, backgroundColorRichtext } = section

  return (
    <SectionContainer background={backgroundColorRichtext} className="py-12">
      <Markdown content={content} />
    </SectionContainer>
  )
}

export default RichtextSection
