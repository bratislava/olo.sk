import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import HomePageContentPlaceholder from '@/src/components/placeholder/HomePageContentPlaceholder'
import PageLayoutPlaceholder from '@/src/components/placeholder/PageLayoutPlaceholder'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { GeneralQuery, HomepageEntityFragment } from '@/src/services/graphql/api'

type PageProps = {
  homepage: HomepageEntityFragment
  general: GeneralQuery
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  // eslint-disable-next-line no-console
  console.log(`Revalidating homepage ${locale}.`)

  if (!locale) {
    return { notFound: true }
  }

  const [{ homepage }, general, translations] = await Promise.all([
    client.Homepage({ locale }),
    client.General(),
    serverSideTranslations(locale),
  ])

  const page = homepage?.data
  if (!page) {
    return { notFound: true }
  }

  return {
    props: {
      homepage: page,
      general,
      ...translations,
    },
    revalidate: 10,
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Homepage = ({ homepage, general }: PageProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation()
  // const title = useTitle()

  /**
   * TODO Add common Head/Seo component, layout, providers, as in bratislava.sk
   * https://github.com/bratislava/bratislava.sk/blob/master/next/pages/index.tsx
   */
  return (
    <GeneralContextProvider general={general}>
      <PageLayoutPlaceholder>
        <HomePageContentPlaceholder />
      </PageLayoutPlaceholder>
    </GeneralContextProvider>

    // TODO replace placeholder with proper component based on homepage props. Example below (needs to be a proper component, however):

    //   <Section>
    //   {homepage.attributes?.slides?.map((slide, index) => (
    //     <div
    //       // eslint-disable-next-line react/no-array-index-key
    //       key={index}
    //       className="rounded-lg p-6"
    //       style={{ backgroundColor: slide?.backgroundColor ?? '' }}
    //     >
    //       <Typography variant="h1" as="p">
    //         {slide?.title}
    //       </Typography>
    //       <Typography>{slide?.text}</Typography>
    //       <Typography>{slide?.backgroundColor}</Typography>

    //       {slide?.media.data?.attributes ? (
    //         <Image src={slide.media.data.attributes.url} alt="" />
    //       ) : null}
    //     </div>
    //   ))}
    // </Section>
  )
}

export default Homepage
