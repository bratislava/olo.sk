import React from 'react'

import WorkshopCard from '@/_components/common/Card/WorkshopCard'
import SectionContainer from '@/_components/layout/Section/SectionContainer'
import SectionHeader from '@/_components/layout/Section/SectionHeader'
import { isDefined } from '@/_utils/isDefined'
import { WorkshopsSectionFragment } from '@/services/graphql/api'

type Props = {
  section: WorkshopsSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1204-14660&m=dev
 */

const WorkshopsSection = ({ section }: Props) => {
  // TODO implement showing all workshops based on showAll prop
  const { title, text, workshops } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div className="flex flex-col gap-6 lg:gap-12">
        <SectionHeader title={title} text={text} />
        <ul className=" grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {
            // eslint-disable-next-line unicorn/no-array-callback-reference
            workshops?.data?.filter(isDefined).length
              ? workshops.data.map((workshop) => (
                  <li>
                    <WorkshopCard
                      title={workshop.attributes?.title ?? ''}
                      linkHref={`/workshopy/${workshop.attributes?.slug}`}
                    />
                  </li>
                ))
              : null
          }
        </ul>
      </div>
    </SectionContainer>
  )
}

export default WorkshopsSection
