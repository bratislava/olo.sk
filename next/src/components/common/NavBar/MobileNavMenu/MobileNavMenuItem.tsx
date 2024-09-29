import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as React from 'react'

import BasicRowCard from '@/src/components/common/Card/BasicRowCard'
import Icon from '@/src/components/common/Icon/Icon'
import MobileNavMenuContent from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenuContent'
import MobileNavMenuTrigger from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenuTrigger'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import Typography from '@/src/components/common/Typography/Typography'
import { LinkFragment } from '@/src/services/graphql/api'

type MobileNavMenuItemProps = {
  variant?: 'default' | 'icon'
  menuItem: ReturnType<typeof getParsedMenus>[number] | LinkFragment
}

// const { isMobileMegaMenuOpen } = useNavMenuContext()
// {isMobileMegaMenuOpen ? null : <MobileNavMenuTrigger label={menuItem.label} />}

const MobileNavMenuItem = ({ menuItem, variant = 'default' }: MobileNavMenuItemProps) => {
  return (
    <NavigationMenu.Item className="flex size-full flex-col">
      {variant === 'default' ? (
        <>
          {/* TODO: Can the types be rewritten in a way that does not require the use of assertions? */}
          <MobileNavMenuTrigger label={menuItem.label!} />
          <MobileNavMenuContent menuItem={menuItem as ReturnType<typeof getParsedMenus>[number]} />
        </>
      ) : (
        <NavigationMenu.Trigger>
          <BasicRowCard
            iconName="chevron-doprava"
            variant="icon-label"
            label={
              <div className="flex gap-4">
                <Icon name="telefon" className="size-6" />
                <Typography variant="p-default-black">{menuItem?.label ?? ''}</Typography>
              </div>
            }
          />
        </NavigationMenu.Trigger>
      )}
    </NavigationMenu.Item>
  )
}

export default MobileNavMenuItem
