import { parseString } from 'xml2js'

import { JosephineObject } from '@/src/services/josephine/josephineTypes'

/**
 * Fetches and parses client data from the Josephine client.
 * It's wrapped into function to use it both directly and in API handler.
 *
 */
export const fetchProcurements = async (timeframe) => {
  const fetchUrl = `${process.env.NEXT_JOSEPHINE_URL}${process.env.NEXT_PUBLIC_JOSEPHINE_API_TOKEN}${timeframe && timeframe !== 'all' ? `/${timeframe}` : ''}`
  const response = await fetch(fetchUrl)

  const xml = await response.text()
  let obj = {}

  // https://github.com/Leonidas-from-XIV/node-xml2js?tab=readme-ov-file#options
  parseString(xml, { explicitArray: false, trim: true }, (err, result) => {
    if (err) throw err
    obj = result as JosephineObject
  })

  return obj as Promise<JosephineObject>
}
