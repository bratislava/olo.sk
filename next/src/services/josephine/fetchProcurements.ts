// import { parseString } from 'xml2js'

import { parseString } from 'xml2js'

import { Tender } from '@/src/services/josephine/josephineTypes'

export type ProcurementObject = {
  tendersCount: number
  tenders: Tender[]
}

export type FetchProcurementsProps = {
  timeframe: string | undefined
  currentPage: string | undefined
}

/**
 * Fetches and parses client data from the Josephine client.
 * It's wrapped into function to use it both directly and in API handler.
 * @param timeframe - ['running', 'ended', 'all'] used for different fetch calls to Josephine API
 *
 */

const itemsPerPage = 5 // TODO: get this data from section

export const fetchProcurements = async ({ timeframe, currentPage }: FetchProcurementsProps) => {
  const postFix = timeframe && timeframe !== 'all' ? `/${timeframe}` : ''
  const fetchUrl = `${process.env.NEXT_JOSEPHINE_URL}${process.env.NEXT_JOSEPHINE_API_TOKEN}${postFix}`
  const response = await fetch(fetchUrl)

  const xml = await response.text()
  let obj: ProcurementObject = { tenders: [], tendersCount: 0 }

  // https://github.com/Leonidas-from-XIV/node-xml2js?tab=readme-ov-file#options
  parseString(xml, { explicitArray: false, trim: true }, (err, result) => {
    if (err) throw err

    // TODO: sort data by date first
    const tendersFiltered = result?.tenders?.tender?.slice(
      Number(currentPage) * itemsPerPage,
      (Number(currentPage) + 1) * itemsPerPage,
    )

    obj = {
      tenders: [...(tendersFiltered as Tender[])],
      tendersCount: result?.tenders?.tender?.length,
    }
  })

  return obj as ProcurementObject
}
