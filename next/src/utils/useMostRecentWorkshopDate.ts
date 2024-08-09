import { useTranslation } from 'next-i18next'

import { WorkshopSlugEntityFragment } from '@/src/services/graphql/api'
import { getLatestWorkshopDateAsISOString } from '@/src/utils/getLatestWorkshopDateAsISOString'

export const useMostRecentWorkshopDate = () => {
  const { t } = useTranslation()

  const getMostRecentWorkshopDateMessage = (workshop?: WorkshopSlugEntityFragment) => {
    const dates = workshop?.attributes?.dates
    if (!workshop?.attributes || !dates) return { mostRecentDateMessage: null }

    const mostRecentDate = dates.find(
      (date) => date?.value === getLatestWorkshopDateAsISOString(workshop),
    )
    const mostRecentDateMessage = t('navBar.workshopCard.messageMostRecentDate', {
      mostRecentDate: mostRecentDate?.label,
    })

    return { mostRecentDateMessage }
  }

  return { getMostRecentWorkshopDateMessage }
}
