import { NavigationMenuItem } from '@radix-ui/react-navigation-menu'

import { MenuItemFragment } from '@/src/services/graphql/api'

import NavMenuContent from './NavMenuContent'
import NavMenuTrigger from './NavMenuTrigger'

type NavMenuItemProps = {
  menuItem: MenuItemFragment
}

const NavMenuItem = ({ menuItem }: NavMenuItemProps) => {
  return (
    <NavigationMenuItem>
      <NavMenuTrigger label={menuItem.label} />
      <NavMenuContent sections={menuItem.sections} seeAllLink={menuItem.seeAllLink} />
    </NavigationMenuItem>
  )
}

export default NavMenuItem
