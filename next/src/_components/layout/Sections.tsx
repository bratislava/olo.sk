import React from 'react'

import Section1 from '@/_components/sections/Section1'
import { PageSectionsFragment } from '@/services/graphql/api'

type Props = {
  sections: PageSectionsFragment[]
}

const SectionContent = ({ section }: { section: PageSectionsFragment }) => {
  switch (section.__typename) {
    // TODO to be removed, just as example
    case 'ComponentSectionsSection1':
      return <Section1 section={section} />
  }
}

const Sections = ({ sections }: Props) => {
  return (
    <>
      {sections.map((section, index) => (
        <SectionContent key={index} section={section} />
      ))}
    </>
  )
}

export default Sections
