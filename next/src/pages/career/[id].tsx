import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery } from '@/src/services/graphql/api'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import { NOT_FOUND } from '@/src/utils/conts'
// import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'
// import { isDefined } from '@/src/utils/isDefined'
import { generalQuery } from '@/src/utils/queryOptions'

// type PageProps = {
//   //   general?: GeneralQuery
//   //   navigation: NavigationObject
//   //   entity: WorkshopEntityFragment
//   id: string
//   title: string
// }

type PageProps = {
  general: GeneralQuery
  navigation: NavigationObject
  entity: {
    id: string
    title: string
  }
}

type StaticParams = {
  id: string
}

// export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
// //   const { workshops: entities } = await client.WorkshopsStaticPaths()

//   const paths = (entities?.data ?? [])
//     .filter((entity) => entity?.attributes?.slug)
//     .map((entity) => ({
//       params: {
//         // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion,@typescript-eslint/no-non-null-assertion
//         slug: entity.attributes!.slug!,
//       },
//     }))

//   // eslint-disable-next-line no-console
//   console.log(`Workshops: Generated static paths for ${paths.length} slugs.`)

//   return { paths, fallback: 'blocking' }
// }

// export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async ({
//   locale,
//   params,
// }) => {
//   const slug = params?.id

//   // TODO update console log so it displays correct path
//   // eslint-disable-next-line no-console
//   //   console.log(`Revalidating Workshop ${locale} ${slug}`)

//   if (!slug || !locale) {
//     return NOT_FOUND
//   }

//   const [{ workshops: entities }, /* general, */ navigation, translations] = await Promise.all([
//     client.WorkshopBySlug({ slug }),
//     // client.General({ locale }),
//     fetchNavigation(navigationConfig),
//     serverSideTranslations(locale),
//   ])

//   const entity = entities?.data[0]
//   if (!entity) {
//     return NOT_FOUND
//   }

//   // Prefetch data
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery(generalQuery(locale))
//   await queryClient.prefetchQuery(latestArticlesQuery(LATEST_ARTICLES_COUNT, locale))

//   const dehydratedState = dehydrate(queryClient)

//   return {
//     props: {
//       entity,
//       // general,
//       navigation,
//       dehydratedState,
//       ...translations,
//     },
//     revalidate: 1, // TODO change to 10
//   }
// }

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  //   const { articles: entities } = await client.ArticlesStaticPaths()

  //   const paths = (entities?.data ?? [])
  //     .filter((entity) => entity?.attributes?.slug)
  //     .map((entity) => ({
  //       params: {
  //         // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion,@typescript-eslint/no-non-null-assertion
  //         id: entity.attributes!.slug!,
  //       },
  //     }))

  const paths = [{ params: { id: '1234' } }]
  // eslint-disable-next-line no-console
  console.log(`Articles: Generated static paths for ${paths.length} slugs.`)

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async ({
  locale,
  params,
}) => {
  const id = params?.id

  //   const [{ articles: entities }, /* general, */ navigation, translations] = await Promise.all([
  //     client.ArticleBySlug({ slug, locale }),
  //     // client.General({ locale }),
  //     fetchNavigation(navigationConfig),
  //     serverSideTranslations(locale),
  //   ])

  if (!id || !locale) {
    return NOT_FOUND
  }

  const entity = { id: '1234', title: 'Hello world' }
  if (!entity) {
    return NOT_FOUND
  }

  //   const [{ articles: entities }, /* general, */ navigation, translations] = await Promise.all([
  //     client.ArticleBySlug({ slug, locale }),
  //     // client.General({ locale }),
  //     fetchNavigation(navigationConfig),
  //     serverSideTranslations(locale),
  //   ])

  const [general, navigation, translations] = await Promise.all([
    client.General({ locale }),
    fetchNavigation(navigationConfig),
    serverSideTranslations(locale),
  ])
  // Prefetch data
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(generalQuery(locale))
  //   await queryClient.prefetchQuery(latestArticlesQuery(LATEST_ARTICLES_COUNT, locale))

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

const Page = ({ entity, navigation, general }: PageProps) => {
  //   console.log('data', entity, navigation, general)
  // TODO consider extracting this to a hook for all detail pages
  //   const parentPagePath = navigation.contentTypePathPrefixesMap.workshop ?? ''
  //   const breadcrumbs = useMemo(
  //     () =>
  //       [
  //         ...getPageBreadcrumbs(parentPagePath, navigation.pagePathsMap),
  //         { title: entity.attributes?.title ?? '', path: null },
  //         // eslint-disable-next-line unicorn/no-array-callback-reference
  //       ].filter(isDefined),
  //     [entity.attributes?.title, navigation.pagePathsMap, parentPagePath],
  //   )

  //   if (!entity.attributes) {
  //     return null
  //   }

  //   const { title, sections } = entity.attributes
  console.log('title', entity.title)

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>Title: {entity.title}</title>
      </Head>

      <PageLayout>
        <SectionContainer background="secondary">
          {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
          {/* <HeaderTitleText title={title} /> */}
          <div>Hello World {entity.id}</div>
          <div>{entity.toString()}</div>
        </SectionContainer>
        {/* TODO fix y-padding so we don't change it from here */}
        {/* <div className="flex flex-col py-6 lg:py-12 [&>*]:py-3 [&>*]:lg:py-6">
          <Sections sections={sections?.filter(isDefined) ?? []} />
        </div> */}
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
