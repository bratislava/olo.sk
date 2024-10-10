import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useTranslation } from 'next-i18next'
import * as React from 'react'
import { useEventListener, useScrollLock, useWindowSize } from 'usehooks-ts'

import BasicRowCard from '@/src/components/common/Card/BasicRowCard'
import Icon from '@/src/components/common/Icon/Icon'
import Link from '@/src/components/common/Link/Link'
import MobileNavMenuItem from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenuItem'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import Divider from '@/src/components/common/Sidebar/Divider'
import Typography from '@/src/components/common/Typography/Typography'
import { LinkFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type MobileNavMenuProps = {
  menus: ReturnType<typeof getParsedMenus>
  contactsLink: LinkFragment | null | undefined
}

const MobileNavMenu = ({ menus, contactsLink }: MobileNavMenuProps) => {
  const { t } = useTranslation()
  const { getLinkProps } = useGetLinkProps()

  // TODO use directly in link item
  const { href, children } = getLinkProps(contactsLink)

  const { menuValue, setMenuValue, isMobileMenuOpen, setMobileMenuOpen } = useNavMenuContext()

  const { height } = useWindowSize()
  const heightWithoutHeader = `calc(${height}px - 60px)` // 60px = 3.75rem = mobileNavBar

  useEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMobileMenuOpen(false)
    }
  })

  useScrollLock({
    autoLock: isMobileMenuOpen,
    lockTarget: 'root',
  })

  return (
    <div
      className={cn(
        'fixed left-0 top-mobileNavBar flex w-screen flex-col overflow-y-scroll bg-background-primary lg:hidden',
        {
          'animate-fadeIn': isMobileMenuOpen,
          'animate-fadeOut': !isMobileMenuOpen,
        },
      )}
      style={{ height: heightWithoutHeader }}
    >
      <NavigationMenu.Root
        value={menuValue}
        onValueChange={setMenuValue}
        aria-label={t('navBar.aria.navBarAriaLabel')}
      >
        {/* Implemented slightly differently than in Figma, because NavigationMenu.List renders as <ul> and it must have direct children as <li>, visually it should be same with Figma */}
        <NavigationMenu.List className="flex flex-col gap-2 px-4 py-2">
          {menus?.map((menuItem) => {
            // TODO solve invisible focus ring
            return <MobileNavMenuItem key={menuItem.id} menuItem={menuItem} />
          })}

          {contactsLink ? (
            <>
              <li>
                <Divider />
              </li>
              <li>
                <NavigationMenu.Link asChild onClick={() => setMobileMenuOpen(false)}>
                  <BasicRowCard
                    iconName="chevron-doprava"
                    variant="icon-label"
                    label={
                      // TODO refactor
                      <Link href={href}>
                        <div className="flex items-center gap-4">
                          <Icon name="telefon" className="size-5" />
                          <Typography variant="p-default-black">{children}</Typography>
                        </div>
                      </Link>
                    }
                  />
                </NavigationMenu.Link>
              </li>
            </>
          ) : null}
        </NavigationMenu.List>

        {/* Viewport represents popup div with links that appears under menu button */}
        <NavigationMenu.Viewport
          className="fixed left-0 top-mobileNavBar w-screen overflow-y-scroll bg-background-primary"
          // TODO add animation, e.g. data-[state=closed]:animate-exitToRight data-[state=open]:animate-enterFromRight
          style={{ height: heightWithoutHeader }}
        />
      </NavigationMenu.Root>
    </div>
  )
}

export default MobileNavMenu
