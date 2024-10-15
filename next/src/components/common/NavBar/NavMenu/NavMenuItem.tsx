import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import CardBase from '@/src/components/common/Card/CardBase'
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
    <CardBase>
      {/* TODO: Potentially have a FocusRingWrapper component for cases where using CardBase isn't an appropriate solution */}
      <NavigationMenu.Item>
        <NavMenuTrigger label={menuItem.label} />
        <NavMenuContent
          sections={menuItem.sections}
          seeAllLinkProps={getLinkProps(menuItem.seeAllLink)}
        />
      </NavigationMenu.Item>
    </CardBase>
  )
}

export default NavMenuItem
