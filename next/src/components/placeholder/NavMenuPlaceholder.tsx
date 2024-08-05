import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu'
import React from 'react'

import NavMenuContent from '@/src/components/common/NavBar/NavMenu/NavMenuContent'
import NavMenuTrigger from '@/src/components/common/NavBar/NavMenu/NavMenuTrigger'

const NavMenuPlaceholder = () => {
  // const { sections, seeAllLink } = usePlaceholderMenuData()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger />
          <div className="my-[40px] bg-waste-plastic">
            <NavMenuTrigger label="Odpad" />
            {/* Types didn't match in dummy data */}
            <NavMenuContent sections={[]} seeAllLinkProps={undefined} />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenuPlaceholder
