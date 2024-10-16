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
      {/* 50 rem = 800px */}
      <div className="max-w-[50rem]">
        <Markdown content={content} />
      </div>
    </SectionContainer>
  )
}

export default RichtextSection
