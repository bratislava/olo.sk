import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'
import { useMemo } from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import Gallery from '@/src/components/common/Gallery/Gallery'
import ShareBlock from '@/src/components/common/ShareBlock/ShareBlock'
import Markdown from '@/src/components/formatting/Markdown'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import ArticlePageHeader from '@/src/components/sections/headers/ArticlePageHeader'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { ArticleEntityFragment, GeneralQuery } from '@/src/services/graphql/api'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'
import { isDefined } from '@/src/utils/isDefined'
import { generalQuery } from '@/src/utils/queryOptions'

type PageProps = {
  general: GeneralQuery
  navigation: NavigationObject
  entity: ArticleEntityFragment
}

type StaticParams = {
  slug: string
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const { articles: entities } = await client.ArticlesStaticPaths()

  const paths = (entities?.data ?? [])
    .filter((entity) => entity?.attributes?.slug)
    .map((entity) => ({
      params: {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion,@typescript-eslint/no-non-null-assertion
        slug: entity.attributes!.slug!,
      },
    }))

  // eslint-disable-next-line no-console
  console.log(`Articles: Generated static paths for ${paths.length} slugs.`)

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async ({
  locale,
  params,
}) => {
  const slug = params?.slug

  // TODO update console log so it displays correct path
  // eslint-disable-next-line no-console
  console.log(`Revalidating Article ${locale} ${slug}`)

  // TODO || !locale
  if (!slug || !locale) {
    return { notFound: true }
  }

  const [{ articles: entities }, general, navigation, translations] = await Promise.all([
    client.ArticleBySlug({ slug, locale }),
    client.General({ locale }),
    fetchNavigation(navigationConfig),
    serverSideTranslations(locale),
  ])

  const entity = entities?.data[0]
  if (!entity) {
    return { notFound: true }
  }

  // Prefetch data
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(generalQuery(locale))

  const dehydratedState = dehydrate(queryClient)

  return {
    props: {
      entity,
      general,
      navigation,
      dehydratedState,
      ...translations,
    },
    revalidate: 1, // TODO change to 10
  }
}

const Page = ({ entity, general, navigation }: PageProps) => {
  const { t } = useTranslation()

  // TODO consider extracting this to a hook for all detail pages
  const parentPagePath = navigation.contentTypePathPrefixesMap.article ?? ''
  const breadcrumbs = useMemo(
    () => [
      ...getPageBreadcrumbs(parentPagePath, navigation.pagePathsMap),
      { title: entity.attributes?.title ?? '', path: null },
    ],
    [entity.attributes?.title, navigation.pagePathsMap, parentPagePath],
  )

  if (!entity.attributes) {
    return null
  }

  const { title, perex, content, gallery } = entity.attributes

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredGalleryImages = gallery?.data.filter(isDefined) ?? []

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{title}</title>
        {perex && <meta name="description" content={perex} />}
      </Head>

      <PageLayout>
        <SectionContainer background="secondary">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </SectionContainer>

        <ArticlePageHeader article={entity} />

        {/* TODO separate outer div(s) to Article Section with narrow layout */}
        <div className="mx-auto max-lg:px-4 lg:max-w-[50rem] lg:px-0">
          <div className="flex flex-col gap-6 py-6 lg:gap-12 lg:py-12">
            <div className="flex flex-col gap-6 lg:gap-8">
              <Markdown content={content} />
              {filteredGalleryImages.length > 0 ? <Gallery images={filteredGalleryImages} /> : null}
            </div>
            <ShareBlock
              text={t('articlePage.shareblock.text')}
              buttonText={t('articlePage.shareblock.buttonText')}
            />
          </div>
        </div>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
