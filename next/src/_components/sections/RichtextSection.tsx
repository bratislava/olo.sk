import React from 'react'

import BlockRendererClient from '@/_components/layout/BlockRendererClient'
import Section from '@/_components/layout/Section/Section'
import { RichtextSectionFragment } from '@/services/graphql/api'

type Props = {
  section: RichtextSectionFragment
}

// TODO
const RichtextSection = ({ section }: Props) => {
  return (
    <Section>
      <BlockRendererClient content={section.content} />
      {/* <div className="whitespace-pre-wrap">{JSON.stringify(section.content, null, 2)}</div> */}
    </Section>
  )
}

export default RichtextSection