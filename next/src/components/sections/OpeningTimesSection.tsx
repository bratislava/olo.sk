import { useTranslation } from 'next-i18next'
import React from 'react'

import DirectionsBox from '@/src/components/common/Box/DirectionsBox'
import OpeningHoursBox from '@/src/components/common/OpeningHoursBox'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { OpeningTimesSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: OpeningTimesSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=6518-27993&t=fe1ufmx8qCTTS0Aw-4
 */

const OpeningTimesSection = ({ section }: Props) => {
  const { title, text, openingTimes, branchLocation } = section ?? {}
  const { t } = useTranslation()

  const filteredOpeningTimes = openingTimes?.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />
        {filteredOpeningTimes.map((openingTimeGroup) => {
          if (!openingTimeGroup.openingTime?.data?.attributes) return null

          const filteredOpeningHours =
            openingTimeGroup.openingTime.data.attributes.openingHours?.filter(isDefined) ?? []

          return (
            <div className="flex flex-col gap-4">
              {openingTimeGroup.title ? (
                <Typography variant="h5">{openingTimeGroup.title}</Typography>
              ) : null}
              <OpeningHoursBox openingHours={filteredOpeningHours} />
            </div>
          )
        })}
        <div className="flex flex-col gap-4">
          <Typography variant="h5">{t('branchPageContent.directionsTitle')}</Typography>
          {branchLocation?.data?.attributes ? <DirectionsBox branch={branchLocation.data} /> : null}
        </div>
      </div>
    </SectionContainer>
  )
}

export default OpeningTimesSection
