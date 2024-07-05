import { PageParentPagesFragment } from '@/src/services/graphql/api'

export type Breadcrumb = {
  title: string
  path: string | null
}

// Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/utils/pageUtils_Deprecated.ts#L93

export const getPageBreadcrumbs = (page: PageParentPagesFragment): Breadcrumb[] => {
  const current = page
  if (!current) {
    return []
  }

  const pages = [current]

  let parentPage = current?.attributes?.parentPage
  while (parentPage?.data?.attributes) {
    pages.push(parentPage.data)
    parentPage = parentPage?.data?.attributes?.parentPage
  }

  const breadcrumbs: Breadcrumb[] = []

  pages.reverse().forEach((pageInner) => {
    const previousBreadcrumb = breadcrumbs.at(-1)

    breadcrumbs.push({
      title: pageInner.attributes?.title ?? '',
      path: pageInner.attributes?.slug
        ? `${previousBreadcrumb ? previousBreadcrumb.path : ''}/${pageInner.attributes.slug}`
        : null,
    })
  })

  return breadcrumbs
}
