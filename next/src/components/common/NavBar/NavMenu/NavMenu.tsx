import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useMemo } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import NavMenuItem from '@/src/components/common/NavBar/NavMenu/NavMenuItem'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import cn from '@/src/utils/cn'
import { generalQuery } from '@/src/utils/queryOptions'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuProps = {
  className?: string
}

const NavMenu = ({ className }: NavMenuProps) => {
  const pathname = usePathname()
  const { menuValue, setMenuValue } = useNavMenuContext()
  const { t, i18n } = useTranslation()
  const locale = i18n.language

  const { getLinkProps } = useGetLinkProps()

  const { data } = useQuery(generalQuery(locale))

  const menus = useMemo(() => getParsedMenus(data?.menu), [data?.menu])

  const { searchLink } = data?.menu?.data?.attributes?.menuHeader ?? {}

  useEffect(() => {
    setMenuValue('')
  }, [pathname, setMenuValue])

  return (
    <NavigationMenu.Root
      value={menuValue}
      onValueChange={setMenuValue}
      aria-label={t('navBar.aria.navBarAriaLabel')}
      className={cn('border-b border-border-default bg-background-primary', className)}
    >
      <SectionContainer>
        <NavigationMenu.List className="flex items-center justify-between first:-ml-4">
          <div className="flex">
            {menus?.map((menuItem) => <NavMenuItem key={menuItem.id} menuItem={menuItem} />)}
          </div>
          <Button
            href={getLinkProps(searchLink).href}
            asLink
            icon={<Icon name="lupa" className="size-6" />}
            hasLinkIcon={false}
            aria-label={t('navBar.aria.searchButton')}
            variant="icon-wrapped"
            className="-mr-4 px-4 py-5"
          />
        </NavigationMenu.List>
      </SectionContainer>

      <NavigationMenu.Viewport
        // Together with onCLick in NavMenuContent, it closes the menu on click outside of container area
        onClick={() => setMenuValue('')}
        className="absolute z-[29] h-screen w-full"
      />
    </NavigationMenu.Root>
  )
}

export default NavMenu
