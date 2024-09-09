import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useSearchParams } from 'next/navigation'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'
import { useEffect, useMemo } from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import PageHeaderSections from '@/src/components/layout/PageHeaderSections'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import Sections from '@/src/components/layout/Sections'
import AliasSection from '@/src/components/sections/AliasSection'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery, PageEntityFragment } from '@/src/services/graphql/api'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import { NOT_FOUND } from '@/src/utils/conts'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'
import { isDefined } from '@/src/utils/isDefined'
import { prefetchPageSections } from '@/src/utils/prefetchPageSections'
import { generalQuery } from '@/src/utils/queryOptions'

type PageProps = {
  general: GeneralQuery
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
  console.log(`Pages: Generated static paths for ${paths.length} pages.`)

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

  const [{ pages: entities }, { pages: aliasEntities }, general, navigation, translations] =
    await Promise.all([
      client.PageBySlug({ slug, locale }),
      client.PageRedirectByAlias({ alias: slug, locale }),
      client.General({ locale }),
      fetchNavigation(navigationConfig),
      serverSideTranslations(locale),
    ])

  // Check if the page with this alias exists (get its slug)
  const aliasPageSlug = aliasEntities?.data[0]?.attributes?.slug
  if (aliasPageSlug) {
    // Get the full path for the page by its slug
    const aliasRedirectPath = navigation.pagePathsMap[aliasPageSlug]?.path
    // Double check if the path is not undefined
    // This should never happen. If it does, something is wrong, because pagePathsMap should contain all pages.
    if (!aliasRedirectPath) {
      return NOT_FOUND
    }

    // Redirect to the new path
    return {
      redirect: {
        destination: aliasRedirectPath,
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
  await prefetchPageSections(queryClient, entity, locale)

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

  const { title, perex, sections, alias } = page.attributes
  const [header] = page.attributes.header ?? []

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{title}</title>
        {perex && <meta name="description" content={perex} />}
      </Head>

      <PageLayout>
        {/* Some header elements overflow the section layout, so they need to be outside SectionContainer */}
        {header?.__typename !== 'ComponentHeaderSectionsSideImage' && (
          <SectionContainer background="secondary">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </SectionContainer>
        )}
        <PageHeaderSections header={header} title={title} perex={perex} breadcrumbs={breadcrumbs} />

        <Sections sections={sections?.filter(isDefined) ?? []} />

        <AliasSection alias={alias} />
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
