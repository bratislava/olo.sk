import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchPositionsDetail } from '@/src/services/nalgoo/fetchPositionsDetail'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = _req
    const positionsDetail = await fetchPositionsDetail(query?.id)

    // either position detail is correct data for the detail, or status and code when error
    return positionsDetail.status
      ? res.status(500).json({ code: positionsDetail.status, message: positionsDetail.message })
      : res.json(positionsDetail)
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message })
  }
}

export default handler
