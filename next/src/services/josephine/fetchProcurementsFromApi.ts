import { environment } from '@/src/environment'

export const fetchProcurementsFromApiRunning = async () => {
  const fetchUrl = `http://${environment.nextHost}/api/josephine?timeframe=running`

  const response = await fetch(fetchUrl)

  return response.json()
}

export const fetchProcurementsFromApiEnded = async () => {
  const fetchUrl = `http://${environment.nextHost}/api/josephine?timeframe=ended`

  const response = await fetch(fetchUrl)

  return response.json()
}

export const fetchProcurementsFromApiAll = async () => {
  const fetchUrl = `http://${environment.nextHost}/api/josephine?timeframe=all`

  const response = await fetch(fetchUrl)

  return response.json()
}
