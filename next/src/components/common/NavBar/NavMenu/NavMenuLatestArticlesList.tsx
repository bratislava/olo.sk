import MenuItemArticleCard from '@/src/components/common/Card/MenuItemArticleCard'
import { ArticleEntityFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type NavMenuLatestArticlesListProps = {
  links: ArticleEntityFragment[] | null // TODO: Check the null case
  hasDividers?: boolean
  className?: string
}

const NavMenuLatestArticlesList = ({
  links,
  hasDividers,
  className,
}: NavMenuLatestArticlesListProps) => {
  const { getFullPath } = useGetFullPath()

  return (
    <ul
      className={cn(
        'flex flex-col gap-5',
        { 'divide-y divide-border-default': hasDividers },
        className,
      )}
    >
      {links
        ?.map((article, index) => {
          if (!article.attributes) return null
          const { title, coverMedia, articleCategory } = article.attributes

          return (
            <MenuItemArticleCard
              key={article.id}
              title={title}
              linkHref={getFullPath(article) ?? '#'}
              // TODO: Do we want to provide a default image here?
              imgSrc={coverMedia?.data?.attributes?.url}
              tagText={articleCategory?.data?.attributes?.title ?? ''}
              className={cn({ 'pt-5': index !== 0 })}
            />
          )
        })
        // eslint-disable-next-line unicorn/no-array-callback-reference
        .filter(isDefined)}
    </ul>
  )
}

export default NavMenuLatestArticlesList
