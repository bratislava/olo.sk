import { useTranslation } from 'next-i18next'
import { Fragment } from 'react'

import MenuItemBranchCard from '@/src/components/common/Card/MenuItemBranchCard'
import MenuItemWorkshopCard from '@/src/components/common/Card/MenuItemWorkshopCard'
import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import { NavMenuSectionProps } from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import cn from '@/src/utils/cn'
import { formatMostRecentWorkshopDate } from '@/src/utils/formatMostRecentWorkshopDate'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

export type NavMenuColumnListProps = {
  links: NavMenuSectionProps['section']['links']
  className?: string
}

// Todo: Simplify the styling once done with the layout - unify padding

const NavMenuSingleColumnList = ({ links, className }: NavMenuColumnListProps) => {
  const { getLinkProps } = useGetLinkProps()
  const { t } = useTranslation()

  return (
    <ul className={cn('flex flex-col bg-background-primary', className)}>
      {links.map((link, index) => {
        const { children, href, target } = getLinkProps(link)
        const isLast = index === links.length - 1

        const mostRecentWorkshopDate =
          formatMostRecentWorkshopDate(link?.workshop?.data?.attributes?.dates) ?? null

        return link.workshop?.data?.attributes ? (
          <Fragment key={link.id}>
            <MenuItemWorkshopCard
              title={children}
              subText={
                mostRecentWorkshopDate
                  ? t('navBar.workshopCard.messageMostRecentDate', { mostRecentWorkshopDate })
                  : ''
              }
              linkHref={href}
            />
            <NavBarDivider
              variant="horizontal"
              className={cn('py-4', {
                'pb-0': isLast,
              })}
              innerClassName={cn({ 'border-none': isLast })}
            />
          </Fragment>
        ) : link.branch?.data?.attributes ? (
          <Fragment key={link.id}>
            <MenuItemBranchCard
              title={children}
              subText={link?.branch?.data?.attributes?.address ?? ''}
              linkHref={href}
            />
            <NavBarDivider
              variant="horizontal"
              className={cn('py-6', {
                'pb-0': isLast,
              })}
              innerClassName={cn({ 'border-none': isLast })}
            />
          </Fragment>
        ) : (
          <NavMenuLink
            key={link.id}
            href={href}
            target={target}
            className={cn('pb-5', { 'pb-0': isLast })}
          >
            {children}
          </NavMenuLink>
        )
      })}
    </ul>
  )
}

export default NavMenuSingleColumnList
