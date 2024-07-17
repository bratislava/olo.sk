import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '@/src/services/graphql'
import { getPagePath } from '@/src/utils/getPagePath'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { sitemap } = await client.General({ locale: 'sk' }) // TODO locale
  const { articlesParentPage, documentsParentPage, faqsParentPage, workshopsParentPage } =
    sitemap?.data?.attributes ?? {}

  const articlesPath = articlesParentPage?.data ? getPagePath(articlesParentPage.data) : '#'
  const documentsPath = documentsParentPage?.data ? getPagePath(documentsParentPage.data) : '#'
  const faqsPath = faqsParentPage?.data ? getPagePath(faqsParentPage.data) : '#'
  const workshopsPath = workshopsParentPage?.data ? getPagePath(workshopsParentPage.data) : '#'

  return res.json({ articlesPath, documentsPath, faqsPath, workshopsPath })
}

export default handler
