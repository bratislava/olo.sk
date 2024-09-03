import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  // TODO uncomment for production
  // eslint-disable-next-line no-secrets/no-secrets
  // if (process.env.NEXT_PUBLIC_IS_STAGING === 'true') {
  return res.send(
    `
      User-Agent: *
      Disallow: /
      `,
  )

  // }
  // return res.send('')
}

export default handler
