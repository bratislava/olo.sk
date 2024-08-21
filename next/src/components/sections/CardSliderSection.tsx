import BasicCard from '@/src/components/common/Card/BasicCard'
import ResponsiveCarousel from '@/src/components/common/Carousel/ResponsiveCarousel'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import {
  CardSliderSectionFragment,
  Enum_Componentsectionscardslider_Backgroundcolor,
} from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: CardSliderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-14043&m=dev
 */

const CardSliderSection = ({ section }: Props) => {
  const {
    title,
    text,
    backgroundColorCardSlider: backgroundColor,
    cardsCardSlider: cards,
  } = section

  const filteredCards = cards?.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background={backgroundColor} className="py-6 lg:py-18">
      <div className="flex flex-col gap-6 lg:gap-12">
        <SectionHeader title={title} text={text} />
        {filteredCards.length > 0 ? (
          <ResponsiveCarousel
            desktop={3}
            shiftVariant="byPage"
            controlsVariant="bottom"
            items={filteredCards.map((card) => {
              return (
                <BasicCard
                  title={card.title}
                  subtext={card.text}
                  link={card.link}
                  imgSrc={card.image?.data?.attributes?.url}
                  // TODO get backgound color from a provider
                  hasWhiteBackground={
                    backgroundColor === Enum_Componentsectionscardslider_Backgroundcolor.Primary
                  }
                  className="h-full"
                />
              )
            })}
          />
        ) : null}
      </div>
    </SectionContainer>
  )
}

export default CardSliderSection
