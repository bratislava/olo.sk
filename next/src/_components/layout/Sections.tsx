import React from 'react'

import BranchesSection from '@/_components/sections/BranchesSection'
import ColumnsSection from '@/_components/sections/ColumnsSection'
import ImageAndTextOverlappedSection from '@/_components/sections/ImageAndTextOverlappedSection'
import ImageAndTextSection from '@/_components/sections/ImageAndTextSection'
import OrderedCardsSection from '@/_components/sections/OrderedCardsSection'
import RichtextSection from '@/_components/sections/RichtextSection'
import WorkshopsSection from '@/_components/sections/WorkshopsSection'
import { PageSectionsFragment } from '@/services/graphql/api'

type Props = {
  sections: PageSectionsFragment[]
}

const SectionContent = ({ section }: { section: PageSectionsFragment }) => {
  switch (section.__typename) {
    // TODO to be removed, just as example
    case 'ComponentSectionsRichtext':
      return <RichtextSection section={section} />

    case 'ComponentSectionsOrderedCards':
      return <OrderedCardsSection section={section} />

    case 'ComponentSectionsImageAndText':
      return <ImageAndTextSection section={section} />

    case 'ComponentSectionsColumns':
      return <ColumnsSection section={section} />

    // eslint-disable-next-line no-secrets/no-secrets
    case 'ComponentSectionsImageAndTextOverlapped':
      return <ImageAndTextOverlappedSection section={section} />

    case 'ComponentSectionsBranches':
      return <BranchesSection section={section} />

    case 'ComponentSectionsWorkshops':
      return <WorkshopsSection section={section} />

    default:
      return null
  }
}

const Sections = ({ sections }: Props) => {
  return (
    <>
      {sections.map((section, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SectionContent key={index} section={section} />
      ))}
    </>
  )
}

export default Sections
