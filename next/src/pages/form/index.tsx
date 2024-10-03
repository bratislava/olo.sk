import { useQuery } from '@tanstack/react-query'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { parseString } from 'xml2js'

import Typography from '@/src/components/common/Typography/Typography'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery } from '@/src/services/graphql/api'
import { JosefineObject } from '@/src/services/josephine/josephineTypes'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'

// TODO remove this page

type PageProps = {
  general: GeneralQuery
  navigation: NavigationObject
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ locale = 'sk' }) => {
  const [general, navigation, translations] = await Promise.all([
    client.General({ locale }),
    fetchNavigation(navigationConfig),
    serverSideTranslations(locale),
  ])

  return {
    props: {
      general,
      navigation,
      ...translations,
    },
  }
}

const Page = ({ general, navigation }: PageProps) => {
  const fetchUrl = `https://josephine.proebiz.com/sk/api/client/webpublisher/${process.env.NEXT_PUBLIC_JOSEPHINE_API_TOKEN}/running`

  const { isPending, isError, error, data } = useQuery({
    queryKey: ['TODO', fetchUrl],
    queryFn: async () => {
      const response = await fetch(fetchUrl)
      const xml = await response.text()
      let obj = {}

      // https://github.com/Leonidas-from-XIV/node-xml2js?tab=readme-ov-file#options
      parseString(xml, { explicitArray: false, trim: true }, (err, result) => {
        if (err) throw err
        obj = result as JosefineObject
      })

      return obj
    },
  })

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      <PageLayout>
        <SectionContainer>
          {isPending ? (
            <Typography>Loading...</Typography>
          ) : isError ? (
            <Typography>{error.message}</Typography>
          ) : (
            <Typography>{JSON.stringify(data, null, 2)}</Typography>
          )}
        </SectionContainer>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
