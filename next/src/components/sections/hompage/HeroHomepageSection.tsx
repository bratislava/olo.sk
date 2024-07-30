import React from 'react'

import HomepageMainTile from '@/src/components/common/Card/HomepageMainTile'
import HomepageSmallTile from '@/src/components/common/Card/HomepageSmallTile'
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

  const { mainTiles, smallTiles } = section ?? {}

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-4 lg:gap-12">
        <div className="grid h-[450px] grid-rows-2 gap-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
          {/* TODO slider */}
          <div className="border-content-default rounded-xl border border-dashed border-action-background-default bg-background-tertiary lg:col-span-2 lg:row-span-2" />

          {mainTiles?.filter(isDefined).map((tile) => {
            const { children: label, href } = getLinkProps(tile.link)

            return <HomepageMainTile title={label} linkHref={href} text={tile.text} />
          })}
        </div>

        {/* TODO Carousel on mobile */}
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {smallTiles?.filter(isDefined).map((tile) => {
            const { children: label, href } = getLinkProps(tile.link)

            return (
              <li>
                <HomepageSmallTile
                  // iconName={tile?.icon ?? undefined}
                  title={label}
                  linkHref={href}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default HeroHomepageSection
