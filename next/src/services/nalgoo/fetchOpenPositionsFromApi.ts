import { JobOfferListItem } from '@/src/services/todo-openapi-nalgoo'

export const fetchOpenPositionsFromApi = async () => {
  const fetchUrl = `/api/nalgoo`
  const response = await fetch(fetchUrl)

  return response.status === 200
    ? (response.json() as Promise<JobOfferListItem[]>)
    : Promise.reject(new Error('Error fetching open positions'))
}
