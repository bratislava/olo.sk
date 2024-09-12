/* eslint-disable no-console,sonarjs/no-duplicate-string,sonarjs/cognitive-complexity */
import type { NextApiRequest, NextApiResponse } from 'next'

import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'

type Response = { revalidated: boolean } | { message: string } | string
type RequestPayload =
  | { model: string; entry: { slug: string; locale: string } }
  | { model: 'branch'; entry: { page?: { slug: string }; locale: string } }

/**
 * Revalidates the path based on the payload data from Strapi webhook.
 * Payload comes as object with model and entry, where entry is "flat" object similar to meilisearch data format (no data.attributes nesting)
 *
 * Strapi docs: https://docs.strapi.io/dev-docs/backend-customization/webhooks
 * Next.js docs: https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration#on-demand-validation-with-resrevalidate
 */
const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  /* According to docs, middleware rewrites are not applied during revalidation, so we have to provide real Next paths */
  try {
    const payload = req.body as RequestPayload

    const { pagePathsMap } = await fetchNavigation(navigationConfig)
    let pathToRevalidate = ''

    if (payload?.model === 'article') {
      pathToRevalidate = `/articles/${payload?.entry?.slug}`
    }

    if (payload?.model === 'faq-category') {
      pathToRevalidate = `/faq-categories/${payload?.entry?.slug}`
    }

    if (payload?.model === 'document') {
      pathToRevalidate = `/documents/${payload?.entry?.slug}`
    }

    if (payload?.model === 'service') {
      pathToRevalidate = `/services/${payload?.entry?.slug}`
    }

    if (payload?.model === 'workshop') {
      pathToRevalidate = `/workshops/${payload?.entry?.slug}`
    }

    if (payload?.model === 'branch' && 'page' in payload.entry && payload.entry.page?.slug) {
      pathToRevalidate = pagePathsMap[payload.entry.page.slug ?? '']?.path ?? ''
    }

    if (payload?.model === 'page') {
      pathToRevalidate = pagePathsMap[payload?.entry?.slug ?? '']?.path ?? ''
    }

    if (pathToRevalidate) {
      console.log('api/revalidate:', pathToRevalidate)
      await res.revalidate(pathToRevalidate)
    }

    /* Always revalidate homepage */
    // eslint-disable-next-line const-case/uppercase
    const homepage = '/'
    console.log('api/revalidate:', homepage)
    await res.revalidate(homepage)

    return res.json({ revalidated: true })
  } catch (error) {
    console.log('api/revalidate: Error while revalidating ==>', error)

    return res.status(500).send('Error revalidating')
  }
}

export default handler
