import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchOpenPositions } from '@/src/services/nalgoo/fetchOpenPositions'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const openPositions = await fetchOpenPositions()

  return res.json(openPositions)
}

export default handler
