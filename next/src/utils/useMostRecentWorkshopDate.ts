import { useTranslation } from 'next-i18next'

import { WorkshopSlugEntityFragment } from '@/src/services/graphql/api'

export const useMostRecentWorkshopDate = () => {
  const { t } = useTranslation()

  const getMostRecentWorkshopDateMessage = (workshop?: WorkshopSlugEntityFragment) => {
    const dates = workshop?.attributes?.dates
    if (!workshop?.attributes || !dates || dates.length === 0)
      return { mostRecentDateMessage: null }

    // TODO: Implement a new function to handle the parsing and formatting of dates
    /*    const mostRecentDate = dates.find(
          (date) => date?.datetime === getLatestWorkshopDateAsISOString(workshop),
        ) */

    const mostRecentDateMessage = t('navBar.workshopCard.messageMostRecentDate', {
      mostRecentDate: '21. september 2024 o 9:00',
    })

    return { mostRecentDateMessage }
  }

  return { getMostRecentWorkshopDateMessage }
}
