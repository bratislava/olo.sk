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
        <div className="grid h-[450px] grid-rows-2 gap-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
          {/* TODO slider */}
          <div
            className="relative overflow-hidden rounded-xl border border-dashed bg-background-tertiary lg:col-span-2 lg:row-span-2"
            style={{ background: slide?.backgroundColor ?? '#FEFEFE' }} // TODO default color?
          >
            {slide ? (
              <div className="h-full px-6 py-8">
                <div className="flex h-full flex-col justify-between">
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

                {slide.media.data?.attributes?.url ? (
                  // TODO sizes in rems, alt
                  <div className="absolute bottom-0 right-0 flex h-[322px] w-[612px]">
                    <Image src={slide.media.data?.attributes?.url} alt="" fill />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>

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
              <li className="[&>*]:h-full">
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
