import { useTranslation } from 'next-i18next'

import MenuItemBranchCard from '@/src/components/common/Card/MenuItemBranchCard'
import MenuItemWorkshopCard from '@/src/components/common/Card/MenuItemWorkshopCard'
import { isBaIcon } from '@/src/components/common/Icon/Icon'
import { isOloIcon } from '@/src/components/common/Icon/OloIcon'
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
  const { getLinkProps } = useGetLinkProps()
  const { t } = useTranslation()

  return (
    <ul
      className={cn(
        'flex flex-col gap-5 bg-background-primary',
        { 'divide-y divide-border-default': hasDividers },
        className,
      )}
    >
      {links.map((link, index) => {
        const { children, href, target } = getLinkProps(link)

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
            linkHref={href}
            // TODO this logic should be extracted to a separate component
            iconName={
              isBaIcon(link.workshop.data.attributes.iconName) ||
              isOloIcon(link.workshop.data.attributes.iconName)
                ? link.workshop.data.attributes.iconName
                : 'live-help'
            }
            className={cn({ 'pt-5': index !== 0 })}
          />
        ) : link.branch?.data?.attributes ? (
          <MenuItemBranchCard
            key={link.id}
            title={children}
            subText={link?.branch?.data?.attributes?.address ?? ''}
            linkHref={href}
            className={cn({ 'pt-5': index !== 0 })}
          />
        ) : (
          <NavMenuLink key={link.id} href={href} target={target}>
            {children}
          </NavMenuLink>
        )
      })}
    </ul>
  )
}

export default NavMenuSingleColumnList
