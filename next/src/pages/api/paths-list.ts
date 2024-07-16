import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '@/src/services/graphql'
import { getFullPathFn } from '@/src/utils/useGetFullPath'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { sitemap } = await client.General({ locale: 'sk' }) // TODO locale

  const articlesPath = getFullPathFn(
    sitemap?.data?.attributes?.articlesParentPage?.data,
    sitemap?.data,
  )

  return res.json({ articlesPath })
}

export default handler
