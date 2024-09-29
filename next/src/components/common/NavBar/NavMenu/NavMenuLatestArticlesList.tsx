import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'

import MenuItemArticleCard from '@/src/components/common/Card/MenuItemArticleCard'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import { latestArticlesQuery } from '@/src/utils/queryOptions'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

export const LATEST_ARTICLES_COUNT = 6

type NavMenuLatestArticlesListProps = {
  hasDividers?: boolean
  className?: string
}

const NavMenuLatestArticlesList = ({ hasDividers, className }: NavMenuLatestArticlesListProps) => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { getFullPath } = useGetFullPath()
  const { data: articlesData } = useQuery(latestArticlesQuery(LATEST_ARTICLES_COUNT, locale))
  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredArticles = articlesData?.articles?.data.filter(isDefined) ?? []

  return (
    <ul
      className={cn(
        'flex flex-col gap-4 lg:gap-5',
        { 'divide-y divide-border-default': hasDividers },
        className,
      )}
    >
      {filteredArticles
        ?.map((article, index) => {
          if (!article.attributes) return null
          const { title, coverMedia, articleCategory } = article.attributes

          return (
            <MenuItemArticleCard
              key={article.id}
              title={title}
              linkHref={getFullPath(article) ?? '#'}
              imgSrc={coverMedia?.data?.attributes?.url}
              tagText={articleCategory?.data?.attributes?.title ?? ''}
              className={cn({ 'pt-4 lg:pt-5': index !== 0 })}
            />
          )
        })
        // eslint-disable-next-line unicorn/no-array-callback-reference
        .filter(isDefined)}
    </ul>
  )
}

export default NavMenuLatestArticlesList
