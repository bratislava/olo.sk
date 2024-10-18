import { environment } from '@/src/environment'
import { JobOfferListItem } from '@/src/services/todo-openapi-nalgoo'

export const fetchOpenPositionsFromApi = async () => {
  const fetchUrl = `https://${environment.nextHost}/api/nalgoo`
  const response = await fetch(fetchUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.status === 200
    ? (response.json() as Promise<JobOfferListItem[]>)
    : Promise.reject(new Error('Error fetching open positions'))
}
