import React from 'react'

import ListingCard from '@/src/components/common/Card/ListingCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { CardsListSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: CardsListSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=6518-27870&m=dev
 */

const CardsListSection = ({ section }: Props) => {
  const { title, text, cardsCardsList: cards } = section

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredCards = cards?.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredCards
            .map((card, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <ListingCard title={card.title} link={card.link} />
                </li>
              )
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default CardsListSection
