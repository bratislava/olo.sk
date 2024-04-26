import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import Typography from '@/_components/common/Typography/Typography'

type PageProps = {
  // homepageContext: HomepageContext
  // general: GeneralQuery
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  // eslint-disable-next-line no-console
  console.log(`Revalidating homepage ${locale}.`)

  // TODO locale
  if (!locale) {
    return { notFound: true }
  }

  const [translations] = await Promise.all([
    // homepageContextFetcher(locale),
    // client.General({ locale }),
    serverSideTranslations(locale),
  ])

  return {
    props: {
      // homepageContext,
      // general,
      ...translations,
    },
    revalidate: 10,
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Homepage = (props: PageProps) => {
  const { t } = useTranslation()
  // const title = useTitle()

  return (
    <>
      {/* <GeneralContextProvider general={general}> */}
      {/*   <HomepageContextProvider homepageContext={homepageContext}> */}
      {/* <Head> */}
      {/*   <title>{title}</title> */}
      {/*   {homepageContext.homepage?.attributes?.metaDescription && ( */}
      {/*     <meta */}
      {/*       name="description" */}
      {/*       content={homepageContext.homepage?.attributes?.metaDescription ?? undefined} */}
      {/*     /> */}
      {/*   )} */}
      {/* </Head> */}

      <div className="flex flex-col items-center">
        <Typography variant="h1-hero">{t('helloWorld')}</Typography>
      </div>

      {/*     <PageLayout> */}
      {/*       <HomepageContent /> */}
      {/*     </PageLayout> */}
      {/*   </HomepageContextProvider> */}
      {/* </GeneralContextProvider> */}
    </>
  )
}

export default Homepage
