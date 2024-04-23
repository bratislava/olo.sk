import { GetStaticProps } from 'next'
import React from 'react'

import Typography from '@/_components/common/Typography/Typography'

type PageProps = {
  // homepageContext: HomepageContext
  // general: GeneralQuery
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  // eslint-disable-next-line no-console
  console.log(`Revalidating homepage ${locale}.`)

  if (!locale) return { notFound: true }

  // const [homepageContext, general, messages] = await Promise.all([
  //   homepageContextFetcher(locale),
  //   client.General({ locale }),
  //   import(`../messages/${locale}.json`),
  // ])

  return {
    props: {
      // homepageContext,
      // general,
      // messages: messages.default,
    },
    revalidate: 10,
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Homepage = (props: PageProps) => {
  // const title = useTitle()

  return (
    <>
      <Typography variant="h1-hero">Hello</Typography>
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

      {/*     <PageLayout> */}
      {/*       <HomepageContent /> */}
      {/*     </PageLayout> */}
      {/*   </HomepageContextProvider> */}
      {/* </GeneralContextProvider> */}
    </>
  )
}

export default Homepage
