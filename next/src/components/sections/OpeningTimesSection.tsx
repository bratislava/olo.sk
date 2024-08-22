import React from 'react'

import OpeningHoursBox from '@/src/components/common/OpeningHoursBox'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { OpeningTimesSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: OpeningTimesSectionFragment | null | undefined
}

/**
 * Figma temporary link: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=507-9115&m=dev
 */

const OpeningTimesSection = ({ section }: Props) => {
  const { title, text, openingTimes } = section ?? {}

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />
        {openingTimes?.data
          .map((openingTime) => {
            if (!openingTime.attributes) return null

            const filteredOpeningHours =
              openingTime.attributes.openingHours?.filter(isDefined) ?? []

            return <OpeningHoursBox openingHours={filteredOpeningHours} />
          })
          // eslint-disable-next-line unicorn/no-array-callback-reference
          .filter(isDefined)}
      </div>
    </SectionContainer>
  )
}

export default OpeningTimesSection
