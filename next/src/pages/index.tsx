import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import PageLayout from '@/src/components/layout/PageLayout'
import ArticlesHomepageSection from '@/src/components/sections/hompage/ArticlesHomepageSection'
import HeroHomepageSection from '@/src/components/sections/hompage/HeroHomepageSection'
import KoloHomepageSection from '@/src/components/sections/hompage/KoloHomepageSection'
import ServicesHomepageSection from '@/src/components/sections/hompage/ServicesHomepageSection'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery, HomepageEntityFragment } from '@/src/services/graphql/api'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import { NOT_FOUND } from '@/src/utils/conts'
import { generalQuery } from '@/src/utils/queryOptions'

type PageProps = {
  homepage: HomepageEntityFragment
  general: GeneralQuery
  navigation: NavigationObject
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  // eslint-disable-next-line no-console
  console.log(`Revalidating homepage ${locale}.`)

  if (!locale) {
    return NOT_FOUND
  }

  const [{ homepage }, general, navigation, translations] = await Promise.all([
    client.Homepage({ locale }),
    client.General({ locale }),
    fetchNavigation(navigationConfig),
    serverSideTranslations(locale),
  ])

  const page = homepage?.data
  if (!page) {
    return NOT_FOUND
  }

  // Prefetch data
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(generalQuery(locale))

  const dehydratedState = dehydrate(queryClient)

  return {
    props: {
      homepage: page,
      general,
      navigation,
      dehydratedState,
      ...translations,
    },
    revalidate: 1, // TODO change to 10
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Homepage = ({ homepage, general, navigation }: PageProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation()
  // const title = useTitle()

  /**
   * TODO Add common Head/Seo component, layout, providers, as in bratislava.sk
   * https://github.com/bratislava/bratislava.sk/blob/master/next/pages/index.tsx
   */
  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      <PageLayout>
        <HeroHomepageSection section={homepage.attributes?.heroSection} />
        <ArticlesHomepageSection section={homepage.attributes?.articlesSection} />
        <KoloHomepageSection section={homepage.attributes?.koloSection} />
        <ServicesHomepageSection section={homepage.attributes?.servicesSection} />
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Homepage
