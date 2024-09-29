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

const MobileNavBarHeader = ({
  searchLink,
  isMobileMenuOpen,
  setMobileMenuOpen,
}: MobileNavBarHeaderProps) => {
  const { t } = useTranslation()
  const { getLinkProps } = useGetLinkProps()

  return (
    <SectionContainer classNameInner="py-4 border-b border-border-default">
      <div className="flex size-full flex-row items-center justify-between">
        <NavBarLogo className="text-action-background-default" />

        <div className="flex h-full gap-6">
          {searchLink ? (
            <Button
              href={getLinkProps(searchLink).href}
              asLink
              icon={<Icon name="lupa" className="size-6" />}
              hasLinkIcon={false}
              aria-label={t('navBar.aria.searchButton')}
              variant="icon-wrapped"
              className="p-1" // TODO: The icon should occupy the entire height of the Header
            />
          ) : null}

          <Button
            asLink
            icon={<Icon name={isMobileMenuOpen ? 'krizik' : 'hamburger'} className="size-6" />}
            hasLinkIcon={false}
            onPress={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen
                ? t('mobileNavBar.aria.closeSearch')
                : t('mobileNavBar.aria.openSearch')
            }
            variant="icon-wrapped"
            className="p-1" // TODO: The icon should occupy the entire height of the Header
          />
        </div>
      </div>
    </SectionContainer>
  )
}

export default MobileNavBarHeader
