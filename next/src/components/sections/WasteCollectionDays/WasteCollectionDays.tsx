import React from 'react'

import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import WasteCollectionDaysSectionContent from '@/src/components/sections/WasteCollectionDays/WasteCollectionDaysSectionContent'
import WasteCollectionDaysSectionTabs from '@/src/components/sections/WasteCollectionDays/WasteCollectionDaysSectionTabs'
import WasteCollectionDaysValidityMessage from '@/src/components/sections/WasteCollectionDays/WasteCollectionDaysValidityMessage'
import { WasteCollectionDaysFragment } from '@/src/services/graphql/api'

type Props = {
  section: WasteCollectionDaysFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=2094-18471&m=dev
 */

const WasteCollectionDays = ({ section }: Props) => {
  const { title, text, anchorId, wasteCollectionDaysType, validityMessage, visibleColumns } =
    section

  // See WasteCollectionDaysSectionTabs for string format explanation
  const isWithTabs = wasteCollectionDaysType?.includes(',')

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div id={anchorId ?? undefined} className="flex flex-col gap-6 lg:gap-8">
        <SectionHeader
          title={title}
          text={text}
          asRichtext
          isFullWidth
          additionalComponent={
            validityMessage ? (
              <WasteCollectionDaysValidityMessage content={validityMessage} />
            ) : null
          }
        />
        {isWithTabs ? (
          <WasteCollectionDaysSectionTabs
            wasteCollectionDaysType={wasteCollectionDaysType}
            visibleColumns={visibleColumns}
          />
        ) : (
          <WasteCollectionDaysSectionContent
            wasteCollectionDaysType={wasteCollectionDaysType}
            visibleColumns={visibleColumns}
          />
        )}
      </div>
    </SectionContainer>
  )
}

export default WasteCollectionDays
