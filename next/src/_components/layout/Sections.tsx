import React from 'react'

import ColumnedItemsSection from '@/_components/sections/ColumnedItemsSection'
import ImageAndTextSection from '@/_components/sections/ImageAndTextSection'
import OrderedCardsSection from '@/_components/sections/OrderedCardsSection'
import RichtextSection from '@/_components/sections/RichtextSection'
import { PageSectionsFragment } from '@/services/graphql/api'

type Props = {
  sections: PageSectionsFragment[]
}

const SectionContent = ({ section }: { section: PageSectionsFragment }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (section.__typename) {
    // TODO to be removed, just as example
    case 'ComponentSectionsRichtext':
      return <RichtextSection section={section} />

    case 'ComponentSectionsOrderedCards':
      return <OrderedCardsSection section={section} />

    case 'ComponentSectionsImageAndText':
      return <ImageAndTextSection section={section} />

    case 'ComponentSectionsColumnedItems':
      return <ColumnedItemsSection section={section} />

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
