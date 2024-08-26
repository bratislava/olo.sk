import React from 'react'

import Banner from '@/src/components/common/Banner/Banner'
import WasteSortingCard from '@/src/components/common/Card/WasteSortingCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import {
  Enum_Componentsectionsbanner_Variant,
  WasteSortingCardsSectionFragment,
} from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type Props = {
  section: WasteSortingCardsSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=5979-22839&m=dev
 */

const WasteSortingCardsSection = ({ section }: Props) => {
  const { getLinkProps } = useGetLinkProps()

  const { title, text, cardsWasteSortingCards: cards, banner } = section

  const filteredCards = cards?.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />
        <div className="flex flex-col gap-6 lg:gap-18">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {filteredCards.map((card, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <WasteSortingCard
                    title={card.title}
                    wasteType={card.variant}
                    linkHref={getLinkProps(card.link).href}
                    className="h-full"
                  />
                </li>
              )
            })}
          </ul>
          {banner ? (
            <Banner
              variant={
                banner.variant === Enum_Componentsectionsbanner_Variant.BackgroundGrey
                  ? 'background-grey'
                  : 'background-black'
              }
              title={banner.titleRequired}
              subtext={banner.text}
              button1LinkHref={getLinkProps(banner.primaryButtonLink).href}
              button1Text={getLinkProps(banner.primaryButtonLink).children}
              imgSrc={banner.image?.data?.attributes?.url}
            />
          ) : null}
        </div>
      </div>
    </SectionContainer>
  )
}

export default WasteSortingCardsSection
