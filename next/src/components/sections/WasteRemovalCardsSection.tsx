import React from 'react'

import BasicCard from '@/src/components/common/Card/BasicCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { WasteRemovalCardsSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type WasteRemovalCardsSectionProps = {
  section: WasteRemovalCardsSectionFragment
}

const WasteRemovalCardsSection = ({ section }: WasteRemovalCardsSectionProps) => {
  const { title, text, cardsWasteRemovalCardsSection: cards } = section

  const filteredCards = cards?.filter(isDefined) ?? []

  return (
    <SectionContainer background="primary">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
          {filteredCards.map((card) => {
            return (
              <BasicCard
                key={card.title}
                title={card.title}
                subtext={card.text}
                imgSrc={card.image?.data?.attributes?.url}
              />
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}

export default WasteRemovalCardsSection