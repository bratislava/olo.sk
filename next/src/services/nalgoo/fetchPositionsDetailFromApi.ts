import { environment } from '@/src/environment'

export const fetchPositionsDetailFromApi = async (id: string) => {
  const fetchUrl = `http://${environment.nextHost}/api/nalgoo-detail/?id=${id}`

  const response = await fetch(fetchUrl)

  return response.json()
}
