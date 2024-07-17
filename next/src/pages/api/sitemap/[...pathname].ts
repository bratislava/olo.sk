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
  const { articlesParentPage, documentsParentPage, faqsParentPage, workshopsParentPage } =
    sitemap?.data?.attributes ?? {}

  const articlesPath = articlesParentPage?.data ? `${getPagePath(articlesParentPage.data)}/` : null
  const documentsPath = documentsParentPage?.data
    ? `${getPagePath(documentsParentPage.data)}/`
    : null
  const faqsPath = faqsParentPage?.data ? `${getPagePath(faqsParentPage.data)}/` : null
  const workshopsPath = workshopsParentPage?.data
    ? `${getPagePath(workshopsParentPage.data)}/`
    : null

  const pathnameString = `/${pathname.join('/')}/`

  console.log('pathnameString', pathnameString)

  if (articlesPath && pathnameString.startsWith(articlesPath)) {
    return res.json({ destination: `/articles/${pathname.at(-1)}` })
  }
  if (documentsPath && pathnameString.startsWith(documentsPath)) {
    return res.json({ destination: `/documents/${pathname.at(-1)}` })
  }
  if (faqsPath && pathnameString.startsWith(faqsPath)) {
    return res.json({ destination: `/faqs/${pathname.at(-1)}` })
  }
  if (workshopsPath && pathnameString.startsWith(workshopsPath)) {
    return res.json({ destination: `/workshops/${pathname.at(-1)}` })
  }

  return res.json({ destination: '' })
}

export default handler
