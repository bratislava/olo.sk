import { environment } from '@/src/environment'

export const fetchProcurementsFromApiRunning = async (currentPage: number) => {
  const fetchUrl = `http://${environment.nextHost}/api/josephine?timeframe=running&currentPage=${currentPage}`

  const response = await fetch(fetchUrl)

  return response.json()
}
