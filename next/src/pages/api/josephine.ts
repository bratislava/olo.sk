import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchProcurements } from '@/src/services/josephine/fetchProcurements'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { query } = _req
  const procurements = await fetchProcurements(query?.timeframe as string)

  return res.json(procurements)
}

export default handler
