import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useTranslation } from 'next-i18next'
import * as React from 'react'

import MobileNavMenuItem from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenuItem'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import Divider from '@/src/components/common/Sidebar/Divider'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { LinkFragment } from '@/src/services/graphql/api'

type MobileNavMenuProps = {
  menus: ReturnType<typeof getParsedMenus>
  contactsLink: LinkFragment | null | undefined
}

const MobileNavMenu = ({ menus, contactsLink }: MobileNavMenuProps) => {
  const { t } = useTranslation()

  // TODO: Focus rings on menu triggers have to be fixed to display correctly
  // TODO: Scrollbar should not be present on the mobile menu

  return (
    <NavigationMenu.Root
      aria-label={t('navBar.aria.navBarAriaLabel')}
      // 3.8125rem = 61px, including 1px for the border
      className="fixed left-0 top-[3.8125rem] z-30 flex h-screen w-full flex-col"
    >
      <SectionContainer classNameInner="py-2 h-dvh">
        <NavigationMenu.List className="flex flex-col gap-2">
          <div>
            {menus?.map((menuItem) => <MobileNavMenuItem key={menuItem.id} menuItem={menuItem} />)}
          </div>

          <>
            <Divider className="-mx-4 w-dvw" />
            {contactsLink ? <MobileNavMenuItem variant="icon" menuItem={contactsLink} /> : null}
          </>
        </NavigationMenu.List>
      </SectionContainer>
    </NavigationMenu.Root>
  )
}

export default MobileNavMenu
