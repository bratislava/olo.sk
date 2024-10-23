import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import React from 'react'

import ArticleCard from '@/src/components/common/Card/ArticleCard'
import ResponsiveCarousel from '@/src/components/common/Carousel/ResponsiveCarousel'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { ArticlesSectionFragment } from '@/src/services/graphql/api'
import {
  articlesDefaultFilters,
  ArticlesFilters,
  getMeiliArticlesQueryKey,
  meiliArticlesFetcher,
} from '@/src/services/meili/fetchers/articlesFetcher'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type Props = {
  section: ArticlesSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1058-10545&m=dev
 */

const ArticlesSectionFiltered = ({ section }: Props) => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { title, text, categories, tags, showMoreLink } = section ?? {}
  const { getFullPath } = useGetFullPath()

  // TODO discuss the optimal number
  const ARTICLES_COUNT = 20

  const filteredCategorySlugs =
    categories?.data
      .map((category) => category?.attributes?.slug)
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined) ?? []

  const filteredTagSlugs =
    tags?.data
      .map((tag) => tag?.attributes?.slug)
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined) ?? []

  const filters: ArticlesFilters = {
    ...articlesDefaultFilters,
    pageSize: ARTICLES_COUNT,
    categorySlugs: filteredCategorySlugs,
    tagSlugs: filteredTagSlugs,
  }

  const { data: articlesData } = useQuery({
    queryKey: getMeiliArticlesQueryKey(filters, locale),
    queryFn: () => meiliArticlesFetcher(filters, locale),
  })

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader title={title} text={text} showMoreLink={showMoreLink} />
      {articlesData?.hits.length ? (
        <ResponsiveCarousel
          desktop={4}
          shiftVariant="byPage"
          controlsVariant="bottom"
          hasVerticalPadding={false}
          items={articlesData.hits
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
                  className="h-full"
                />
              )
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        />
      ) : null}
    </div>
  )
}

export default ArticlesSectionFiltered
