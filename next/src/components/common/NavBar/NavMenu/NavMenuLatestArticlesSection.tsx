import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import { Fragment } from 'react'

import MenuItemArticleCard from '@/src/components/common/Card/MenuItemArticleCard'
import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import { client } from '@/src/services/graphql'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type NavMenuLatestArticlesSectionProps = {
  className?: string
}

const NavMenuLatestArticlesSection = ({ className }: NavMenuLatestArticlesSectionProps) => {
  const { i18n } = useTranslation()
  const locale = i18n.language
  const { getFullPath } = useGetFullPath()

  const { data: articlesData } = useQuery({
    queryFn: () => client.LatestArticles({ limit: 3, locale }),
    queryKey: ['latestArticles', { limit: 3, locale }],
  })

  const filteredArticles =
    articlesData?.articles?.data.filter((article) => isDefined(article?.attributes)) ?? []

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {filteredArticles.length > 0 &&
        filteredArticles
          .map((article, index) => {
            if (!article.attributes) return null
            const { title, coverMedia, articleCategory } = article.attributes

            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                {index > 0 ? <NavBarDivider variant="horizontal" /> : null}
                <MenuItemArticleCard
                  title={title}
                  linkHref={getFullPath(article) ?? '#'}
                  imgSrc={coverMedia?.data?.attributes?.url}
                  tagText={articleCategory?.data?.attributes?.title ?? ''}
                />
              </Fragment>
            )
          })
          // eslint-disable-next-line unicorn/no-array-callback-reference
          .filter(isDefined)}
    </div>
  )
}

export default NavMenuLatestArticlesSection