import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchProcurements } from '@/src/services/josephine/fetchProcurements'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { query } = _req
  const options = {
    timeframe: query?.timeframe as string,
    currentPage: query?.currentPage as string,
  }

  const procurements = await fetchProcurements(options)

  return res.json(procurements)
}

export default handler
