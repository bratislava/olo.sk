import { useMemo } from 'react'

import { useGeneralContext } from '@/src/providers/GeneralContextProvider'
import {
  ArticleSlugEntityFragment,
  PageSlugEntityFragment,
  SitemapEntityFragment,
} from '@/src/services/graphql/api'
import { getPagePath } from '@/src/utils/getPagePath'

export type UnionSlugEntityType =
  | PageSlugEntityFragment
  | ArticleSlugEntityFragment
  | null
  | undefined

/**
 * Returns full path for Strapi entity.
 *
 * Based on marianum.sk: https://github.com/bratislava/marianum.sk/blob/master/next/components/molecules/Navigation/NavigationProvider/useGetFullPath.ts#L50
 */
export const getFullPathFn = (
  entity: UnionSlugEntityType,
  sitemap: SitemapEntityFragment | null | undefined,
) => {
  const { slug } = entity?.attributes ?? {}

  if (!slug || !entity || !entity.attributes) {
    return null
  }

  // TODO add other content types
  if (entity.__typename === 'PageEntity') {
    return getPagePath(entity)
  }
  if (entity.__typename === 'ArticleEntity' && sitemap?.attributes?.articlesParentPage?.data) {
    return `${getPagePath(sitemap.attributes.articlesParentPage.data)}/${entity.attributes.slug}`
  }

  return null
}

export const useGetFullPath = () => {
  const { sitemap } = useGeneralContext()

  const getFullPath = useMemo(
    () => (entity: UnionSlugEntityType) => getFullPathFn(entity, sitemap?.data),
    [sitemap],
  )

  return { getFullPath }
}
