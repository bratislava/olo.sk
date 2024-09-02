import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '@/src/services/graphql'
import { parseContentTypePathPrefixes } from '@/src/services/navigation/parseContentTypePathPrefixes'
import { parseTopLevelPages } from '@/src/services/navigation/parseTopLevelPages'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { navigation, topLevelPages } = await client.General({ locale: 'sk' }) // TODO locale

  const { pagePathsMap } = parseTopLevelPages(topLevelPages?.data ?? [])
  const { contentTypePathPrefixesMap } = parseContentTypePathPrefixes(navigation, pagePathsMap)

  return res.json({ contentTypePathPrefixesMap })
}

export default handler
