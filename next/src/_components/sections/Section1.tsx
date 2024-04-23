import React from 'react'

import Section from '@/_components/layout/Section/Section'
import SectionHeader from '@/_components/layout/Section/SectionHeader'
import { Section1Fragment } from '@/services/graphql/api'

type Props = {
  section: Section1Fragment
}

// TODO to be removed, just as example
const Section1 = ({ section }: Props) => {
  return (
    <Section>
      <SectionHeader title={section.title} text="asdfascda" />
    </Section>
  )
}

export default Section1
