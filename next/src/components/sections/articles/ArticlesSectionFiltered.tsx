import { useQuery } from '@tanstack/react-query'
import React from 'react'

import ArticleCard from '@/src/components/common/Card/ArticleCard'
import ResponsiveCarousel from '@/src/components/common/Carousel/ResponsiveCarousel'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { client } from '@/src/services/graphql'
import { ArticlesSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type Props = {
  section: ArticlesSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1058-10545&m=dev
 */

const ArticlesSectionFiltered = ({ section }: Props) => {
  const { title, text, categories, tags, showMoreLink } = section ?? {}
  const { getFullPath } = useGetFullPath()

  // TODO discuss the optimal number
  const ARTICLES_COUNT = 20

  const filteredCategoriesIds =
    categories?.data
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined)
      .map((category) => category?.id)
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined) ?? []

  const filteredTagsIds =
    tags?.data
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined)
      .map((tag) => tag?.id)
      // eslint-disable-next-line unicorn/no-array-callback-reference
      .filter(isDefined) ?? []

  // If we pass an empty array, all tags (categories) are fetched, so we pass an empty string
  const tagsIdsToFetch = filteredTagsIds.length > 0 ? filteredTagsIds : ['']
  const categoriesIdsToFetch = filteredCategoriesIds.length > 0 ? filteredCategoriesIds : ['']

  // TODO limit the number of fetched articles
  const { data: articlesFromTags } = useQuery({
    queryKey: ['ArticlesFromTags', { tagsIds: tagsIdsToFetch }],
    queryFn: () => client.ArticlesByTagsIds({ tagsIds: tagsIdsToFetch }),
  })

  // TODO limit the number of fetched articles
  const { data: articlesFromCategories } = useQuery({
    queryKey: ['ArticlesFromCategories', { CategoriesIds: categoriesIdsToFetch }],
    queryFn: () => client.ArticlesByCategoriesIds({ categoriesIds: categoriesIdsToFetch }),
  })

  // TODO consider removing duplicates
  const articlesToShow = [
    ...(articlesFromTags?.articles?.data ?? []),
    ...(articlesFromCategories?.articles?.data ?? []),
  ]
    .slice(0, ARTICLES_COUNT)
    // sorts from newest to oldest
    .sort((a, b) => (new Date(a.attributes?.addedAt) < new Date(b.attributes?.addedAt) ? 1 : -1))

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader title={title} text={text} showMoreLink={showMoreLink} />
      <ResponsiveCarousel
        desktop={4}
        shiftVariant="byPage"
        controlsVariant="bottom"
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
                className="h-full"
              />
            )
          })
          // eslint-disable-next-line unicorn/no-array-callback-reference
          .filter(isDefined)}
      />
    </div>
  )
}

export default ArticlesSectionFiltered
