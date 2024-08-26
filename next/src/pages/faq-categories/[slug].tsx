import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import FaqGroup from '@/src/components/common/FaqGroup/FaqGroup'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import BannerSection from '@/src/components/sections/BannerSection'
import PageHeaderIcon from '@/src/components/sections/headers/PageHeaderIcon'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { FaqCategoryEntityFragment, GeneralQuery } from '@/src/services/graphql/api'
import { getPageBreadcrumbs } from '@/src/utils/getPageBreadcrumbs'

type PageProps = {
  general: GeneralQuery
  entity: FaqCategoryEntityFragment
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

  const [{ faqCategories: entities }, general, translations] = await Promise.all([
    client.FaqCategoryBySlug({ slug, locale }),
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
  const faqCategoriesParentPage =
    general.navigation?.data?.attributes?.faqCategoriesParentPage?.data
  const breadcrumbs = React.useMemo(
    () => [
      ...getPageBreadcrumbs(faqCategoriesParentPage),
      { title: entity.attributes?.title ?? '', path: null },
    ],
    [faqCategoriesParentPage, entity.attributes?.title],
  )

  if (!entity.attributes) {
    return null
  }

  const { title, faqs, banner } = entity.attributes

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
        <PageHeaderIcon title={title} header={{ iconName: 'live-help' }} />
        {/* TODO fix y-padding so we don't change it from here */}
        <div className="flex flex-col py-6 lg:py-12 [&>*]:py-3 [&>div>*]:first:opacity-25 [&>div]:lg:py-6">
          <SectionContainer>
            <FaqGroup faqs={faqs?.data ?? []} />
          </SectionContainer>
          {banner ? <BannerSection section={banner} /> : null}
        </div>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
