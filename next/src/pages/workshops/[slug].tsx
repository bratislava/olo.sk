import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'
import { useMemo } from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import { LATEST_ARTICLES_COUNT } from '@/src/components/common/NavBar/NavMenu/NavMenuLatestArticlesList'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import Sections from '@/src/components/layout/Sections'
import Sidebars from '@/src/components/layout/Sidebars'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery, WorkshopEntityFragment } from '@/src/services/graphql/api'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import cn from '@/src/utils/cn'
import { NOT_FOUND } from '@/src/utils/conts'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'
import { isDefined } from '@/src/utils/isDefined'
import { generalQuery, latestArticlesQuery } from '@/src/utils/queryOptions'

type PageProps = {
  general?: GeneralQuery
  navigation: NavigationObject
  entity: WorkshopEntityFragment
}

type StaticParams = {
  slug: string
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const { workshops: entities } = await client.WorkshopsStaticPaths()

  const paths = (entities?.data ?? [])
    .filter((entity) => entity?.attributes?.slug)
    .map((entity) => ({
      params: {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion,@typescript-eslint/no-non-null-assertion
        slug: entity.attributes!.slug!,
      },
    }))

  // eslint-disable-next-line no-console
  console.log(`Workshops: Generated static paths for ${paths.length} slugs.`)

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async ({
  locale,
  params,
}) => {
  const slug = params?.slug

  // TODO update console log so it displays correct path
  // eslint-disable-next-line no-console
  console.log(`Revalidating Workshop ${locale} ${slug}`)

  if (!slug || !locale) {
    return NOT_FOUND
  }

  const [{ workshops: entities }, /* general, */ navigation, translations] = await Promise.all([
    client.WorkshopBySlug({ slug }),
    // client.General({ locale }),
    fetchNavigation(navigationConfig),
    serverSideTranslations(locale),
  ])

  const entity = entities?.data[0]
  if (!entity) {
    return NOT_FOUND
  }

  // Prefetch data
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(generalQuery(locale))
  await queryClient.prefetchQuery(latestArticlesQuery(LATEST_ARTICLES_COUNT, locale))

  const dehydratedState = dehydrate(queryClient)

  return {
    props: {
      entity,
      // general,
      navigation,
      dehydratedState,
      ...translations,
    },
    revalidate: 1, // TODO change to 10
  }
}

const Page = ({ entity, general, navigation }: PageProps) => {
  // TODO consider extracting this to a hook for all detail pages
  const parentPagePath = navigation.contentTypePathPrefixesMap.workshop ?? ''
  const breadcrumbs = useMemo(
    () =>
      [
        ...getPageBreadcrumbs(parentPagePath, navigation.pagePathsMap),
        { title: entity.attributes?.title ?? '', path: null },
        // eslint-disable-next-line unicorn/no-array-callback-reference
      ].filter(isDefined),
    [entity.attributes?.title, navigation.pagePathsMap, parentPagePath],
  )

  if (!entity.attributes) {
    return null
  }

  const { title, sections } = entity.attributes

  // Sidebar has always max 1 element
  const [sidebar] = entity.attributes.sidebar ?? []

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{title}</title>
      </Head>

      <PageLayout>
        <SectionContainer background="secondary">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <HeaderTitleText title={title} />
        </SectionContainer>
        {/* TODO this was very quickly implemented sidebar layout, should be revisited and simplified, better setup for spacings etc. */}
        <div
          className={cn({
            // classes copied from SectionContainer
            'mx-auto flex max-w-screen-xl flex-col items-start md:flex-row lg:gap-8': sidebar,
          })}
        >
          <Sections sections={sections?.filter(isDefined) ?? []} />

          {sidebar ? (
            <div className="w-full shrink-0 grow pr-4 max-lg:px-4 md:max-w-80 lg:pr-8">
              <Sidebars sidebar={sidebar} />
            </div>
          ) : null}
        </div>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
