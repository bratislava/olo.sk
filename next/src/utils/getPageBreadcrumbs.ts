import { PageParentPagesFragment } from '@/src/services/graphql/api'

export type Breadcrumb = {
  title: string
  path: string | null
}

export const getPageBreadcrumbs = (page: PageParentPagesFragment): Breadcrumb[] => {
  const current = page
  if (!current) {
    return []
  }
  let parentPage = current?.attributes?.parentPage
  const breadcrumbs = [
    {
      title: current?.attributes?.title ?? '',
      path: current?.attributes?.slug ? `/${current.attributes.slug}` : null,
    },
  ]
  while (parentPage?.data?.attributes) {
    breadcrumbs.push({
      title: parentPage?.data?.attributes?.title ?? '',
      path: parentPage?.data?.attributes?.slug ? `/${parentPage.data.attributes.slug}` : null,
    })
    parentPage = parentPage?.data?.attributes?.parentPage
  }

  return breadcrumbs.reverse()
}
