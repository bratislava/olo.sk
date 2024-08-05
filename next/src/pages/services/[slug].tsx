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
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'

type PageProps = {
  general: GeneralQuery
  entity: ServiceEntityFragment
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
  console.log(`Revalidating Service ${locale === 'en' ? '/en' : ''}/documents/${slug}`)

  // TODO || !locale
  if (!slug || !locale) {
    return { notFound: true }
  }

  const [{ services: entities }, general, translations] = await Promise.all([
    client.ServiceBySlug({ slug, locale }),
    client.General({ locale }),
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
      ...translations,
    },
    revalidate: 10,
  }
}

const Page = ({ entity, general }: PageProps) => {
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
    <GeneralContextProvider general={general}>
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
