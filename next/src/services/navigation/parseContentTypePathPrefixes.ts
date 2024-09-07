import { NavigationQuery } from '@/src/services/graphql/api'
import { PagePathsMap } from '@/src/services/navigation/parseTopLevelPages'

export type ContentTypePathPrefixesMap = ReturnType<
  typeof parseContentTypePathPrefixes
>['contentTypePathPrefixesMap']

export const parseContentTypePathPrefixes = (
  navigation: NavigationQuery['navigation'],
  pagePathsMap: PagePathsMap,
) => {
  const {
    articlesParentPage,
    documentsParentPage,
    faqCategoriesParentPage,
    servicesParentPage,
    workshopsParentPage,
  } = navigation?.data?.attributes ?? {}

  const articlesParentPageSlug = articlesParentPage?.data?.attributes?.slug
  const documentsParentPageSlug = documentsParentPage?.data?.attributes?.slug
  const faqCategoriesParentPageSlug = faqCategoriesParentPage?.data?.attributes?.slug
  const servicesParentPageSlug = servicesParentPage?.data?.attributes?.slug
  const workshopsParentPageSlug = workshopsParentPage?.data?.attributes?.slug

  // Using null to make the object serializable
  const contentTypePathPrefixesMap = {
    article: articlesParentPageSlug
      ? pagePathsMap[articlesParentPageSlug]?.path
      : articlesParentPageSlug ?? null,
    document: documentsParentPageSlug
      ? pagePathsMap[documentsParentPageSlug]?.path
      : documentsParentPageSlug ?? null,
    faqCategory: faqCategoriesParentPageSlug
      ? pagePathsMap[faqCategoriesParentPageSlug]?.path
      : faqCategoriesParentPageSlug ?? null,
    service: servicesParentPageSlug
      ? pagePathsMap[servicesParentPageSlug]?.path
      : servicesParentPageSlug ?? null,
    workshop: workshopsParentPageSlug
      ? pagePathsMap[workshopsParentPageSlug]?.path
      : workshopsParentPageSlug ?? null,
  }

  return { contentTypePathPrefixesMap }
}
