import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchProcurements } from '@/src/services/josephine/fetchProcurements'
import { isDefined } from '@/src/utils/isDefined'

export const DEFAULT_TENDERS_PER_PAGE = 5

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { query } = _req

  const options = {
    timeframe:
      isDefined(query?.timeframe) && typeof (query.timeframe === 'string')
        ? query.timeframe.toString()
        : '',
    currentPage:
      isDefined(query?.currentPage) && !Number.isNaN(Number(query.currentPage))
        ? Number(query.currentPage)
        : 1,
    tendersPerPage:
      isDefined(query?.tendersPerPage) && !Number.isNaN(Number(query.tendersPerPage))
        ? Number(query.tendersPerPage)
        : DEFAULT_TENDERS_PER_PAGE,
  }

  if (!options.timeframe) return res.status(500).json({ message: 'Invalid fetch options' })

  const procurements = await fetchProcurements(options)

  return res.json(procurements)
}

export default handler
