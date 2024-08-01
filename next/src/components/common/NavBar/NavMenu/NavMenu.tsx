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

  // TODO: Resolve the type
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
      <SectionContainer
        className={cn('border-b border-border-default bg-background-primary', className)}
      >
        <div className="flex items-center justify-between">
          <NavigationMenu.List className="flex items-center gap-4">
            {menus?.map((menuItem) => <NavMenuItem key={menuItem.id} menuItem={menuItem} />)}
          </NavigationMenu.List>

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
        <NavigationMenu.Viewport
          onClick={() => setMenuValue('')}
          className="absolute z-[29] h-screen w-full"
        />
      </SectionContainer>
    </NavigationMenu.Root>
  )
}

export default NavMenu
