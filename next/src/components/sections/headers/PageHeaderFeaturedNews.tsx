import ArticleCard from '@/src/components/common/Card/ArticleCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { FeaturedNewsHeaderSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  header: FeaturedNewsHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1189-12938&m=dev
 */

const PageHeaderFeaturedNews = ({ header }: Props) => {
  const { title, text, articlesTitle, firstArticle, secondArticle } = header

  const filteredArticles =
    // eslint-disable-next-line unicorn/no-array-callback-reference
    [firstArticle?.data, secondArticle?.data].filter(isDefined) ?? []

  return (
    <SectionContainer background="secondary">
      <HeaderTitleText
        title={title}
        text={text}
        className="border-action-background-default max-lg:pb-2 lg:border-b"
      />
      <div className="flex flex-col gap-6 py-6 lg:py-12">
        <SectionHeader title={articlesTitle} />
        <ul className=" grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {filteredArticles
            .map((article) => {
              if (!article?.attributes) return null

              const { title: articleTitle, slug, category, coverMedia } = article.attributes

              return (
                <li>
                  <ArticleCard
                    title={articleTitle}
                    tagText={category?.data?.attributes?.title}
                    imgSrc={coverMedia?.data?.attributes?.url}
                    linkHref={`/articles/${slug}`}
                  />
                </li>
              )
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default PageHeaderFeaturedNews
