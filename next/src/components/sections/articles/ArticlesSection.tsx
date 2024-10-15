import React from 'react'

import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import ArticlesSectionAll from '@/src/components/sections/articles/ArticlesSectionAll'
import ArticlesSectionFiltered from '@/src/components/sections/articles/ArticlesSectionFiltered'
import { ArticlesSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: ArticlesSectionFragment
}

const ArticlesSection = ({ section }: Props) => {
  const { tags, categories } = section

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredCategories = categories?.data.filter(isDefined) ?? []

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredTags = tags?.data.filter(isDefined) ?? []

  return (
    <SectionContainer background="primary" className="py-6 lg:py-12">
      {
        // If no categories or tags are selected in Strapi, show all Articles
        filteredCategories.length === 0 && filteredTags.length === 0 ? (
          <ArticlesSectionAll section={section} />
        ) : (
          <ArticlesSectionFiltered section={section} />
        )
      }
    </SectionContainer>
  )
}
export default ArticlesSection
