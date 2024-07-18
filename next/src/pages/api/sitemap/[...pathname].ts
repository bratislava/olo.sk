import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '@/src/services/graphql'
import { getPagePath } from '@/src/utils/getPagePath'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { pathname } = req.query

  if (!Array.isArray(pathname) || pathname.length === 0) {
    console.log('No proper pathname')

    return res.json({})
  }

  const { sitemap } = await client.General({ locale: 'sk' }) // TODO locale
  const { articlesParentPage } = sitemap?.data?.attributes ?? {}

  /**
   * Important note:
   * - `pathnameString` and `articlesPath` contains leading slash
   * - `articlesPath` contains also trailing slash
   * - `pathnameString` does not contain trailing slash
   *
   * Therefor when we do `pathnameString.startsWith(articlesPath)` it does not match articles' parent page, but matches only paths that contains also article's slug.
   */
  const articlesPath = articlesParentPage?.data ? `${getPagePath(articlesParentPage.data)}/` : null
  const pathnameString = `/${pathname.join('/')}`

  if (articlesPath && pathnameString.startsWith(articlesPath)) {
    return res.json({ destination: `/articles/${pathname.at(-1)}` })
  }

  return res.json({})
}

export default handler
