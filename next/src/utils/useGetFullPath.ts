/* eslint-disable sonarjs/no-duplicate-string */
import { useMemo } from 'react'

import { useGeneralContext } from '@/src/providers/GeneralContextProvider'
import {
  ArticleSlugEntityFragment,
  BranchSlugEntityFragment,
  DocumentSlugEntityFragment,
  FaqCategorySlugEntityFragment,
  PageSlugEntityFragment,
  ServiceSlugEntityFragment,
  WorkshopSlugEntityFragment,
} from '@/src/services/graphql/api'
import { ContentTypePathPrefixesMap } from '@/src/services/navigation/parseContentTypePathPrefixes'
import { PagePathsMap } from '@/src/services/navigation/parseTopLevelPages'

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
  pagePathsMap: PagePathsMap,
  contentTypePathPrefixesMap: ContentTypePathPrefixesMap,
  // eslint-disable-next-line sonarjs/cognitive-complexity
) => {
  // Handle Branches first, because they have different logic
  if (entity?.__typename === 'BranchEntity') {
    if (!entity.attributes?.page?.data?.attributes?.slug) {
      return '#notProvided'
    }

    return pagePathsMap[entity.attributes.page.data.attributes.slug]?.path ?? '#notFound'
  }

  // Handle other content types
  const { slug } = entity?.attributes ?? {}

  if (!slug || !entity || !entity.attributes) {
    return '#notProvided'
  }

  // TODO Rewrite to cleaner code
  if (entity.__typename === 'PageEntity') {
    return pagePathsMap[slug]?.path ?? '#notFound'
  }

  if (entity.__typename === 'ArticleEntity' && contentTypePathPrefixesMap.article) {
    return `${contentTypePathPrefixesMap.article}/${entity.attributes.slug}`
  }

  if (entity.__typename === 'DocumentEntity' && contentTypePathPrefixesMap.document) {
    return `${contentTypePathPrefixesMap.document}/${entity.attributes.slug}`
  }

  if (entity.__typename === 'FaqCategoryEntity' && contentTypePathPrefixesMap.faqCategory) {
    return `${contentTypePathPrefixesMap.faqCategory}/${entity.attributes.slug}`
  }

  if (entity.__typename === 'ServiceEntity' && contentTypePathPrefixesMap.service) {
    return `${contentTypePathPrefixesMap.service}/${entity.attributes.slug}`
  }

  if (entity.__typename === 'WorkshopEntity' && contentTypePathPrefixesMap.workshop) {
    return `${contentTypePathPrefixesMap.workshop}/${entity.attributes.slug}`
  }

  return '#notProvided'
}

export const useGetFullPath = () => {
  const { pagePathsMap, contentTypePathPrefixesMap } = useGeneralContext()

  const getFullPath = useMemo(
    () => (entity: UnionSlugEntityType) => {
      return getFullPathFn(entity, pagePathsMap, contentTypePathPrefixesMap)
    },
    [pagePathsMap, contentTypePathPrefixesMap],
  )

  return { getFullPath }
}
