import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '@/src/services/graphql'
import { getFullPathFn } from '@/src/utils/useGetFullPath'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { router } = await client.General({ locale: 'sk' }) // TODO locale

  const articlesPath = getFullPathFn(
    router?.data?.attributes?.articlesParentPage?.data,
    router?.data,
  )

  return res.json({ articlesPath })
}

export default handler
