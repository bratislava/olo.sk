import { useMemo } from 'react'

import { useGeneralContext } from '@/src/providers/GeneralContextProvider'
import {
  ArticleSlugEntityFragment,
  BranchSlugEntityFragment,
  DocumentSlugEntityFragment,
  FaqCategorySlugEntityFragment,
  NavigationEntityFragment,
  PageSlugEntityFragment,
  ServiceSlugEntityFragment,
  WorkshopSlugEntityFragment,
} from '@/src/services/graphql/api'
import { getPagePath } from '@/src/utils/getPagePath'

export type UnionSlugEntityType =
  | PageSlugEntityFragment
  | ArticleSlugEntityFragment
  | BranchSlugEntityFragment
  | DocumentSlugEntityFragment
  | FaqCategorySlugEntityFragment
  | ServiceSlugEntityFragment
  | WorkshopSlugEntityFragment
  | null
  | undefined

/**
 * Returns full path for Strapi entity.
 *
 * Based on marianum.sk: https://github.com/bratislava/marianum.sk/blob/master/next/components/molecules/Navigation/NavigationProvider/useGetFullPath.ts#L50
 */
export const getFullPathFn = (
  entity: UnionSlugEntityType,
  navigation: NavigationEntityFragment | null | undefined,
  // eslint-disable-next-line sonarjs/cognitive-complexity
) => {
  const { slug } = entity?.attributes ?? {}

  if (!slug || !entity || !entity.attributes) {
    return null
  }

  // TODO Rewrite to cleaner code
  if (entity.__typename === 'PageEntity') {
    return getPagePath(entity)
  }

  if (entity.__typename === 'ArticleEntity' && navigation?.attributes?.articlesParentPage?.data) {
    return `${getPagePath(navigation.attributes.articlesParentPage.data)}/${entity.attributes.slug}`
  }

  // TODO
  if (entity.__typename === 'BranchEntity') {
    return '#'
  }

  if (entity.__typename === 'DocumentEntity' && navigation?.attributes?.documentsParentPage?.data) {
    return `${getPagePath(navigation.attributes.documentsParentPage.data)}/${entity.attributes.slug}`
  }

  if (
    entity.__typename === 'FaqCategoryEntity' &&
    navigation?.attributes?.faqCategoriesParentPage?.data
  ) {
    return `${getPagePath(navigation.attributes.faqCategoriesParentPage.data)}/${entity.attributes.slug}`
  }

  if (entity.__typename === 'ServiceEntity' && navigation?.attributes?.servicesParentPage?.data) {
    return `${getPagePath(navigation.attributes.servicesParentPage.data)}/${entity.attributes.slug}`
  }

  if (entity.__typename === 'WorkshopEntity' && navigation?.attributes?.workshopsParentPage?.data) {
    return `${getPagePath(navigation.attributes.workshopsParentPage.data)}/${entity.attributes.slug}`
  }

  return null
}

export const useGetFullPath = () => {
  const { navigation } = useGeneralContext()

  const getFullPath = useMemo(
    () => (entity: UnionSlugEntityType) => getFullPathFn(entity, navigation?.data),
    [navigation],
  )

  return { getFullPath }
}
