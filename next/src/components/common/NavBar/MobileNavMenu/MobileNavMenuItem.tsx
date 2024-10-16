import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as React from 'react'

import CardBase from '@/src/components/common/Card/CardBase'
import MobileNavMenuContent from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenuContent'
import MobileNavMenuTrigger from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenuTrigger'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'

type MobileNavMenuItemProps = {
  menuItem: ReturnType<typeof getParsedMenus>[number]
}

const MobileNavMenuItem = ({ menuItem }: MobileNavMenuItemProps) => {
  return (
    <CardBase>
      {/* TODO: Potentially have a FocusRingWrapper component for cases where using CardBase isn't an appropriate solution */}
      <NavigationMenu.Item>
        <MobileNavMenuTrigger label={menuItem.label} />
        <MobileNavMenuContent menuItem={menuItem} />
      </NavigationMenu.Item>
    </CardBase>
  )
}

export default MobileNavMenuItem
