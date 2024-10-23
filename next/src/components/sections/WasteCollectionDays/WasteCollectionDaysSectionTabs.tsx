import { useTranslation } from 'next-i18next'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-aria-components'

import WasteCollectionDaysSectionContent from '@/src/components/sections/WasteCollectionDays/WasteCollectionDaysSectionContent'

type Props = {
  wasteCollectionDaysType: string | null | undefined
  visibleColumns?: string[] | null | undefined
}

const WasteCollectionDaysSectionTabs = ({ wasteCollectionDaysType, visibleColumns }: Props) => {
  const { t } = useTranslation()

  // We expect the wasteCollectionDaysType to be a string like "Tab Label: wasteType1, Tab Label: wasteType2"
  const tabs =
    wasteCollectionDaysType
      ?.split(';')
      .map((type) => type.trim())
      .map((type) => {
        const [tabLabel, wasteType] = type.split(':')

        return { tabLabel: tabLabel.trim(), wasteType: wasteType.trim() }
      }) ?? []

  return (
    <Tabs className="flex flex-col gap-6">
      <TabList
        aria-label={t('wasteCollectionDaysSectionTabs.aria.tabListName')}
        // "py-2 -my-2" is used to make focus ring visible
        className="negative-x-spacing -my-2 flex gap-x-4 overflow-auto overflow-y-hidden py-2 scrollbar-hide"
      >
        {tabs.map(({ tabLabel, wasteType }) => (
          <Tab
            id={wasteType}
            key={wasteType}
            className="relative cursor-pointer whitespace-nowrap border-b-2 border-transparent px-4 py-3 text-center outline-none ring-offset-2 focus-visible:ring selected:border-action-content-pressed selected:font-semibold"
          >
            {tabLabel}
          </Tab>
        ))}
      </TabList>

      {tabs.map(({ wasteType }) => (
        <TabPanel id={wasteType} key={wasteType}>
          <WasteCollectionDaysSectionContent
            wasteCollectionDaysType={wasteType}
            visibleColumns={visibleColumns}
          />
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default WasteCollectionDaysSectionTabs
