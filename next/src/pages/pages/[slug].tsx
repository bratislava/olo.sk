import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useSearchParams } from 'next/navigation'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'
import { useEffect } from 'react'

import PageHeaderSections from '@/src/components/layout/PageHeaderSections'
import Sections from '@/src/components/layout/Sections'
import { client } from '@/src/services/graphql'
import { PageEntityFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

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

  // eslint-disable-next-line no-console
  console.log(`Revalidating page ${locale === 'en' ? '/en' : ''}/${slug}`)

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
  const searchParams = useSearchParams()

  const scrollId = searchParams.get('scrollId')

  useEffect(() => {
    if (!scrollId) return
    const targetElement = document.querySelector(`#${scrollId}`)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, [scrollId])

  if (!page.attributes) {
    return null
  }

  const { title, perex, sections } = page.attributes
  const [header] = page.attributes.header ?? []

  // const title = useTitle(blogPostTitle)

  // TODO scroll to content based on URL

  return (
    <>
      {/* <GeneralContextProvider general={general}> */}
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{title}</title>
        {perex && <meta name="description" content={perex} />}
      </Head>
      <PageHeaderSections header={header} />
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
