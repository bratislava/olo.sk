import { environment } from '@/src/environment'
import { JobOfferListItem } from '@/src/services/todo-openapi-nalgoo'

export const fetchOpenPositionsFromApi = async () => {
  const fetchUrl = `http://${environment.nextHost}/api/nalgoo`

  const response = await fetch(fetchUrl)

  return response.json() as Promise<JobOfferListItem[]>
}
