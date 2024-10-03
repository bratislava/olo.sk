import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as React from 'react'

import MobileNavMenuContent from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenuContent'
import MobileNavMenuTrigger from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenuTrigger'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'

type MobileNavMenuItemProps = {
  menuItem: ReturnType<typeof getParsedMenus>[number]
}

const MobileNavMenuItem = ({ menuItem }: MobileNavMenuItemProps) => {
  return (
    <NavigationMenu.Item className="flex size-full flex-col">
      <MobileNavMenuTrigger label={menuItem.label} />
      <MobileNavMenuContent menuItem={menuItem} />
    </NavigationMenu.Item>
  )
}

export default MobileNavMenuItem
