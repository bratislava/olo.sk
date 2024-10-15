import { PageEntityChildPagesFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

const pagePathsMap: { [key: string]: { title: string; path: string } | undefined } = {}

export type PagePathsMap = typeof pagePathsMap

// Inspired by Marianum - parsed navMap from Navigation Strapi Plugin
// https://github.com/bratislava/marianum.sk/blob/02b806f8d16fe435100b60b17d6d70107de744fb/next/utils/parseNavigation.ts

export const parseTopLevelPages = (
  pages: PageEntityChildPagesFragment[],
  parentPath: string = '',
) => {
  pages.forEach((page) => {
    const slug = page.attributes?.slug
    const title = page.attributes?.title

    if (slug && title) {
      pagePathsMap[slug] = { title, path: `${parentPath}/${slug}` }
    }
    // eslint-disable-next-line unicorn/no-array-callback-reference
    const childPages = page.attributes?.childPages?.data.filter(isDefined)

    if (childPages?.length) {
      parseTopLevelPages(childPages, `${parentPath}/${slug}`)
    }
  })

  return { pagePathsMap }
}
