import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { MenuItemFragment } from '@/src/services/graphql/api'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

import NavMenuContent from './NavMenuContent'
import NavMenuTrigger from './NavMenuTrigger'

type NavMenuItemProps = {
  menuItem: MenuItemFragment
}

const NavMenuItem = ({ menuItem }: NavMenuItemProps) => {
  const { getLinkProps } = useGetLinkProps()
  const { children, href } = getLinkProps(menuItem?.seeAllLink)

  return (
    <NavigationMenu.Item>
      <NavMenuTrigger label={menuItem?.label} />
      <NavMenuContent
        sections={menuItem?.sections}
        seeAllLinkChildren={children}
        seeAllLinkHref={href}
      />
    </NavigationMenu.Item>
  )
}

export default NavMenuItem
