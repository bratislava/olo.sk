import Image from 'next/image'
import React from 'react'

import Button from '@/src/components/common/Button/Button'
import HomepageMainTile from '@/src/components/common/Card/HomepageMainTile'
import HomepageSmallTile from '@/src/components/common/Card/HomepageSmallTile'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
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

  const slide = slides?.length ? slides[0] : null

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-4 lg:gap-12">
        <div className="flex flex-col gap-4 lg:grid lg:h-[450px] lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-8 lg:gap-y-6">
          {/* TODO slider */}
          <div
            className="relative overflow-hidden rounded-xl border border-dashed bg-background-tertiary lg:col-span-2 lg:row-span-2"
            style={{ background: slide?.backgroundColor ?? '#FEFEFE' }} // TODO default color?
          >
            {slide ? (
              <div className="flex h-full flex-col">
                {slide.media.data?.attributes?.url ? (
                  // TODO sizes in rems
                  <div className="relative flex aspect-heroSliderMedia lg:absolute lg:bottom-0 lg:right-0 lg:h-[322px]">
                    <Image
                      src={slide.media.data.attributes.url}
                      alt={slide.media.data.attributes.alternativeText ?? ''}
                      fill
                      className="pointer-events-none object-contain"
                    />
                  </div>
                ) : null}

                <div className="h-full px-4 py-6 lg:px-6 lg:py-8">
                  <div className="flex h-full flex-col justify-between gap-4">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <Typography variant="h3">{slide.title}</Typography>
                        {slide.text ? (
                          <Typography variant="p-default">{slide.text}</Typography>
                        ) : null}
                      </div>
                      {slide.link ? (
                        <Button variant="black-solid" asLink {...getLinkProps(slide.link)} />
                      ) : null}
                    </div>

                    {/* TODO arrows functionality and aria labels */}
                    <div className="flex gap-3">
                      <Button
                        variant="unstyled"
                        icon={<Icon name="sipka-dolava" />}
                        aria-label="todo"
                        className="rounded-full border border-dashed bg-background-primary p-2"
                        isDisabled
                      />
                      <Button
                        variant="unstyled"
                        icon={<Icon name="sipka-doprava" />}
                        aria-label="todo"
                        className="rounded-full border border-dashed bg-background-primary p-2"
                        isDisabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

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
