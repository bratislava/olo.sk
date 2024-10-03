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
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
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
  const { href, children } = getLinkProps(contactsLink)

  const { menuValue, setMenuValue, isMobileMenuOpen, setMobileMenuOpen } = useNavMenuContext()

  const { height } = useWindowSize()
  const heightWithoutHeader = `calc(${height}px - 61px)` // 61px = 3.8125rem, including 1px for the border

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
      style={{ height: heightWithoutHeader }}
      className={cn('bg-background-primary lg:hidden', {
        'animate-fadeIn': isMobileMenuOpen,
        'animate-fadeOut': !isMobileMenuOpen,
      })}
    >
      <NavigationMenu.Root
        value={menuValue}
        onValueChange={setMenuValue}
        aria-label={t('navBar.aria.navBarAriaLabel')}
      >
        <SectionContainer classNameInner={cn('flex flex-col', { 'py-2': menuValue === '' })}>
          <NavigationMenu.List className="flex flex-col gap-2">
            <div
              // gap-0.5 to ensure that items' focus rings do not overlap
              className="flex flex-col gap-0.5"
            >
              {menus?.map((menuItem) => (
                <MobileNavMenuItem key={menuItem.id} menuItem={menuItem} />
              ))}
            </div>

            <>
              <Divider className="-mx-4 w-dvw" />

              {isMobileMenuOpen && contactsLink ? (
                <BasicRowCard
                  iconName="chevron-doprava"
                  variant="icon-label"
                  label={
                    <Link href={href}>
                      <div className="flex items-center gap-4">
                        <Icon name="telefon" className="size-5" />
                        <Typography variant="p-default-black">{children}</Typography>
                      </div>
                    </Link>
                  }
                />
              ) : null}
            </>
          </NavigationMenu.List>
        </SectionContainer>
      </NavigationMenu.Root>
    </div>
  )
}

export default MobileNavMenu
