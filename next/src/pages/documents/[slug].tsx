import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'
import { useMemo } from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import DocumentPageContent from '@/src/components/page-contents/document/DocumentPageContent'
import DocumentPageHeader from '@/src/components/sections/headers/DocumentPageHeader'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { DocumentEntityFragment, GeneralQuery } from '@/src/services/graphql/api'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'

type PageProps = {
  general: GeneralQuery
  navigation: NavigationObject
  entity: DocumentEntityFragment
}

type StaticParams = {
  slug: string
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  // TODO return all paths

  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async ({
  locale,
  params,
}) => {
  const slug = params?.slug

  // TODO update console log so it displays correct path
  // eslint-disable-next-line no-console
  console.log(`Revalidating Document ${locale} ${slug}`)

  // TODO || !locale
  if (!slug || !locale) {
    return { notFound: true }
  }

  const [{ documents: entities }, general, navigation, translations] = await Promise.all([
    client.DocumentBySlug({ slug }),
    client.General({ locale }),
    fetchNavigation(navigationConfig),
    serverSideTranslations(locale),
  ])

  const entity = entities?.data[0]
  if (!entity) {
    return { notFound: true }
  }

  return {
    props: {
      entity,
      general,
      navigation,
      ...translations,
    },
    revalidate: 1, // TODO change to 10
  }
}

const Page = ({ entity, general, navigation }: PageProps) => {
  // TODO consider extracting this to a hook for all detail pages
  const parentPagePath = navigation.contentTypePathPrefixesMap.document ?? ''
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

  const { title } = entity.attributes

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{title}</title>
      </Head>

      <PageLayout>
        <SectionContainer background="secondary">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </SectionContainer>
        <DocumentPageHeader document={entity} />
        <DocumentPageContent document={entity} />
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
