import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useSearchParams } from 'next/navigation'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'
import { useEffect, useMemo } from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import PageHeaderSections from '@/src/components/layout/PageHeaderSections'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import Sections from '@/src/components/layout/Sections'
import PageLayoutPlaceholder from '@/src/components/placeholder/PageLayoutPlaceholder'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery, PageEntityFragment } from '@/src/services/graphql/api'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'
import { getPagePath } from '@/src/utils/getPagePath'
import { isDefined } from '@/src/utils/isDefined'

type PageProps = {
  general: GeneralQuery
  entity: PageEntityFragment
}

type StaticParams = {
  path: string[]
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
  const path = params?.path
  const slug = path?.at(-1)

  const pathJoined = `/${path?.join('/')}`

  // eslint-disable-next-line no-console
  console.log(`Revalidating page ${locale === 'en' ? '/en' : ''}${pathJoined}`)

  if (!path || !slug || !locale) {
    return { notFound: true }
  }

  const [{ pages: entities }, general, translations] = await Promise.all([
    client.PageBySlug({ slug, locale }),
    client.General({ locale }),
    serverSideTranslations(locale),
  ])

  const entity = entities?.data[0]
  if (!entity) {
    return { notFound: true }
  }

  /** Ensure to be able to open the page only on its own full path. Otherwise, whatever path that ends with the slug would work. */
  const pagePath = getPagePath(entity)
  if (pagePath !== pathJoined) {
    return { notFound: true }
  }

  return {
    props: {
      entity,
      general,
      ...translations,
    },
    revalidate: 10,
  }
}

const Page = ({ entity: page, general }: PageProps) => {
  const searchParams = useSearchParams()

  // TODO consider extracting url-based scrolling on load to a separate hook
  const scrollId = searchParams?.get('scrollId')

  useEffect(() => {
    if (!scrollId) return
    const targetElement = document.querySelector(`#${scrollId}`)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, [scrollId])

  const breadcrumbs = useMemo(() => getPageBreadcrumbs(page), [page])

  if (!page.attributes) {
    return null
  }

  const { title, perex, sections } = page.attributes
  const [header] = page.attributes.header ?? []

  // const title = useTitle(blogPostTitle)

  return (
    <GeneralContextProvider general={general}>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{title}</title>
        {perex && <meta name="description" content={perex} />}
      </Head>

      <PageLayoutPlaceholder>
        {/* TODO consider extracting to PageContent */}
        <SectionContainer background="secondary">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </SectionContainer>
        <PageHeaderSections header={header} />

        <Sections sections={sections?.filter(isDefined) ?? []} />
      </PageLayoutPlaceholder>
      {/* <GlobalCategoryColorProvider */}
      {/*   color={blogPost?.attributes?.tag?.data?.attributes?.pageCategory?.data?.attributes?.color} */}
      {/* /> */}
      {/* <PageLayout> */}
      {/*   <BlogPostPageContentTmp blogPost={blogPost} /> */}
      {/* </PageLayout> */}
    </GeneralContextProvider>
  )
}

export default Page
