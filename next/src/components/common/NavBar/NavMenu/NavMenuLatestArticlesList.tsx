import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import { Fragment } from 'react'

import MenuItemArticleCard from '@/src/components/common/Card/MenuItemArticleCard'
import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import { client } from '@/src/services/graphql'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type NavMenuLatestArticlesListProps = {
  className?: string
}

const NavMenuLatestArticlesList = ({ className }: NavMenuLatestArticlesListProps) => {
  const { i18n } = useTranslation()
  const locale = i18n.language
  const { getFullPath } = useGetFullPath()

  const { data: articlesData } = useQuery({
    queryFn: () => client.LatestArticles({ limit: 3, locale }),
    queryKey: ['latestArticles', { limit: 3, locale }],
  })

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredArticles = articlesData?.articles?.data.filter(isDefined) ?? []

  if (filteredArticles.length === 0) return null

  return (
    <ul className={cn('flex flex-col', className)}>
      {filteredArticles
        .map((article, index) => {
          const isLast = index === filteredArticles.length - 1
          if (!article.attributes) return null
          const { title, coverMedia, articleCategory } = article.attributes

          return (
            <Fragment key={title}>
              <MenuItemArticleCard
                title={title}
                linkHref={getFullPath(article) ?? '#'}
                // TODO: Do we want to provide a default image here?
                imgSrc={coverMedia?.data?.attributes?.url}
                tagText={articleCategory?.data?.attributes?.title ?? ''}
              />
              <NavBarDivider
                variant="horizontal"
                className={cn('py-4', {
                  'pb-0': isLast,
                })}
                innerClassName={cn({
                  'border-none': isLast,
                })}
              />
            </Fragment>
          )
        })
        // eslint-disable-next-line unicorn/no-array-callback-reference
        .filter(isDefined)}
    </ul>
  )
}

export default NavMenuLatestArticlesList
