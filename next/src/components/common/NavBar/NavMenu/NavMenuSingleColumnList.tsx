import { useTranslation } from 'next-i18next'

import MenuItemBranchCard from '@/src/components/common/Card/MenuItemBranchCard'
import MenuItemWorkshopCard from '@/src/components/common/Card/MenuItemWorkshopCard'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import { NavMenuSectionProps } from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import cn from '@/src/utils/cn'
import { formatMostRecentWorkshopDate } from '@/src/utils/formatMostRecentWorkshopDate'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

export type NavMenuColumnListProps = {
  links: NavMenuSectionProps['section']['links']
  className?: string
}

const NavMenuSingleColumnList = ({ links, className }: NavMenuColumnListProps) => {
  const { getLinkProps } = useGetLinkProps()
  const { t } = useTranslation()

  return (
    <ul className={cn('flex flex-col bg-background-primary', className)}>
      {links.map((link, index) => {
        const { children, href, target } = getLinkProps(link)

        const mostRecentWorkshopDate =
          formatMostRecentWorkshopDate(link?.workshop?.data?.attributes?.dates) ?? null

        // Need for now, since each element is padded differently - TODO: unify padding
        const commonClasses = cn({
          'border-b border-border-default': index !== links.length - 1,
          'pt-4': index !== 0,
          'pb-0': index === links.length - 1,
        })

        return link.workshop?.data?.attributes ? (
          <li key={link.id}>
            <MenuItemWorkshopCard
              title={children}
              subText={
                mostRecentWorkshopDate
                  ? t('navBar.workshopCard.messageMostRecentDate', { mostRecentWorkshopDate })
                  : ''
              }
              linkHref={href}
              className={cn('pb-4', commonClasses)}
            />
          </li>
        ) : link.branch?.data?.attributes ? (
          <li key={link.id}>
            <MenuItemBranchCard
              title={children}
              subText={link?.branch?.data?.attributes?.address ?? ''}
              linkHref={href}
              className={cn('pb-6', commonClasses)}
            />
          </li>
        ) : (
          <NavMenuLink
            key={link.id}
            href={href}
            target={target}
            className={cn('pb-5', { 'pb-0': index === links.length - 1 })}
          >
            {children}
          </NavMenuLink>
        )
      })}
    </ul>
  )
}

export default NavMenuSingleColumnList
