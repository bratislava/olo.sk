import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu'
import React from 'react'

import NavMenuContent from '@/src/components/common/NavBar/NavMenu/NavMenuContent'
import NavMenuTrigger from '@/src/components/common/NavBar/NavMenu/NavMenuTrigger'
import { usePlaceholderMenuData } from '@/src/components/placeholder/usePlaceholderMenuData' //  <NavigationMenuList className="flex justify-center"> makes the content f-w

const NavMenuPlaceholder = () => {
  const { sections, seeAllLink } = usePlaceholderMenuData()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger />
          <div className="my-[40px] bg-waste-plastic">
            <NavMenuTrigger label="Odpad" />
            <NavMenuContent sections={sections} seeAllLink={seeAllLink} />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenuPlaceholder
