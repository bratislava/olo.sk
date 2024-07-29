import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'

import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import PageLayoutPlaceholder from '@/src/components/placeholder/PageLayoutPlaceholder'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery, WorkshopEntityFragment } from '@/src/services/graphql/api'

type PageProps = {
  general: GeneralQuery
  entity: WorkshopEntityFragment
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
  console.log(`Revalidating Workshop ${locale === 'en' ? '/en' : ''}/documents/${slug}`)

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
    revalidate: 10,
  }
}

const Page = ({ entity, general }: PageProps) => {
  if (!entity.attributes) {
    return null
  }

  const { title } = entity.attributes

  return (
    <GeneralContextProvider general={general}>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{title}</title>
      </Head>

      <PageLayoutPlaceholder>
        {/* TODO Header and Content */}
        <SectionContainer background="secondary">
          <HeaderTitleText title={title} />
        </SectionContainer>
      </PageLayoutPlaceholder>
    </GeneralContextProvider>
  )
}

export default Page
