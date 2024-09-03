import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'
import { useMemo } from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import Sections from '@/src/components/layout/Sections'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery, WorkshopEntityFragment } from '@/src/services/graphql/api'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'
import { isDefined } from '@/src/utils/isDefined'

type PageProps = {
  general: GeneralQuery
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

  // TODO || !locale
  if (!slug || !locale) {
    return { notFound: true }
  }

  const [{ workshops: entities }, general, translations] = await Promise.all([
    client.WorkshopBySlug({ slug }),
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
    revalidate: 1, // TODO change to 10
  }
}

const Page = ({ entity, general }: PageProps) => {
  // TODO consider extracting this to a hook for all detail pages
  const workshopsParentPage = general.navigation?.data?.attributes?.workshopsParentPage?.data
  const breadcrumbs = useMemo(
    () => [
      ...getPageBreadcrumbs(workshopsParentPage),
      { title: entity.attributes?.title ?? '', path: null },
    ],
    [workshopsParentPage, entity.attributes?.title],
  )

  if (!entity.attributes) {
    return null
  }

  const { title, sections } = entity.attributes

  return (
    <GeneralContextProvider general={general}>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{title}</title>
      </Head>

      <PageLayout>
        <SectionContainer background="secondary">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <HeaderTitleText title={title} />
        </SectionContainer>
        {/* TODO fix y-padding so we don't change it from here */}
        <div className="flex flex-col py-6 lg:py-12 [&>*]:py-3 [&>*]:lg:py-6">
          <Sections sections={sections?.filter(isDefined) ?? []} />
        </div>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
