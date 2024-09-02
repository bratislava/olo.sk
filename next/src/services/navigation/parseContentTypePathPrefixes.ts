import { GeneralQuery } from '@/src/services/graphql/api'
import { PagePathsMap } from '@/src/services/navigation/parseTopLevelPages'

export type ContentTypePathPrefixesMap = ReturnType<
  typeof parseContentTypePathPrefixes
>['contentTypePathPrefixesMap']

export const parseContentTypePathPrefixes = (
  navigation: GeneralQuery['navigation'],
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

  const contentTypePathPrefixesMap = {
    article: articlesParentPageSlug
      ? pagePathsMap.get(articlesParentPageSlug)?.path
      : articlesParentPageSlug,
    document: documentsParentPageSlug
      ? pagePathsMap.get(documentsParentPageSlug)?.path
      : documentsParentPageSlug,
    faqCategory: faqCategoriesParentPageSlug
      ? pagePathsMap.get(faqCategoriesParentPageSlug)?.path
      : faqCategoriesParentPageSlug,
    service: servicesParentPageSlug
      ? pagePathsMap.get(servicesParentPageSlug)?.path
      : servicesParentPageSlug,
    workshop: workshopsParentPageSlug
      ? pagePathsMap.get(workshopsParentPageSlug)?.path
      : workshopsParentPageSlug,
  }

  return { contentTypePathPrefixesMap }
}
