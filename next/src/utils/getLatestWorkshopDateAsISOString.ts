import { WorkshopEntityFragment } from '@/src/services/graphql/api'

export const getLatestWorkshopDateAsISOString = (workshop: WorkshopEntityFragment) => {
  if (!workshop.attributes?.dates) return null
  const unixTimestamp = Math.min(
    ...workshop.attributes.dates.map((date) => new Date(date?.value).getTime()),
  )

  return new Date(unixTimestamp).toISOString()
}
