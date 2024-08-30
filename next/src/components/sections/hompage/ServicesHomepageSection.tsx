import React from 'react'

import ServicesTile from '@/src/components/common/Card/ServicesTile'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { ServicesHomepageSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type Props = {
  section: ServicesHomepageSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1058-10545&m=dev
 */

const ServicesHomepageSection = ({ section }: Props) => {
  const { title, text, showMoreLink, tiles } = section ?? {}
  const { getLinkProps } = useGetLinkProps()

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="secondary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} showMoreLink={showMoreLink} />

        {/* TODO use Carousel on mobile https://github.com/bratislava/olo.sk/issues/275 */}
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-8">
          {tiles?.filter(isDefined).map((card, index) => {
            return (
              <ServicesTile
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                title={card.title}
                text={card.text}
                linkProps={getLinkProps(card.link)}
              />
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}

export default ServicesHomepageSection
