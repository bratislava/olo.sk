import { environment } from '@/src/environment'

export const fetchOpenPositionsFromApi = async () => {
  const fetchUrl = `http://${environment.nextHost}/api/nalgoo`

  const response = await fetch(fetchUrl)

  return response.json()
}
