import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import DOMpurify from 'dompurify'
import parse from 'html-react-parser'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import SidebarCareer from '@/src/components/common/Sidebar/SidebarCareer'
import Typography from '@/src/components/common/Typography/Typography'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery } from '@/src/services/graphql/api'
import { fetchPositionsDetailFromApi } from '@/src/services/nalgoo/fetchPositionsDetailFromApi'
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

  // const paths = [{ params: { id: '97336' } }]
  // eslint-disable-next-line no-console
  // console.log(`Articles: Generated static paths for ${paths.length} slugs.`)

  return { paths: [], fallback: 'blocking' }
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

  // console.log('params id', id)

  const entity = { id, title: 'Hello world' }
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

  const {
    isError,
    isPending,
    error,
    data: positionDetail,
  } = useQuery({
    queryKey: ['PositionsDetail', entity.id],
    queryFn: () => fetchPositionsDetailFromApi(entity.id),
  })

  // const breadcrumbs = useMemo(
  //   () => [
  //     ...getPageBreadcrumbs('', navigation.pagePathsMap),
  //     { title: entity.attributes?.title ?? '', path: null },
  //   ],
  //   [entity.attributes?.title, navigation.pagePathsMap, parentPagePath],
  // )

  const { t } = useTranslation()
  const hasData = !isError && !isPending
  const HTML_REGEX = /(<([^>]+)>)/gi

  const title = isError ? error.message : isPending ? t('common.loading') : positionDetail.name
  if (hasData) {
    console.log('parse source', positionDetail.job_note)
    console.log('parse', parse(positionDetail.job_note))
  }

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{t('career.detailHeadline')}</title>
      </Head>

      {/* <PageHeaderSections
        title={positionDetail.title}
        header={{ media: { data: { attributes: { url: '', name: '' } } } }}
      /> */}

      <PageLayout>
        <SectionContainer background="secondary">
          {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
          <HeaderTitleText title={title} />
        </SectionContainer>
        {/* TODO fix y-padding so we don't change it from here */}
        <div className="relative mx-auto max-w-screen-xl bg-background-primary px-4 py-6 md:px-0 lg:px-8 lg:py-12">
          <div className="flex flex-col items-start gap-4 md:flex-row lg:gap-8">
            <div className="flex w-full shrink flex-col md:w-[50rem]">
              {hasData && (
                <div className="rounded-lg border border-border-default">
                  <Icon name="pomoc" />
                  <div>
                    <Typography variant="p-default-black">{t('career.address')}</Typography>
                    <Typography variant="p-default">
                      {positionDetail.region_description.replaceAll(HTML_REGEX, '')}
                    </Typography>
                    {parse(positionDetail.job_note)}
                    {parse(DOMpurify.sanitize(positionDetail.benefit))}
                  </div>
                </div>
              )}
            </div>
            {hasData && (
              <SidebarCareer className="p-0 lg:p-0">
                {/* TODO: chceme to pridat do zoznamov sidebarov? */}
                <div className="px-5 py-4">
                  <div className="pb-2">
                    <Typography variant="p-default-black">{t('career.contact')}</Typography>
                  </div>
                  <Typography variant="p-default">
                    {positionDetail.user_consultant?.firstname}{' '}
                    {positionDetail.user_consultant?.lastname}
                  </Typography>
                  <Typography variant="p-default">
                    {positionDetail.user_consultant?.email}
                  </Typography>
                </div>
                <div className="flex flex-col gap-3 px-5 pb-4 pt-5">
                  <Typography variant="p-default-black">{t('career.interested')}</Typography>
                  <Button
                    variant="category-solid"
                    href={positionDetail.apply_url}
                    startIcon={<Icon name="karty-a-preukazy" />}
                    hasLinkIcon={false}
                    asLink
                  >
                    {t('career.sendCV')}
                  </Button>
                </div>
              </SidebarCareer>
            )}
          </div>
        </div>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
