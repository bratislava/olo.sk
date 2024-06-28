import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import HomePageContentPlaceholder from '@/src/components/placeholder/HomePageContentPlaceholder'
import PageLayoutPlaceholder from '@/src/components/placeholder/PageLayoutPlaceholder'
import { client } from '@/src/services/graphql'
import { HomepageEntityFragment } from '@/src/services/graphql/api'

type PageProps = {
  homepage: HomepageEntityFragment
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  // eslint-disable-next-line no-console
  console.log(`Revalidating homepage ${locale}.`)

  if (!locale) {
    return { notFound: true }
  }

  const [{ homepage }, translations] = await Promise.all([
    client.Homepage({ locale }),
    // client.General({ locale }),
    serverSideTranslations(locale),
  ])

  const page = homepage?.data
  if (!page) {
    return { notFound: true }
  }

  return {
    props: {
      homepage: page,
      ...translations,
    },
    revalidate: 10,
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Homepage = ({ homepage }: PageProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation()
  // const title = useTitle()

  /**
   * TODO Add common Head/Seo component, layout, providers, as in bratislava.sk
   * https://github.com/bratislava/bratislava.sk/blob/master/next/pages/index.tsx
   */
  return (
    // TODO replace placeholder with proper component based on homepage props
    <PageLayoutPlaceholder>
      <HomePageContentPlaceholder />
    </PageLayoutPlaceholder>
  )
}

export default Homepage
