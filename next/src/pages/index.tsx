import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import Typography from '@/_components/common/Typography/Typography'
import Section from '@/_components/layout/Section/Section'
import { client } from '@/services/graphql'
import { HomepageEntityFragment } from '@/services/graphql/api'

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
  const { t } = useTranslation()
  // const title = useTitle()

  return (
    <>
      {/* TODO common Head/Seo component, layout, providers  */}
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

      {/* TODO this is just to display data in very basic form, should be replaced by proper component */}
      <Section>
        {homepage.attributes?.slides?.map((slide, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="rounded-lg p-6"
            style={{ backgroundColor: slide?.backgroundColor ?? '' }}
          >
            <Typography variant="h1" as="p">
              {slide?.title}
            </Typography>
            <Typography>{slide?.text}</Typography>
            <Typography>{slide?.backgroundColor}</Typography>

            {slide?.media.data?.attributes ? (
              <img src={slide.media.data.attributes.url} alt="" />
            ) : null}
          </div>
        ))}
      </Section>

      <div className="flex flex-col items-center justify-center">
        <Typography variant="h1">{t('helloWorld')}</Typography>
        <Typography variant="p-default" as="strong">
          {t('helloWorld')}
        </Typography>
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
