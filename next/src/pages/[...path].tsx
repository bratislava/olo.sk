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
import { parseTopLevelPages } from '@/src/services/navigation/parseTopLevelPages'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'
import { isDefined } from '@/src/utils/isDefined'

type PageProps = {
  general: GeneralQuery
  entity: PageEntityFragment
}

type StaticParams = {
  path: string[]
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const { topLevelPages } = await client.General({ locale: 'sk' }) // TODO locale

  const { pagePathsMap } = parseTopLevelPages(topLevelPages?.data ?? [])

  // eslint-disable-next-line unicorn/prefer-spread
  const valuesArray = Array.from(pagePathsMap.values()) as [{ label: string; path: string }]
  const paths = valuesArray.map(({ path }) => path)

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
    return { notFound: true }
  }

  const [{ pages: entities }, { pages: aliasEntities }, general, translations] = await Promise.all([
    client.PageBySlug({ slug, locale }),
    client.PageRedirectByAlias({ alias: slug, locale }),
    client.General({ locale }),
    serverSideTranslations(locale),
  ])

  const { pagePathsMap } = parseTopLevelPages(
    // eslint-disable-next-line unicorn/no-array-callback-reference
    general.topLevelPages?.data.filter(isDefined) ?? [],
  )

  const aliasPageSlug = aliasEntities?.data[0]?.attributes?.slug
  if (aliasPageSlug) {
    const aliasRedirectPath = pagePathsMap.get(aliasPageSlug)?.path
    if (!aliasRedirectPath) {
      return { notFound: true }
    }

    return {
      redirect: {
        destination: aliasRedirectPath,
        permanent: false,
      },
    }
  }

  const entity = entities?.data[0]
  if (!entity) {
    return { notFound: true }
  }

  /** Ensure to be able to open the page only on its own full path. Otherwise, whatever path that ends with the slug would work. */
  const pagePath = pagePathsMap.get(slug)?.path

  if (!pagePath || pagePath !== pathJoined) {
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

const Page = ({ entity: page, general }: PageProps) => {
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

  const breadcrumbs = useMemo(() => getPageBreadcrumbs(page), [page])

  if (!page.attributes) {
    return null
  }

  const { title, perex, sections, alias } = page.attributes
  const [header] = page.attributes.header ?? []

  return (
    <GeneralContextProvider general={general}>
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
