import React from 'react'

import HomepageMainTile from '@/src/components/common/Card/HomepageMainTile'
import HomepageSmallTile from '@/src/components/common/Card/HomepageSmallTile'
import Slider from '@/src/components/common/Slider/Slider'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { HeroHomepageSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type Props = {
  section: HeroHomepageSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1058-10056&m=dev
 */

const HeroHomepageSection = ({ section }: Props) => {
  const { getLinkProps } = useGetLinkProps()
  const { slides, mainTiles, smallTiles } = section ?? {}

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredSlides = slides?.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-4 lg:gap-12">
        {/* 28.125rem = 450px */}
        <div className="flex flex-col gap-4 lg:grid lg:h-[28.125rem] lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-8 lg:gap-y-6">
          {filteredSlides?.length ? <Slider slides={filteredSlides} /> : null}

          {mainTiles?.filter(isDefined).map((tile, index) => {
            const { children: label, href } = getLinkProps(tile.link)

            // eslint-disable-next-line react/no-array-index-key
            return <HomepageMainTile key={index} title={label} linkHref={href} text={tile.text} />
          })}
        </div>

        {/* TODO Carousel on mobile */}
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {smallTiles?.filter(isDefined).map((tile, index) => {
            const { children: label, href } = getLinkProps(tile.link)

            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className="[&>*]:h-full">
                <HomepageSmallTile iconName={tile?.icon ?? ''} title={label} linkHref={href} />
              </li>
            )
          })}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default HeroHomepageSection
