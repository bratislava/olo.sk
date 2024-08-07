import { PageEntityFragment } from '@/src/services/graphql/api'
import { PageMeili } from '@/src/services/meili/types'

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

export const getMeiliPagePath = (page: PageMeili) => {
  const current = page
  const pathArray = [current.slug]

  let { parentPage } = page
  while (parentPage) {
    pathArray.push(parentPage.slug)
    parentPage = parentPage.parentPage
  }

  return `/${pathArray.reverse().join('/')}`
}
