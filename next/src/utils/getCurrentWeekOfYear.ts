import { LocalDate } from '@js-joda/core'

export const getCurrentWeekOfYear = () => {
  // returns the number of the current week in current year
  return LocalDate.now().isoWeekOfWeekyear()
}

export const isCurrentWeekEven = () => {
  return getCurrentWeekOfYear() % 2 === 0
}
