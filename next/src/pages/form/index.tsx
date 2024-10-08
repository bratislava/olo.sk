import { useQuery } from '@tanstack/react-query'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Typography from '@/src/components/common/Typography/Typography'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery } from '@/src/services/graphql/api'
import {
  fetchProcurementsFromApiAll,
  fetchProcurementsFromApiEnded,
  fetchProcurementsFromApiRunning,
} from '@/src/services/josephine/fetchProcurementsFromApi'
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
  const {
    isPending: pendingRunning,
    isError: isErrorRunning,
    error: errorRunning,
    data: procurementsRunning,
  } = useQuery({
    queryKey: ['Procurements running'],
    queryFn: fetchProcurementsFromApiRunning,
  })

  const {
    isPending: pendingEnded,
    isError: isErrorEnded,
    error: errorEnded,
    data: procurementsEnded,
  } = useQuery({
    queryKey: ['Procurements ended'],
    queryFn: fetchProcurementsFromApiEnded,
  })

  const {
    isPending: pendingAll,
    isError: isErrorAll,
    error: errorAll,
    data: procurementsAll,
  } = useQuery({
    queryKey: ['Procurements all'],
    queryFn: fetchProcurementsFromApiAll,
  })

  console.log('data running', procurementsRunning)

  console.log('data ended', procurementsEnded)

  console.log('data all', procurementsAll)

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      <PageLayout>
        <SectionContainer>
          {pendingRunning ? (
            <Typography>Loading...</Typography>
          ) : isErrorRunning ? (
            <Typography>{errorRunning.message}</Typography>
          ) : (
            <>
              <Typography>Running</Typography>
              <Typography>{JSON.stringify(procurementsRunning, null, 2)}</Typography>
            </>
          )}

          {pendingEnded ? (
            <Typography>Loading...</Typography>
          ) : isErrorEnded ? (
            <Typography>{errorEnded.message}</Typography>
          ) : (
            <>
              <Typography>Ended</Typography>
              <Typography>{JSON.stringify(procurementsEnded, null, 2)}</Typography>
            </>
          )}

          {pendingAll ? (
            <Typography>Loading...</Typography>
          ) : isErrorAll ? (
            <Typography>{errorAll.message}</Typography>
          ) : (
            <>
              <Typography>All procurements</Typography>
              <Typography>{JSON.stringify(procurementsAll, null, 2)}</Typography>
            </>
          )}
        </SectionContainer>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
