import React from 'react'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import Typography from '@/src/components/common/Typography/Typography'
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
          {tiles?.filter(isDefined).map((card) => {
            return (
              <CardBase
                hasWhiteSectionBackground={false}
                variant="background-white"
                className="px-6 py-5"
              >
                <div className="flex h-full flex-col gap-5">
                  <div className="flex grow flex-col gap-2">
                    <Typography
                      variant="h6"
                      as="h3"
                      className_onlyWhenNecessary="group-hover/CardBase:underline"
                    >
                      {card.title}
                    </Typography>
                    {card.text ? <Typography>{card.text}</Typography> : null}
                  </div>

                  <SidebarDivider />

                  {card?.link ? (
                    <Button
                      asLink
                      variant="black-link"
                      fullWidth
                      className="justify-between"
                      stretched
                      {...getLinkProps(card.link)}
                    />
                  ) : null}
                </div>
              </CardBase>
            )
          })}
        </div>
      </div>
    </SectionContainer>
  )
}

export default ServicesHomepageSection
