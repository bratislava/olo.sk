import React from 'react'

import ArticleCard from '@/src/components/common/Card/ArticleCard'
import ResponsiveCarousel from '@/src/components/common/Carousel/ResponsiveCarousel'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
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
  const { getFullPath } = useGetFullPath()

  const { title, text, articles, showMoreLink } = section ?? {}

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredArticles = articles?.data.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="secondary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-4 lg:gap-12">
        <SectionHeader title={title} text={text} showMoreLink={showMoreLink} />

        <ResponsiveCarousel
          shiftVariant="byPage"
          controlsVariant="side"
          hasVerticalPadding={false}
          items={filteredArticles
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
