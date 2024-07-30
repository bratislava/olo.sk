import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import * as React from 'react'

import ShareBlock from '@/src/components/common/ShareBlock/ShareBlock'
import Markdown from '@/src/components/formatting/Markdown'
import PageLayout from '@/src/components/layout/PageLayout'
import ArticlePageHeader from '@/src/components/sections/headers/ArticlePageHeader'
import { GeneralContextProvider } from '@/src/providers/GeneralContextProvider'
import { client } from '@/src/services/graphql'
import { ArticleEntityFragment, GeneralQuery } from '@/src/services/graphql/api'

type PageProps = {
  general: GeneralQuery
  entity: ArticleEntityFragment
}

type StaticParams = {
  slug: string
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  // TODO return all paths

  // TODO restrict query
  // const { articles } = await client.Articles()

  // const paths = (articles?.data ?? [])
  //   .filter((article) => article?.attributes?.slug)
  //   .map((article) => ({
  //     params: {
  //       // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion,@typescript-eslint/no-non-null-assertion
  //       slug: article.attributes!.slug!,
  //     },
  //   }))

  // // eslint-disable-next-line no-console
  // console.log(`GENERATED STATIC PATHS FOR ${paths.length} SLUGS - BLOGS`)

  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<PageProps, StaticParams> = async ({
  locale,
  params,
}) => {
  const slug = params?.slug

  // TODO update console log so it displays correct path
  // eslint-disable-next-line no-console
  console.log(`Revalidating article ${locale === 'en' ? '/en' : ''}/articles/${slug}`)

  // TODO || !locale
  if (!slug || !locale) {
    return { notFound: true }
  }

  const [{ articles: entities }, general, translations] = await Promise.all([
    client.ArticleBySlug({ slug, locale }),
    client.General({ locale }),
    serverSideTranslations(locale),
  ])

  const entity = entities?.data[0]
  if (!entity) {
    return { notFound: true }
  }

  return {
    props: {
      entity,
      general,
      ...translations,
    },
    revalidate: 10,
  }
}

const Page = ({ entity, general }: PageProps) => {
  const { t } = useTranslation()

  if (!entity.attributes) {
    return null
  }

  const { title, perex, content } = entity.attributes

  return (
    <GeneralContextProvider general={general}>
      {/* TODO common Head/Seo component */}
      <Head>
        <title>{title}</title>
        {perex && <meta name="description" content={perex} />}
      </Head>

      <PageLayout>
        <ArticlePageHeader article={entity} />

        {/* TODO separate outer div(s) to Article Section with narrow layout */}
        <div className="mx-auto max-lg:px-4 lg:max-w-[50rem] lg:px-0">
          <div className="flex flex-col gap-6 py-6 lg:gap-12 lg:py-12">
            <div>
              <Markdown content={content} />
            </div>
            <ShareBlock
              text={t('articlePage.shareblock.text')}
              buttonText={t('articlePage.shareblock.buttonText')}
            />
          </div>
        </div>
      </PageLayout>
    </GeneralContextProvider>
  )
}

export default Page
