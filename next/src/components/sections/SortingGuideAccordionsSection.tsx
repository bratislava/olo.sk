import React from 'react'

import Accordion from '@/src/components/common/Accordion/Accordion'
import WasteIcon from '@/src/components/common/Accordion/WasteIcon'
import WasteSortingGuide from '@/src/components/common/Accordion/WasteSortingGuide'
import Banner from '@/src/components/common/Banner/Banner'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import {
  Enum_Componentsectionsbanner_Variant,
  SortingGuideAccordionsSectionFragment,
} from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type Props = {
  section: SortingGuideAccordionsSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=5979-22839&m=dev
 */

const SortingGuideSection = ({ section }: Props) => {
  const { getLinkProps } = useGetLinkProps()

  const { title, text, sortingGuideAccordions, banner } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} isCentered isFullWidth />

        <div className="flex flex-col gap-6 lg:gap-18">
          {/* TODO common group div */}
          <div className="divide-y divide-border-default rounded-xl border border-border-default">
            {sortingGuideAccordions
              ?.filter(isDefined)
              .map(({ title: accordionTitle, wasteType, sortingGuide }) => {
                const { titleGoesHere, titleDoesntGoHere, goesHereItems, doesntGoHereItems } =
                  sortingGuide ?? {}
                // eslint-disable-next-line unicorn/no-array-callback-reference
                const leftColumn = goesHereItems?.map((item) => item?.label).filter(isDefined) ?? []
                const rightColumn =
                  // eslint-disable-next-line unicorn/no-array-callback-reference
                  doesntGoHereItems?.map((item) => item?.label).filter(isDefined) ?? []

                return (
                  <Accordion
                    title={accordionTitle}
                    icon={<WasteIcon variant={wasteType} />}
                    hasBottomBorder={false}
                  >
                    <WasteSortingGuide
                      leftColumn={{ columnTitle: titleGoesHere, columnItems: leftColumn }}
                      rightColumn={{ columnTitle: titleDoesntGoHere, columnItems: rightColumn }}
                    />
                  </Accordion>
                )
              })}
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
