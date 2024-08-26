import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

import NavMenuContent from './NavMenuContent'
import NavMenuTrigger from './NavMenuTrigger'

type NavMenuItemProps = {
  menuItem: ReturnType<typeof getParsedMenus>[number]
}

const NavMenuItem = ({ menuItem }: NavMenuItemProps) => {
  const { getLinkProps } = useGetLinkProps()

  return (
    <NavigationMenu.Item>
      <NavMenuTrigger label={menuItem.label} />
      <NavMenuContent
        sections={menuItem.sections}
        seeAllLinkProps={getLinkProps(menuItem.seeAllLink)}
      />
    </NavigationMenu.Item>
  )
}

export default NavMenuItem
