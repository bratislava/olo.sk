import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuViewport,
} from '@radix-ui/react-navigation-menu'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import * as React from 'react'
import { useEffect, useMemo } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import NavMenuItem from '@/src/components/common/NavBar/NavMenu/NavMenuItem'
import PlaceholderWrapper from '@/src/components/placeholder/PlaceholderWrapper'
import { useGeneralContext } from '@/src/providers/GeneralContextProvider'
import cn from '@/src/utils/cn'

type NavMenuProps = {
  className?: string
}

const NavMenu = ({ className }: NavMenuProps) => {
  const { menu } = useGeneralContext()
  const pathname = usePathname()
  const { menuValue, setMenuValue } = useNavMenuContext()
  const { t } = useTranslation()

  const menus = useMemo(() => {
    return getParsedMenus(menu)
  }, [menu])

  useEffect(() => {
    setMenuValue('')
  }, [pathname, setMenuValue])

  return (
    <NavigationMenu
      value={menuValue}
      onValueChange={setMenuValue}
      aria-label={t('navBar.aria.navBarAriaLabel')}
      className={cn('border-b border-border-default bg-background-primary', className)}
    >
      <div className="flex items-center justify-between px-24">
        <NavigationMenuList className="flex items-center">
          {['Odpad', 'Služby', 'Aktuality', 'KOLO', 'ZEVO', 'O nás'].map(
            // TODO: Temporary solution
            (menuItem, index: number) => (
              <NavMenuItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                menuItem={{
                  id: index.toString(),
                  label: menuItem,
                  sections: [],
                  seeAllLink: null,
                }}
              />
            ),
          )}
        </NavigationMenuList>

        <PlaceholderWrapper className="border-action-background-default">
          <Button
            href="/" // TODO: Provide valid path
            asLink
            hasLinkIcon={false}
            aria-label={t('navBar.aria.searchButton')}
            variant="icon-wrapped"
            className="px-4 py-5"
          >
            <Icon name="lupa" className="size-6" />
          </Button>
        </PlaceholderWrapper>
      </div>

      {/* Together with onCLick in NavMenuContent, it closes the menu on click outside of container area */}
      <NavigationMenuViewport
        onClick={() => setMenuValue('')}
        className="absolute z-[29] h-screen w-full"
      />
    </NavigationMenu>
  )
}

export default NavMenu
