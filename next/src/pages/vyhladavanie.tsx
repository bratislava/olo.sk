import { GetStaticProps } from 'next'
import Head from 'next/head'
// import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'

import Breadcrumbs from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import GlobalSearchSectionContent from '@/src/components/page-contents/search/GlobalSearchSectionContent'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery } from '@/src/services/graphql/api'

type PageProps = {
  general: GeneralQuery
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  // eslint-disable-next-line no-console
  console.log(`Revalidating search ${locale}.`)

  if (!locale) return { notFound: true }

  const [general, translations] = await Promise.all([
    client.General({ locale }),
    serverSideTranslations(locale),
  ])

  return {
    props: {
      general,
      ...translations,
    },
    revalidate: 10,
  }
}

const Page = ({ general }: PageProps) => {
  // const { t } = useTranslation()

  // TODO translate
  // eslint-disable-next-line const-case/uppercase
  const title = 'Výsledky vyhľadávania'

  const breadcrumbs = React.useMemo(() => [{ title, path: null }], [])

  return (
    <GeneralContextProvider general={general}>
      <Head>
        <title>{title}</title>
      </Head>
      <PageLayout>
        <SectionContainer background="secondary">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <HeaderTitleText
            title={title}
            // Breadcrumbs={[{ title: t('SearchPage.searching'), path: null }]}
          />
        </SectionContainer>
        <SectionContainer className="py-6 lg:py-12">
          <GlobalSearchSectionContent />
        </SectionContainer>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
