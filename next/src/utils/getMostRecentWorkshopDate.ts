import { DateTimeFormatter, ZonedDateTime } from '@js-joda/core'

import { WorkshopSlugEntityFragment } from '@/src/services/graphql/api'
import { convertMonthNumberToName } from '@/src/utils/convertMonthNumberToName'

export const getMostRecentWorkshopDate = (workshop?: WorkshopSlugEntityFragment) => {
  const dates = workshop?.attributes?.dates
  if (!dates?.length) return null

  const futureWorkshops = dates
    .map((date) => ZonedDateTime.parse(date?.datetime))
    .filter((date) => date.isAfter(ZonedDateTime.now()))

  if (futureWorkshops.length === 0) return null

  const nextWorkshop = futureWorkshops
    // eslint-disable-next-line unicorn/no-array-reduce
    .reduce((earliest, current) => (current.isBefore(earliest) ? current : earliest))
    .plusHours(2) // Convert implicit UCT to CET

  const formattedTime = nextWorkshop.format(DateTimeFormatter.ofPattern('HH:mm'))
  const formattedMonth = convertMonthNumberToName(nextWorkshop.monthValue())

  return `${nextWorkshop.dayOfMonth()}. ${formattedMonth} ${nextWorkshop.year()} o ${formattedTime}`
}
