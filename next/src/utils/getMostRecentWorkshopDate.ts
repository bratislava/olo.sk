import { WorkshopSlugEntityFragment } from '@/src/services/graphql/api'

export const getMostRecentWorkshopDate = (workshop?: WorkshopSlugEntityFragment) => {
  const dates = workshop?.attributes?.dates
  if (!dates?.length) return null

  const nextWorkshop = dates
    .map((date) => new Date(date?.datetime))
    .filter((date) => date > new Date())
    // @ts-ignore
    .sort((firstWorkshop, secondWorkshop) => firstWorkshop - secondWorkshop)[0]

  return nextWorkshop?.toLocaleDateString('sk-SK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}
