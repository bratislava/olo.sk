import { useTranslation } from 'next-i18next'
import * as React from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import NavBarLogo from '@/src/components/common/NavBar/NavBarLogo'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { LinkFragment } from '@/src/services/graphql/api'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type MobileNavBarHeaderProps = {
  searchLink?: LinkFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1381-14948&t=Ugldx7yVPrGI2aTr-1
 */

const MobileNavBarHeader = ({ searchLink }: MobileNavBarHeaderProps) => {
  const { t } = useTranslation()
  const { getLinkProps } = useGetLinkProps()
  const { isMobileMenuOpen, setMobileMenuOpen } = useNavMenuContext()

  return (
    <SectionContainer classNameInner="py-4 bg-background-primary flex justify-between items-center h-mobileNavBar border-b border-border-default">
      <NavBarLogo className="text-action-background-default" />

      <div>
        {searchLink ? (
          <Button
            href={getLinkProps(searchLink).href}
            asLink
            icon={<Icon name="lupa" />}
            hasLinkIcon={false}
            aria-label={t('navBar.aria.searchButton')}
            variant="icon-wrapped"
          />
        ) : null}

        <Button
          asLink
          icon={<Icon name={isMobileMenuOpen ? 'krizik' : 'hamburger'} />}
          hasLinkIcon={false}
          onPress={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={
            isMobileMenuOpen
              ? t('mobileNavBar.aria.closeSearch')
              : t('mobileNavBar.aria.openSearch')
          }
          variant="icon-wrapped"
          className="-mr-2" // To align the icon with the right edge of the menu cards
        />
      </div>
    </SectionContainer>
  )
}

export default MobileNavBarHeader
