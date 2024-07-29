import { useTranslation } from 'next-i18next'
import * as React from 'react'

import OloLogo from '@/src/assets/images/olo-logo.svg'
import Button from '@/src/components/common/Button/Button'
import cn from '@/src/utils/cn'

type NavBarLogoProps = {
  className?: string
}

const NavBarLogo = ({ className }: NavBarLogoProps) => {
  const { t } = useTranslation()

  return (
    <div className={cn('-m-1.5 shrink-0 rounded p-1.5', className)}>
      <Button
        variant="unstyled"
        href="/"
        asLink
        aria-label={t('navBar.aria.logoButton')}
        icon={<OloLogo />}
        hasLinkIcon={false}
      />
    </div>
  )
}

export default NavBarLogo
