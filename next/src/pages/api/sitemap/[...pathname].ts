import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '@/src/services/graphql'
import { getPagePath } from '@/src/utils/getPagePath'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { pathname } = req.query

  if (!Array.isArray(pathname) || pathname.length === 0) {
    console.log('No proper pathname')

    return res.json({})
  }

  const { navigation } = await client.General({ locale: 'sk' }) // TODO locale
  const {
    articlesParentPage,
    documentsParentPage,
    faqCategoriesParentPage,
    servicesParentPage,
    workshopsParentPage,
  } = navigation?.data?.attributes ?? {}

  /**
   * Important note:
   * - `pathnameString` and `articlesPath` contains leading slash
   * - `articlesPath` contains also trailing slash
   * - `pathnameString` does not contain trailing slash
   *
   * Therefor when we do `pathnameString.startsWith(articlesPath)` it does not match articles' parent page, but matches only paths that contains also article's slug.
   */
  const articlesPath = articlesParentPage?.data ? `${getPagePath(articlesParentPage.data)}/` : null
  const documentsPath = documentsParentPage?.data
    ? `${getPagePath(documentsParentPage.data)}/`
    : null
  const faqCategoriesPath = faqCategoriesParentPage?.data
    ? `${getPagePath(faqCategoriesParentPage.data)}/`
    : null
  const servicesPath = servicesParentPage?.data ? `${getPagePath(servicesParentPage.data)}/` : null
  const workshopsPath = workshopsParentPage?.data
    ? `${getPagePath(workshopsParentPage.data)}/`
    : null

  const pathnameString = `/${pathname.join('/')}`

  if (articlesPath && pathnameString.startsWith(articlesPath)) {
    return res.json({ destination: `/articles/${pathname.at(-1)}` })
  }
  if (documentsPath && pathnameString.startsWith(documentsPath)) {
    return res.json({ destination: `/documents/${pathname.at(-1)}` })
  }
  if (faqCategoriesPath && pathnameString.startsWith(faqCategoriesPath)) {
    return res.json({ destination: `/faq-categories/${pathname.at(-1)}` })
  }
  if (servicesPath && pathnameString.startsWith(servicesPath)) {
    return res.json({ destination: `/services/${pathname.at(-1)}` })
  }
  if (workshopsPath && pathnameString.startsWith(workshopsPath)) {
    return res.json({ destination: `/workshops/${pathname.at(-1)}` })
  }

  return res.json({})
}

export default handler
