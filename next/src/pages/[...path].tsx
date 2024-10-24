import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useSearchParams } from 'next/navigation'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'
import { useEffect, useMemo } from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import { LATEST_ARTICLES_COUNT } from '@/src/components/common/NavBar/NavMenu/NavMenuLatestArticlesList'
import SeoHead from '@/src/components/common/SeoHead'
import PageHeaderSections from '@/src/components/layout/PageHeaderSections'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import Sections from '@/src/components/layout/Sections'
import Sidebars from '@/src/components/layout/Sidebars'
import AliasInfoMessage from '@/src/components/sections/AliasInfoMessage'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery, PageEntityFragment } from '@/src/services/graphql/api'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import cn from '@/src/utils/cn'
import { NOT_FOUND } from '@/src/utils/conts'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'
import { isDefined } from '@/src/utils/isDefined'
import { prefetchPageSections } from '@/src/utils/prefetchPageSections'
import { generalQuery, latestArticlesQuery } from '@/src/utils/queryOptions'

type PageProps = {
  general?: GeneralQuery
  navigation: NavigationObject
  entity: PageEntityFragment
}

type StaticParams = {
  path: string[]
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const { pagePathsMap } = await fetchNavigation(navigationConfig) // TODO host

  // eslint-disable-next-line unicorn/prefer-spread
  const paths = Array.from(Object.values(pagePathsMap))
    // eslint-disable-next-line unicorn/no-array-callback-reference
    .filter(isDefined)
    .map(({ path }) => path)

  // eslint-disable-next-line no-console
  // console.log(`Pages: Generated static paths for ${paths.length} pages.`)

  return { paths, fallback: 'blocking' }
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
    return NOT_FOUND
  }

  const [
    { pages: entities },
    { pages: aliasPages, articles: aliasArticles },
    // general,
    navigation,
    translations,
  ] = await Promise.all([
    client.PageBySlug({ slug, locale }),
    client.PageRedirectByAlias({ alias: slug, locale }),
    // client.General({ locale }),
    fetchNavigation(navigationConfig),
    serverSideTranslations(locale),
  ])

  let redirectPath = ''

  // Check if an Article with this alias exists
  const aliasArticleSlug = aliasArticles?.data[0]?.attributes?.slug
  if (aliasArticleSlug) {
    // Get the full path for the article
    redirectPath = navigation.contentTypePathPrefixesMap.article
      ? `${navigation.contentTypePathPrefixesMap.article}/${aliasArticleSlug}`
      : ''
  }

  // Check if a Page with this alias exists
  const aliasPageSlug = aliasPages?.data[0]?.attributes?.slug
  if (aliasPageSlug) {
    // Get the full path for the page by its slug
    redirectPath = navigation.pagePathsMap[aliasPageSlug]?.path ?? ''
  }

  // Note that alias in pages and articles are unique only within their own content type
  // If there are both a page and an article with the same alias, the page will override the `redirectPath` as it's checked as last
  if (redirectPath) {
    return {
      redirect: {
        destination: redirectPath,
        permanent: false,
      },
    }
  }

  const entity = entities?.data[0]
  if (!entity) {
    return NOT_FOUND
  }

  /** Ensure to be able to open the page only on its own full path. Otherwise, whatever path that ends with the slug would work. */
  const pagePath = navigation.pagePathsMap[slug]?.path

  if (!pagePath || pagePath !== pathJoined) {
    return NOT_FOUND
  }

  // Prefetch data
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(generalQuery(locale))
  await queryClient.prefetchQuery(latestArticlesQuery(LATEST_ARTICLES_COUNT, locale))
  await prefetchPageSections(queryClient, entity, locale)

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

const Page = ({ entity: page, general, navigation }: PageProps) => {
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

  const breadcrumbs = useMemo(
    () =>
      getPageBreadcrumbs(
        navigation.pagePathsMap[page.attributes?.slug ?? '']?.path ?? '',
        navigation.pagePathsMap,
      ),
    [navigation.pagePathsMap, page],
  )

  if (!page.attributes) {
    return null
  }

  const { title, perex, sections, alias, seo } = page.attributes

  // Header and sidebar has always max 1 element
  const [header] = page.attributes.header ?? []
  const [sidebar] = page.attributes.sidebar ?? []

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      <SeoHead title={title} description={perex} seo={seo} />

      <PageLayout>
        {/* Some header elements overflow the section layout, so they need to be outside SectionContainer */}
        {header?.__typename !== 'ComponentHeaderSectionsSideImage' && (
          <SectionContainer background="secondary">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </SectionContainer>
        )}
        <PageHeaderSections header={header} title={title} perex={perex} breadcrumbs={breadcrumbs} />

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
        {alias ? (
          <SectionContainer>
            <AliasInfoMessage alias={alias} />
          </SectionContainer>
        ) : null}
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
