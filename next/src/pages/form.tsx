import IframeResizer from '@iframe-resizer/react'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import PageLayoutPlaceholder from '@/src/components/placeholder/PageLayoutPlaceholder'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery } from '@/src/services/graphql/api'

type PageProps = {
  general: GeneralQuery
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ locale = 'sk' }) => {
  const [general, translations] = await Promise.all([
    client.General({ locale }),
    serverSideTranslations(locale),
  ])

  return {
    props: {
      general,
      ...translations,
    },
  }
}

const Page = ({ general }: PageProps) => {
  return (
    <GeneralContextProvider general={general}>
      <PageLayoutPlaceholder>
        <IframeResizer
          license="GPLv3"
          src="https://city-account-next.staging.bratislava.sk/mestske-sluzby/dev/olo-mimoriadny-odvoz-a-likvidacia-odpadu?externa-sluzba=true"
          style={{ width: '100%', height: '100vh' }}
        />
      </PageLayoutPlaceholder>
    </GeneralContextProvider>
  )
}

export default Page
