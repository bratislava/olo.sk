import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React from 'react'

import ArticleCard from '@/src/components/common/Card/ArticleCard'
import ResponsiveCarousel from '@/src/components/common/Carousel/ResponsiveCarousel'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { LATEST_ARTICLES_COUNT } from '@/src/components/sections/headers/PageHeaderPickupDay'
import { client } from '@/src/services/graphql'
import { ArticlesHomepageSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type Props = {
  section: ArticlesHomepageSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1058-10545&m=dev
 */

const ArticlesHomepageSection = ({ section }: Props) => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { getFullPath } = useGetFullPath()

  const { title, text, articles, showMoreLink } = section ?? {}

  // TODO add latest news to fill specific amount of articles https://github.com/bratislava/olo.sk/issues/274
  // eslint-disable-next-line unicorn/no-array-callback-reference
  const featuredArticles = articles?.data.filter(isDefined) ?? []
  const featuredArticlesIds = new Set(
    // eslint-disable-next-line unicorn/no-array-callback-reference
    featuredArticles.map((article) => article.id).filter(isDefined),
  )

  const { data: articlesData } = useQuery({
    queryKey: ['LatestArticles', { limit: LATEST_ARTICLES_COUNT, locale }],
    queryFn: () => client.LatestArticles({ limit: LATEST_ARTICLES_COUNT, locale }),
  })

  // Show featured articles first, and then other latest articles (excluding featured ones), max LATEST_ARTICLES_COUNT articles
  const articlesToShow = [
    ...featuredArticles,
    // eslint-disable-next-line unicorn/no-array-callback-reference
    ...(articlesData?.articles?.data.filter(isDefined) ?? []).filter(
      (article) => article.id && !featuredArticlesIds.has(article.id),
    ),
  ].slice(0, LATEST_ARTICLES_COUNT)

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="secondary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} showMoreLink={showMoreLink} />

        <ResponsiveCarousel
          desktop={4}
          shiftVariant="byPage"
          controlsVariant="side"
          hasVerticalPadding={false}
          items={articlesToShow
            .map((article) => {
              if (!article.attributes) return null

              const { title: articleTitle, coverMedia, articleCategory, slug } = article.attributes

              return (
                <ArticleCard
                  key={slug}
                  title={articleTitle}
                  linkHref={getFullPath(article) ?? '#'}
                  imgSrc={coverMedia?.data?.attributes?.url}
                  tagText={articleCategory?.data?.attributes?.title}
                />
              )
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        />
      </div>
    </SectionContainer>
  )
}

export default ArticlesHomepageSection
