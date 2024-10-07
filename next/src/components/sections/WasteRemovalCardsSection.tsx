import BasicCard from '@/src/components/common/Card/BasicCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { CardSliderSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type WasteRemovalCardsSectionProps = {
  section: CardSliderSectionFragment
}

const WasteRemovalCardsSection = ({ section }: WasteRemovalCardsSectionProps) => {
  const {
    title,
    text,
    backgroundColorCardSlider: backgroundColor,
    cardsCardSlider: cards,
  } = section

  const filteredCards = cards?.filter(isDefined) ?? []

  return (
    <SectionContainer background={backgroundColor}>
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
