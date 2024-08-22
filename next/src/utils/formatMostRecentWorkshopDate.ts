type WorkshopDates =
  | Array<{
      __typename?: 'ComponentItemsWorkshopDate'
      datetime: any
    } | null>
  | null
  | undefined // TODO: Suggestion would be appreciated

export const formatMostRecentWorkshopDate = (dates: WorkshopDates) => {
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
