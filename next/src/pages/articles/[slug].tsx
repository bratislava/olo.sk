import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'

import ShareBlock from '@/src/components/common/ShareBlock/ShareBlock'
import BlocksRenderer from '@/src/components/layout/BlocksRenderer'
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
  const { t } = useTranslation()

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

      {/* TODO separate outer div(s) to Article Section with narrow layout */}
      <div className="mx-auto max-lg:px-4 lg:max-w-[50rem] lg:px-0">
        <div className="flex flex-col gap-6 py-6 lg:gap-12 lg:py-12">
          <div>
            <BlocksRenderer content={blocks} />
          </div>
          <ShareBlock
            text={t('ArticlePage.shareblock.text')}
            buttonText={t('ArticlePage.shareblock.buttonText')}
          />
        </div>
      </div>
    </>
  )
}

export default Page
