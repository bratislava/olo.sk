import { useTranslation } from 'next-i18next'
import * as React from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import NavBarLogo from '@/src/components/common/NavBar/NavBarLogo'
import NavBarHorizontalDivider from '@/src/components/common/NavBar/NavMenu/NavBarHorizontalDivider'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import PlaceholderWrapper from '@/src/components/placeholder/PlaceholderWrapper'
import cn from '@/src/utils/cn'
import { useCurrentWeekParity } from '@/src/utils/useCurrentWeekParity'

type NavBarHeaderProps = {
  className?: string
}

const NavBarHeader = ({ className }: NavBarHeaderProps) => {
  const { currentWeekMessage } = useCurrentWeekParity()
  const { t } = useTranslation()

  return (
    <SectionContainer className={cn('bg-action-background-default py-3', className)}>
      <div className="flex items-center justify-between">
        <div className="flex gap-4 py-0.5">
          <NavBarLogo />
          <NavBarHorizontalDivider />
          <Typography variant="p-small">{currentWeekMessage}</Typography>
        </div>

        <PlaceholderWrapper>
          <Button
            href="/" // TODO: Provide valid path
            asLink
            hasLinkIcon={false}
            aria-label={t('navBar.contactsButton')}
            variant="icon-wrapped"
            className="flex items-center justify-center"
          >
            <Icon name="telefon" className="size-6" />
            {t('navBar.contactsButton')}
          </Button>
        </PlaceholderWrapper>
      </div>
    </SectionContainer>
  )
}

export default NavBarHeader
