import React from 'react'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { ServicesHomepageSectionFragment } from '@/src/services/graphql/api'

type Props = {
  section: ServicesHomepageSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1058-10545&m=dev
 */

const ServicesHomepageSection = ({ section }: Props) => {
  const { title, text } = section ?? {}

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="secondary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-4 lg:gap-12">
        {/* TODO showMoreLink */}
        <SectionHeader title={title ?? ''} text={text} />

        <div className="grid gap-8 border border-dashed border-action-background-default lg:grid-cols-3">
          {['Služby pre obyvateľov', 'Služby pre firmy', 'Služby pre správcovské spoločnosti'].map(
            (card) => {
              // TODO proper component
              return (
                <CardBase
                  hasWhiteSectionBackground={false}
                  variant="background-white"
                  className="px-6 py-5"
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <Typography
                        variant="h6"
                        as="h3"
                        className_onlyWhenNecessary="group-hover/CardBase:underline"
                      >
                        {card}
                      </Typography>
                      <Typography>subtext</Typography>
                    </div>
                    <SidebarDivider />
                    <Button
                      asLink
                      href="#"
                      variant="black-link"
                      fullWidth
                      className="justify-between"
                      stretched
                    >
                      {/* TODO translation */}
                      Prejsť na ponuku
                    </Button>
                  </div>
                </CardBase>
              )
            },
          )}
        </div>
      </div>
    </SectionContainer>
  )
}

export default ServicesHomepageSection
