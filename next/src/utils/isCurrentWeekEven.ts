import { getCurrentWeekOfYear } from './getCurrentWeekOfYear'

export const isCurrentWeekEven = () => {
  return getCurrentWeekOfYear() % 2 === 0
}
