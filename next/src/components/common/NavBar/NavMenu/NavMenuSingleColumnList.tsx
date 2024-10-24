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
  hasDividers?: boolean
  className?: string
}

const NavMenuSingleColumnList = ({ links, hasDividers, className }: NavMenuColumnListProps) => {
  const { t } = useTranslation()
  const { getLinkProps } = useGetLinkProps()

  return (
    <ul
      className={cn(
        'flex flex-col gap-4 bg-background-primary lg:gap-5',
        { 'divide-y divide-border-default': hasDividers },
        className,
      )}
    >
      {links.map((link, index) => {
        const { children } = getLinkProps(link)

        const mostRecentWorkshopDate =
          formatMostRecentWorkshopDate(link?.workshop?.data?.attributes?.dates) ?? null

        return link.workshop?.data?.attributes ? (
          <MenuItemWorkshopCard
            key={link.id}
            title={children}
            subText={
              mostRecentWorkshopDate
                ? t('navBar.workshopCard.messageMostRecentDate', { mostRecentWorkshopDate })
                : ''
            }
            iconName={link?.workshop?.data?.attributes?.iconName ?? 'live-help'}
            {...getLinkProps(link)}
            className={cn({ 'pt-4 lg:pt-5': index !== 0 })}
          />
        ) : link.branch?.data?.attributes ? (
          <MenuItemBranchCard
            key={link.id}
            title={children}
            subText={link?.branch?.data?.attributes?.address ?? ''}
            {...getLinkProps(link)}
            className={cn({ 'pt-4 lg:pt-5': index !== 0 })}
          />
        ) : (
          <NavMenuLink key={link.id} {...getLinkProps(link)}>
            {children}
          </NavMenuLink>
        )
      })}
    </ul>
  )
}

export default NavMenuSingleColumnList
