import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import AccordionGroup from '@/_components/common/Accordion/AccordionGroup'
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

      <div className="mx-auto my-8 flex min-h-[101vh] w-full max-w-[500px] flex-col items-center justify-start gap-12">
        <Typography variant="h1">{t('helloWorld')}</Typography>
        <AccordionGroup
          accordionData={[
            {
              children: <Typography>Short dummy text</Typography>,
              title: 'Accordion title 1',
            },
            {
              children: (
                <Typography>
                  Long dummy text: Ut eget malesuada nisl. Donec gravida, risus in maximus
                  tincidunt, augue elit maximus ante, at posuere arcu est in metus. Sed maximus
                  risus nulla, quis blandit nulla efficitur in. Aenean porttitor lacus sed gravida
                  volutpat. Nunc feugiat quam id mi pulvinar vestibulum. Integer eget porttitor est.
                  Duis at enim sit amet tellus elementum vehicula nec quis enim. Curabitur ut
                  molestie ex. Mauris aliquet vulputate lacus, sed mollis urna luctus in. Phasellus
                  magna neque, aliquet nec odio at, accumsan ultricies justo. Suspendisse sit amet
                  orci purus.
                </Typography>
              ),
              title: 'Accordion title 2',
            },
            {
              children: (
                <Typography>
                  Long dummy text: Ut eget malesuada nisl. Donec gravida, risus in maximus
                  tincidunt, augue elit maximus ante, at posuere arcu est in metus. Sed maximus
                  risus nulla, quis blandit nulla efficitur in. Aenean porttitor lacus sed gravida
                  volutpat. Nunc feugiat quam id mi pulvinar vestibulum. Integer eget porttitor est.
                  Duis at enim sit amet tellus elementum vehicula nec quis enim. Curabitur ut
                  molestie ex. Mauris aliquet vulputate lacus, sed mollis urna luctus in. Phasellus
                  magna neque, aliquet nec odio at, accumsan ultricies justo. Suspendisse sit amet
                  orci purus.
                </Typography>
              ),
              title: 'Accordion title 3',
            },
          ]}
        />
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
