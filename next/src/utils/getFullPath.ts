import { ArticleSlugEntityFragment, PageSlugEntityFragment } from '@/src/services/graphql/api'
import { getPagePath } from '@/src/utils/getPagePath'

export type UnionSlugEntityType =
  | PageSlugEntityFragment
  | ArticleSlugEntityFragment
  | null
  | undefined

// TODO tmp paths
const localPaths = {
  article: '/o-nas/novinky',
}

/**
 * Returns full path for Strapi entity.
 *
 * Based on marianum.sk: https://github.com/bratislava/marianum.sk/blob/master/next/components/molecules/Navigation/NavigationProvider/useGetFullPath.ts#L50
 */
export const getFullPath = (entity: UnionSlugEntityType) => {
  const { slug } = entity?.attributes ?? {}

  if (!slug || !entity || !entity.attributes) {
    return null
  }

  // TODO add other content types
  if (entity.__typename === 'PageEntity') {
    return getPagePath(entity)
  }
  if (entity.__typename === 'ArticleEntity') {
    // return getPagePath(entity)
    return `${localPaths.article}/${entity.attributes.slug}`
  }

  return null
}
