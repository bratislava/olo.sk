import { MenuLinkFragment } from '@/src/services/graphql/api'

export const splitNavMenuSectionLinks = (links: MenuLinkFragment[]) => {
  const firstSix = links.slice(0, 6)
  const rest = links.slice(6)

  return [firstSix, rest]
}
