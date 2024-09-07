import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchNonCachedNavigation } from '@/src/services/navigation/fetchNonCachedNavigation'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const navigation = await fetchNonCachedNavigation()

  return res.json(navigation)
}

export default handler
