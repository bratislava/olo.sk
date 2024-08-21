import React from 'react'

import WasteSortingGuide from '@/src/components/common/Accordion/WasteSortingGuide'
import Banner from '@/src/components/common/Banner/Banner'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import {
  Enum_Componentsectionsbanner_Variant,
  SortingGuideSectionFragment,
} from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type Props = {
  section: SortingGuideSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=3361-20820&m=dev
 */

const SortingGuideSection = ({ section }: Props) => {
  const { getLinkProps } = useGetLinkProps()

  const { title, text, sortingGuide, banner } = section

  const { titleGoesHere, titleDoesntGoHere, goesHereItems, doesntGoHereItems } = sortingGuide ?? {}

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const leftColumn = goesHereItems?.map((item) => item?.label).filter(isDefined) ?? []
  // eslint-disable-next-line unicorn/no-array-callback-reference
  const rightColumn = doesntGoHereItems?.map((item) => item?.label).filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-6 lg:gap-12">
        <SectionHeader title={title} text={text} isCentered isFullWidth />
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="rounded-xl border border-border-default">
            <WasteSortingGuide
              leftColumn={{ columnTitle: titleGoesHere, columnItems: leftColumn }}
              rightColumn={{ columnTitle: titleDoesntGoHere, columnItems: rightColumn }}
            />
          </div>
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

export default SortingGuideSection
