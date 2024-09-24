import IframeResizer from '@iframe-resizer/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'
import { useMemo } from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import Typography from '@/src/components/common/Typography/Typography'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import PageHeaderBasic from '@/src/components/sections/headers/PageHeaderBasic'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { FormEntityFragment, GeneralQuery } from '@/src/services/graphql/api'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import { NOT_FOUND } from '@/src/utils/conts'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'

type PageProps = {
  general?: GeneralQuery
  navigation: NavigationObject
  entity: FormEntityFragment
}

type StaticParams = {
  slug: string
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const { forms: entities } = await client.FormsStaticPaths()

  const paths = (entities?.data ?? [])
    .filter((entity) => entity?.attributes?.slug)
    .map((entity) => ({
      params: {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion,@typescript-eslint/no-non-null-assertion
        slug: entity.attributes!.slug!,
      },
    }))

  // eslint-disable-next-line no-console
  console.log(`Forms: Generated static paths for ${paths.length} slugs.`)

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async ({
  locale,
  params,
}) => {
  const slug = params?.slug

  // TODO update console log so it displays correct path
  // eslint-disable-next-line no-console
  console.log(`Revalidating Form ${locale} ${slug}`)

  if (!slug || !locale) {
    return NOT_FOUND
  }

  const [{ forms: entities }, /* general, */ navigation, translations] = await Promise.all([
    client.FormBySlug({ slug }),
    // client.General({ locale }),
    fetchNavigation(navigationConfig),
    serverSideTranslations(locale),
  ])

  const entity = entities?.data[0]
  if (!entity) {
    return NOT_FOUND
  }

  return {
    props: {
      entity,
      // general,
      navigation,
      ...translations,
    },
    revalidate: 1, // TODO change to 10
  }
}

const Page = ({ entity, general, navigation }: PageProps) => {
  // TODO consider extracting this to a hook for all detail pages
  const parentPagePath = navigation.contentTypePathPrefixesMap.service ?? ''
  const breadcrumbs = useMemo(
    () => [
      ...getPageBreadcrumbs(parentPagePath, navigation.pagePathsMap),
      {
        title: entity.attributes?.parentService?.data?.attributes?.title ?? '',
        path: null,
      }, // TODO path
      { title: entity.attributes?.title ?? '', path: null },
    ],
    [
      entity.attributes?.parentService?.data?.attributes?.title,
      entity.attributes?.title,
      navigation.pagePathsMap,
      parentPagePath,
    ],
  )

  if (!entity.attributes) {
    return null
  }

  const { title, subtext, formSlug } = entity.attributes

  // TODO move city account url to env
  const iframeUrl = formSlug
    ? `https://city-account-next.staging.bratislava.sk/mestske-sluzby/dev/${formSlug}?externa-sluzba=true`
    : null

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
        <PageHeaderBasic title={title} perex={subtext} />

        {iframeUrl ? (
          <IframeResizer
            license="GPLv3"
            src={iframeUrl}
            style={{ width: '100%', height: '100vh' }}
          />
        ) : (
          <SectionContainer>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Typography>No form slug provided.</Typography>
          </SectionContainer>
        )}
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
