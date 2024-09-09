import { PagePathsMap } from '@/src/services/navigation/parseTopLevelPages'

export type Breadcrumb = {
  title: string
  path: string | null
}

// Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/utils/pageUtils_Deprecated.ts#L93

export const getPageBreadcrumbs = (path: string, pagePathsMap: PagePathsMap): Breadcrumb[] => {
  const breadcrumbs: Breadcrumb[] = []

  const pathSegments = path.split('/') ?? []

  pathSegments.forEach((segment) => {
    const crumb = pagePathsMap[segment]
    if (crumb) breadcrumbs.push(crumb)
  })

  return breadcrumbs
}
