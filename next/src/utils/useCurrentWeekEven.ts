import { useTranslation } from 'next-i18next'

import { getCurrentWeekOfYear } from '@/src/utils/getCurrentWeekOfYear'
import { isCurrentWeekEven } from '@/src/utils/isCurrentWeekEven'

export const useCurrentWeekEven = () => {
  const { t } = useTranslation()
  const currentWeekMessage = isCurrentWeekEven()
    ? t('pageHeaderPickupDay.messageEvenWeek', {
        weekNumber: getCurrentWeekOfYear(),
      })
    : t('pageHeaderPickupDay.messageOddWeek', {
        weekNumber: getCurrentWeekOfYear(),
      })

  return { currentWeekMessage }
}
