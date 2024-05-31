import React from 'react'

import BlocksRenderer from '@/src/components/layout/BlocksRenderer'
import Section from '@/src/components/layout/Section/Section'
import { RichtextSectionFragment } from '@/src/services/graphql/api'

type Props = {
  section: RichtextSectionFragment
}

// TODO
const RichtextSection = ({ section }: Props) => {
  return (
    <Section>
      <BlocksRenderer content={section.content} />
      {/* <div className="whitespace-pre-wrap">{JSON.stringify(section.content, null, 2)}</div> */}
    </Section>
  )
}

export default RichtextSection
