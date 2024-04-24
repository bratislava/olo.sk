import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'

import Sections from '@/_components/layout/Sections'
import PageHeaderSection from '@/_components/sections/PageHeaderSection'
import { isDefined } from '@/_utils/isDefined'
import { client } from '@/services/graphql'
import { PageEntityFragment } from '@/services/graphql/api'

type PageProps = {
  // general: GeneralQuery
  page: PageEntityFragment
}

type StaticParams = {
  slug: string
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
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

  console.log('slug', slug, locale)

  // eslint-disable-next-line no-console
  // console.log(`Revalidating blog ${locale === 'en' ? '/en' : ''}/blog/${slug}`)

  // TODO || !locale
  if (!slug || !locale) {
    return { notFound: true }
  }

  const [{ pages }, translations] = await Promise.all([
    client.PageBySlug({ slug }),
    serverSideTranslations(locale),
  ])

  const page = pages?.data[0]
  if (!page) {
    return { notFound: true }
  }

  return {
    props: {
      page,
      ...translations,
    },
    revalidate: 10,
  }
}

const Page = ({ page }: PageProps) => {
  if (!page.attributes) {
    return null
  }

  const { title, perex, sections } = page.attributes

  // const title = useTitle(blogPostTitle)

  return (
    <>
      {/* <GeneralContextProvider general={general}> */}
      <Head>
        <title>{title}</title>
        {perex && <meta name="description" content={perex} />}
      </Head>
      <PageHeaderSection title={title} />

      <Sections sections={sections?.filter(isDefined) ?? []} />
      {/* <GlobalCategoryColorProvider */}
      {/*   color={blogPost?.attributes?.tag?.data?.attributes?.pageCategory?.data?.attributes?.color} */}
      {/* /> */}
      {/* <PageLayout> */}
      {/*   <BlogPostPageContentTmp blogPost={blogPost} /> */}
      {/* </PageLayout> */}
      {/* </GeneralContextProvider> */}
    </>
  )
}

export default Page
