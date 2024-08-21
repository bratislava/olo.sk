import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useMemo } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import NavMenuItem from '@/src/components/common/NavBar/NavMenu/NavMenuItem'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
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

  const menus = useMemo(() => getParsedMenus(menu), [menu])

  useEffect(() => {
    setMenuValue('')
  }, [pathname, setMenuValue])

  return (
    <NavigationMenu.Root
      value={menuValue}
      onValueChange={setMenuValue}
      aria-label={t('navBar.aria.navBarAriaLabel')}
    >
      <div className={cn('border-b border-border-default bg-background-primary', className)}>
        <SectionContainer>
          <div className="flex items-center justify-between">
            <NavigationMenu.List className="flex first:-ml-4">
              {menus?.map((menuItem) => <NavMenuItem key={menuItem.id} menuItem={menuItem} />)}
            </NavigationMenu.List>
            {/* TODO: This may be potentially part of the NavigationMenu.List */}
            <Button
              href="/" // TODO: Provide valid path
              asLink
              icon={
                <Icon
                  name="lupa"
                  className="size-6 border border-dashed border-action-background-default"
                />
              }
              hasLinkIcon={false}
              aria-label={t('navBar.aria.searchButton')}
              variant="icon-wrapped"
              className="-mr-4 px-4 py-5"
            />
          </div>
        </SectionContainer>

        <NavigationMenu.Viewport
          // Together with onCLick in NavMenuContent, it closes the menu on click outside of container area
          onClick={() => setMenuValue('')}
          className="absolute z-[29] h-screen w-full"
        />
      </div>
    </NavigationMenu.Root>
  )
}

export default NavMenu
