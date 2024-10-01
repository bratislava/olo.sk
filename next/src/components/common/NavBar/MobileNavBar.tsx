import { useQuery } from '@tanstack/react-query'
import FocusTrap from 'focus-trap-react'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import * as React from 'react'
import { useEffect, useMemo } from 'react'

import MobileNavBarCurrentWeekMessage from '@/src/components/common/NavBar/MobileNavBarCurrentWeekMessage'
import MobileNavBarHeader from '@/src/components/common/NavBar/MobileNavBarHeader/MobileNavBarHeader'
import MobileNavMenu from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenu'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import cn from '@/src/utils/cn'
import { generalQuery } from '@/src/utils/queryOptions'
import { useCurrentWeekParity } from '@/src/utils/useCurrentWeekParity'

type MobileNavBarProps = {
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1381-16138&t=Ugldx7yVPrGI2aTr-1
 */

const MobileNavBar = ({ className }: MobileNavBarProps) => {
  const { i18n } = useTranslation()
  const pathname = usePathname()

  const { currentWeekMessage } = useCurrentWeekParity()
  const { isMobileMenuOpen, setMobileMenuOpen, isMobileMegaMenuOpen, setIsMobileMegaMenuOpen } =
    useNavMenuContext()

  const locale = i18n.language
  const { data } = useQuery(generalQuery(locale))
  const menus = useMemo(() => getParsedMenus(data?.menu), [data?.menu])

  const { searchLink } = data?.menu?.data?.attributes?.menuHeader ?? {}
  const { contactsLink } = data?.menu?.data?.attributes?.menuHeader ?? {}

  // TODO: Investigate the FocusTrap behaviour

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname, setMobileMenuOpen])

  return (
    <div className={cn(className)}>
      <FocusTrap active={isMobileMenuOpen}>
        <div>
          <MobileNavBarHeader
            searchLink={searchLink}
            isMobileMenuOpen={isMobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          {isMobileMenuOpen ? <MobileNavMenu menus={menus} contactsLink={contactsLink} /> : null}
        </div>
      </FocusTrap>

      {isMobileMenuOpen ? null : (
        <MobileNavBarCurrentWeekMessage currentWeekMessage={currentWeekMessage} />
      )}
    </div>
  )
}

export default MobileNavBar
