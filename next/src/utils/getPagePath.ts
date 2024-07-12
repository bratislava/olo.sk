import { PageEntityFragment } from '@/src/services/graphql/api'

export const getPagePath = (page: PageEntityFragment) => {
  const current = page
  if (!current.attributes) {
    return null
  }

  const pathArray = [current.attributes.slug]

  let { parentPage } = current.attributes
  while (parentPage?.data?.attributes) {
    pathArray.push(parentPage.data.attributes.slug)
    parentPage = parentPage?.data?.attributes?.parentPage
  }

  return `/${pathArray.reverse().join('/')}`
}
