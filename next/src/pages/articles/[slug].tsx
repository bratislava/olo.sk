import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'

import BlocksRenderer from '@/src/components/layout/BlocksRenderer'
import Section from '@/src/components/layout/Section/Section'
import ArticlePageHeader from '@/src/components/sections/headers/ArticlePageHeader'
import { client } from '@/src/services/graphql'
import { ArticleEntityFragment } from '@/src/services/graphql/api'

type PageProps = {
  // general: GeneralQuery
  article: ArticleEntityFragment
}

type StaticParams = {
  slug: string
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  // TODO return all paths

  // const { blogPosts } = await client.BlogPostsStaticPaths()

  // const paths = (blogPosts?.data ?? [])
  //   .filter((blogPost) => blogPost?.attributes?.slug && blogPost?.attributes?.locale)
  //   .map((blogPost) => ({
  //     params: {
  //       // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion,@typescript-eslint/no-non-null-assertion
  //       slug: blogPost.attributes!.slug!,
  //     },
  //     // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion,@typescript-eslint/no-non-null-assertion
  //     locale: blogPost.attributes!.locale!,
  //   }))

  // eslint-disable-next-line no-console
  // console.log(`GENERATED STATIC PATHS FOR ${paths.length} SLUGS - BLOGS`)
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async ({
  locale,
  params,
}) => {
  const slug = params?.slug

  // eslint-disable-next-line no-console
  console.log(`Revalidating article ${locale === 'en' ? '/en' : ''}/blog/${slug}`)

  // TODO || !locale
  if (!slug || !locale) {
    return { notFound: true }
  }

  const [{ articles }, translations] = await Promise.all([
    client.ArticleBySlug({ slug }),
    serverSideTranslations(locale),
  ])

  const article = articles?.data[0]
  if (!article) {
    return { notFound: true }
  }

  return {
    props: {
      article,
      ...translations,
    },
    revalidate: 10,
  }
}

const Page = ({ article }: PageProps) => {
  if (!article.attributes) {
    return null
  }

  const { title, perex, blocks } = article.attributes

  return (
    <>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{title}</title>
        {perex && <meta name="description" content={perex} />}
      </Head>

      <ArticlePageHeader article={article} />

      {/* TODO Article narrow layout */}
      <Section>
        <BlocksRenderer content={blocks} />
      </Section>
    </>
  )
}

export default Page
