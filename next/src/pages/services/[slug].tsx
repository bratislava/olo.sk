import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'
import { useMemo } from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import ServicePageContent from '@/src/components/page-contents/service/ServicePageContent'
import ServicePageHeader from '@/src/components/sections/headers/ServicePageHeader'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery, ServiceEntityFragment } from '@/src/services/graphql/api'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'

type PageProps = {
  general: GeneralQuery
  navigation: NavigationObject
  entity: ServiceEntityFragment
}

type StaticParams = {
  slug: string
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const { services: entities } = await client.ServicesStaticPaths()

  const paths = (entities?.data ?? [])
    .filter((entity) => entity?.attributes?.slug)
    .map((entity) => ({
      params: {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion,@typescript-eslint/no-non-null-assertion
        slug: entity.attributes!.slug!,
      },
    }))

  // eslint-disable-next-line no-console
  console.log(`Services: Generated static paths for ${paths.length} slugs.`)

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async ({
  locale,
  params,
}) => {
  const slug = params?.slug

  // TODO update console log so it displays correct path
  // eslint-disable-next-line no-console
  console.log(`Revalidating Service ${locale} ${slug}`)

  // TODO || !locale
  if (!slug || !locale) {
    return { notFound: true }
  }

  const [{ services: entities }, general, navigation, translations] = await Promise.all([
    client.ServiceBySlug({ slug, locale }),
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
  const servicesParentPage = general.navigation?.data?.attributes?.servicesParentPage?.data
  const breadcrumbs = useMemo(
    () => [
      ...getPageBreadcrumbs(servicesParentPage),
      { title: entity.attributes?.title ?? '', path: null },
    ],
    [servicesParentPage, entity.attributes?.title],
  )

  if (!entity.attributes) {
    return null
  }

  const { title, serviceCategories } = entity.attributes

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
        <ServicePageHeader title={title} serviceCategories={serviceCategories?.data ?? []} />

        <ServicePageContent service={entity} />
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
