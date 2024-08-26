import { WorkshopDateItemFragment } from '@/src/services/graphql/api'

export const formatMostRecentWorkshopDate = (
  dates: (WorkshopDateItemFragment | null)[] | null | undefined,
) => {
  if (!dates?.length) return ''

  const nextWorkshop = dates
    .map((date) => new Date(date?.datetime))
    .filter((date) => date > new Date())
    .sort((firstWorkshop, secondWorkshop) => firstWorkshop.getTime() - secondWorkshop.getTime())[0]

  return nextWorkshop?.toLocaleDateString('sk-SK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}
