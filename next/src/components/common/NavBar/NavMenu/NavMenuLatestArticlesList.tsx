import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'

import MenuItemArticleCard from '@/src/components/common/Card/MenuItemArticleCard'
import { client } from '@/src/services/graphql'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type NavMenuLatestArticlesListProps = {
  className?: string
}

// TODO: #353 ensures that dividers are handled in a consistent fashion

const NavMenuLatestArticlesList = ({ className }: NavMenuLatestArticlesListProps) => {
  const { i18n } = useTranslation()
  const locale = i18n.language
  const { getFullPath } = useGetFullPath()

  const { data: articlesData } = useQuery({
    queryFn: () => client.LatestArticles({ limit: 3, locale }),
    queryKey: ['latestArticles', { limit: 3, locale }],
  })

  const filteredArticles = articlesData?.articles?.data.filter(isDefined) ?? []

  if (filteredArticles.length === 0) return null

  return (
    <ul className={cn('flex flex-col', className)}>
      {filteredArticles
        .map((article, index) => {
          if (!article.attributes) return null
          const { title, coverMedia, articleCategory } = article.attributes

          return (
            <li key={title}>
              <MenuItemArticleCard
                title={title}
                linkHref={getFullPath(article) ?? '#'}
                // Do we want to provide a default image here?
                imgSrc={coverMedia?.data?.attributes?.url}
                tagText={articleCategory?.data?.attributes?.title ?? ''}
                className={cn('pb-4', {
                  'border-b border-border-default': index !== filteredArticles.length - 1,
                  'pt-4': index !== 0,
                  'pb-0': index === filteredArticles.length - 1,
                })}
              />
            </li>
          )
        })
        // eslint-disable-next-line unicorn/no-array-callback-reference
        .filter(isDefined)}
    </ul>
  )
}

export default NavMenuLatestArticlesList
