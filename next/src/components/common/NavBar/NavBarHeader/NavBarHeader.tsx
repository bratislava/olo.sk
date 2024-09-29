import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'next-i18next'
import * as React from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import NavBarLogo from '@/src/components/common/NavBar/NavBarLogo'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { generalQuery } from '@/src/utils/queryOptions'
import { useCurrentWeekParity } from '@/src/utils/useCurrentWeekParity'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type NavBarHeaderProps = {
  className?: string
}

const NavBarHeader = ({ className }: NavBarHeaderProps) => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language

  const { currentWeekMessage } = useCurrentWeekParity()
  const { getLinkProps } = useGetLinkProps()
  const { data } = useQuery(generalQuery(locale))

  const { contactsLink } = data?.menu?.data?.attributes?.menuHeader ?? {}
  const { children, href } = getLinkProps(contactsLink)

  return (
    <div className={cn('bg-action-background-default py-3', className)}>
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 lg:px-8">
        <div className="flex h-full gap-4 py-0.5">
          <NavBarLogo />
          <div className="border-r border-content-secondary" />
          <Typography variant="p-small">{currentWeekMessage}</Typography>
        </div>

        <Button
          href={href}
          asLink
          hasLinkIcon={false}
          aria-label={t('navBar.contactsButton')}
          variant="icon-wrapped"
          className="flex items-center justify-center"
        >
          <Icon name="telefon" className="size-6" />
          {children}
        </Button>
      </div>
    </div>
  )
}

export default NavBarHeader
