import { useTranslation } from 'next-i18next'
import * as React from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import NavBarLogo from '@/src/components/common/NavBar/NavBarLogo'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { LinkFragment } from '@/src/services/graphql/api'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type MobileNavBarHeaderProps = {
  searchLink?: LinkFragment | null | undefined
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (value: boolean) => void
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1381-14948&t=Ugldx7yVPrGI2aTr-1
 */

const MobileNavBarHeader = ({
  searchLink,
  isMobileMenuOpen,
  setMobileMenuOpen,
}: MobileNavBarHeaderProps) => {
  const { t } = useTranslation()
  const { getLinkProps } = useGetLinkProps()

  // TODO: Refactor focus ring behaviour and sizes of search and hamburger buttons

  return (
    <SectionContainer
      // 3.8125rem = 61px, leaving one pixel for the border
      classNameInner="fixed z-30 bg-background-primary h-[61px] top-0 w-full py-4 border-b border-border-default"
    >
      <div className="flex items-center justify-between">
        <NavBarLogo className="text-action-background-default" />

        <div
          // 3.75rem = 60px
          className="-my-4 flex h-[3.75rem] gap-2"
        >
          {searchLink ? (
            <Button
              href={getLinkProps(searchLink).href}
              asLink
              icon={<Icon name="lupa" />}
              hasLinkIcon={false}
              aria-label={t('navBar.aria.searchButton')}
              variant="icon-wrapped"
              className="p-1"
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
            className="p-1"
          />
        </div>
      </div>
    </SectionContainer>
  )
}

export default MobileNavBarHeader
