import { parseString } from 'xml2js'

import { DEFAULT_TENDERS_PER_PAGE } from '@/src/pages/api/josephine'
import {
  JosephineObject,
  Tender,
  TenderRoundElement,
} from '@/src/services/josephine/josephineTypes'

// this modified object is needed to easier handle tender_round_to value
interface ModifiedTender extends Tender {
  tender_rounds_mapped: Date
}

export type ProcurementObject = {
  tendersCount: number
  tenders: ModifiedTender[]
}

export type FetchProcurementsProps = {
  timeframe: string
  currentPage?: number
  tendersPerPage?: number
}

/**
 * For easier handling of the tender_rounds object, sorts the data based on the tender_round_to
 * @param tenderRounds - object that could be Array of TenderRounds or just one TenderRound object
 * @return Date of newest tender round to
 *
 */
const getTenderTo = (tenderRounds: TenderRoundElement | TenderRoundElement[]) =>
  Array.isArray(tenderRounds)
    ? tenderRounds?.sort(
      (tenderA, tenderB) =>
        new Date(tenderA.tender_round_to).getTime() - new Date(tenderB.tender_round_to).getTime(),
    )[0]?.tender_round_to
    : tenderRounds?.tender_round_to

/**
 * Fetches and parses client data from the Josephine client.
 * It's wrapped into function to use it both directly and in API handler.
 * @param timeframe - ['running', 'ended', 'all'] used for different fetch calls to Josephine API
 * @param currentPage - used for paginations, index for the current page
 * @param tendersPerPage - number of items per page, used for pagination
 * @return tendersCounts - number of all objects, used for pagination
 * @return tenders - actual data from the fetch
 *
 */

export const fetchProcurements = async ({
  timeframe,
  currentPage = 1,
  tendersPerPage = DEFAULT_TENDERS_PER_PAGE,
}: FetchProcurementsProps) => {
  const postFix = timeframe && timeframe !== 'all' ? `/${timeframe}` : ''
  const fetchUrl = `${process.env.NEXT_JOSEPHINE_URL}${process.env.NEXT_JOSEPHINE_API_TOKEN}${postFix}`
  const response = await fetch(fetchUrl)

  const xml = await response.text()
  let obj: ProcurementObject = { tenders: [], tendersCount: 0 }

  // https://github.com/Leonidas-from-XIV/node-xml2js?tab=readme-ov-file#options
  parseString(xml, { explicitArray: false, trim: true }, (err, result: JosephineObject) => {
    if (err) throw err

    const tendersMapped = result?.tenders?.tender.map((tender) => ({
      ...tender,
      tender_rounds_mapped: getTenderTo(tender.tender_rounds?.tender_round),
    }))

    const tendersSorted = tendersMapped.sort((tenderA, tenderB) => {
      return (
        new Date(tenderB.tender_rounds_mapped).getTime() -
        new Date(tenderA.tender_rounds_mapped).getTime()
      )
    })

    const tendersFiltered = tendersSorted.slice(
      (currentPage - 1) * tendersPerPage,
      currentPage * tendersPerPage,
    )

    obj = {
      tenders: [...(tendersFiltered as ModifiedTender[])],
      tendersCount: result?.tenders?.tender?.length,
    }
  })

  return obj as ProcurementObject
}
