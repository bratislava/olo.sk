import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchPositionsDetail } from '@/src/services/nalgoo/fetchPositionsDetail'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { query } = _req
  const positionsDetail = await fetchPositionsDetail(query?.id)

  return res.json(positionsDetail)
}

export default handler
