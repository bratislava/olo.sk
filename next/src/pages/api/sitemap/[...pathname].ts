import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '@/src/services/graphql'
import { getPagePath } from '@/src/utils/getPagePath'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { pathname } = req.query
  console.log('pathname', pathname)

  if (!Array.isArray(pathname) || pathname.length === 0) {
    console.log('No proper pathname')

    return res.json({})
  }

  const { sitemap } = await client.General({ locale: 'sk' }) // TODO locale
  const { articlesParentPage } = sitemap?.data?.attributes ?? {}

  const articlesPath = articlesParentPage?.data ? `${getPagePath(articlesParentPage.data)}/` : null

  const pathnameString = `/${pathname.join('/')}/`

  console.log('pathnameString', pathnameString)

  if (
    articlesPath &&
    pathnameString.startsWith(articlesPath) &&
    pathnameString.length > articlesPath.length
  ) {
    return res.json({ destination: `/articles/${pathname.at(-1)}` })
  }

  return res.json({ destination: '' })
}

export default handler
