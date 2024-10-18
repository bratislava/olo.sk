import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchOpenPositions } from '@/src/services/nalgoo/fetchOpenPositions'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const openPositions = await fetchOpenPositions()

    return res.json(openPositions)
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: 'Error fetching open positions' })
  }
}

export default handler
