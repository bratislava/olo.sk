import { useQuery } from '@tanstack/react-query'
import React from 'react'

import WorkshopCard from '@/src/components/common/Card/WorkshopCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { client } from '@/src/services/graphql'
import { WorkshopsSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type Props = {
  section: WorkshopsSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1204-14660&m=dev
 */

const WorkshopsSection = ({ section }: Props) => {
  const { getFullPath } = useGetFullPath()

  const { title, text, workshops, showAll } = section

  // TODO consider optimalizing so that we don't fetch this much when showAll is false
  const { data: allWorkshops } = useQuery({
    queryFn: () => client.Workshops(),
    queryKey: ['workshops'],
  })

  const workshopsToRender =
    // eslint-disable-next-line unicorn/no-array-callback-reference
    (showAll ? allWorkshops?.workshops : workshops)?.data.filter(isDefined) ?? []

  // // eslint-disable-next-line unicorn/no-array-callback-reference
  // const filteredWorkshops = workshops?.data.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div className="flex flex-col gap-6 lg:gap-12">
        <SectionHeader title={title} text={text} />
        <ul className=" grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {workshopsToRender
            .map((workshop, index) => {
              if (!workshop.attributes) return null

              const { title: workshopTitle } = workshop.attributes

              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <WorkshopCard title={workshopTitle} linkHref={getFullPath(workshop) ?? '#'} />
                </li>
              )
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default WorkshopsSection
