import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchOpenPositions } from '@/src/services/nalgoo/fetchOpenPositions'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const openPositions = await fetchOpenPositions()

    return Array.isArray(openPositions)
      ? res.json(openPositions)
      : res.status(500).json({ code: openPositions.status, message: openPositions.message })
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message })
  }
}

export default handler
