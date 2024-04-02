import React from 'react'

import { client } from '@/services/graphql/gql'

const getPage = async (slug: string) => {
  const { pages } = await client.PageBySlug({ slug })

  return pages?.data[0] ?? null
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const page = await getPage(slug)

  if (!page || !page.attributes) {
    return <div>Page not found</div>
  }

  return (
    <div>
      <h1>{page.attributes.title}</h1>
    </div>
  )
}

export default Page
