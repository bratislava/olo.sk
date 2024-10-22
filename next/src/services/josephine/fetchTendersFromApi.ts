import { environment } from '@/src/environment'

export const fetchTendersFromApiRunning = async (
  timeframe: string, // more about possible fetch options can be found in Josephine documentation
  currentPage: number,
  tendersPerPage: number,
) => {
  const fetchUrl = `http://${environment.nextHost}/api/josephine?timeframe=${timeframe}&currentPage=${currentPage}&tendersPerPage=${tendersPerPage}`

  const response = await fetch(fetchUrl)

  return response.json()
}
