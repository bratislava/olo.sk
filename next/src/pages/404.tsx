import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import notFoundImageSrc from '@/public/not-found-image.svg?url'
import Button from '@/src/components/common/Button/Button'
import Typography from '@/src/components/common/Typography/Typography'
import PageLayout from '@/src/components/layout/PageLayout'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { GeneralQuery } from '@/src/services/graphql/api'
import { fetchNavigation } from '@/src/services/navigation/fetchNavigation'
import { navigationConfig } from '@/src/services/navigation/navigationConfig'
import { NavigationObject } from '@/src/services/navigation/typesNavigation'
import { generalQuery } from '@/src/utils/queryOptions'

type PageProps = {
  general?: GeneralQuery
  navigation: NavigationObject
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [navigation, translations] = await Promise.all([
    // client.General({ locale }),
    fetchNavigation(navigationConfig),
    serverSideTranslations(locale ?? 'sk'),
  ])

  // Prefetch data
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(generalQuery(locale ?? 'sk'))

  const dehydratedState = dehydrate(queryClient)

  return {
    props: {
      navigation,
      dehydratedState,
      ...translations,
    },
    revalidate: 1, // TODO change to 10
  }
}

const NotFoundPage = ({ general, navigation }: PageProps) => {
  const { t } = useTranslation()

  const router = useRouter()

  return (
    <GeneralContextProvider general={general} navigation={navigation}>
      <Head>
        <title>{t('notFound.pageTitle')}</title>
      </Head>

      <PageLayout>
        {/* TODO implement cypress  */}
        <SectionContainer className="py-6 lg:py-12">
          <div className="flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:py-40">
            <div
              // data-cy="404-left-side"
              className="order-2 flex flex-col gap-6 lg:order-1"
            >
              <div className="flex flex-col gap-2">
                <Typography variant="h1">{t('notFound.messageTitle')}</Typography>
                <Typography variant="p-large">{t('notFound.messageText')}</Typography>
              </div>

              <div className="flex flex-wrap gap-3 lg:gap-4">
                <Button
                  variant="category-solid"
                  asLink
                  hasLinkIcon={false}
                  fullWidthMobile
                  href="/"
                >
                  {t('notFound.toTheMainPage')}
                </Button>
                <Button variant="category-outline" fullWidthMobile onPress={() => router.back()}>
                  {t('notFound.toThePreviousPage')}
                </Button>
              </div>
            </div>
            <Image
              data-cy="404-image"
              src={notFoundImageSrc}
              alt=""
              className="order-1 lg:order-2"
            />
          </div>
        </SectionContainer>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default NotFoundPage
