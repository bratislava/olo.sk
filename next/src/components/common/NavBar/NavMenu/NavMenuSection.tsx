import { useTranslation } from 'next-i18next'

import MenuItemBranchCard from '@/src/components/common/Card/MenuItemBranchCard'
import MenuItemWorkshopCard from '@/src/components/common/Card/MenuItemWorkshopCard'
import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuLatestArticlesList from '@/src/components/common/NavBar/NavMenu/NavMenuLatestArticlesList'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import NavMenuTwoColumnList from '@/src/components/common/NavBar/NavMenu/NavMenuTwoColumnList'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { formatMostRecentWorkshopDate } from '@/src/utils/formatMostRecentWorkshopDate'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

export type NavMenuSectionProps = {
  section: ReturnType<typeof getParsedMenus>[number]['sections'][number]
  className?: string
}

// TODO: #353 ensures that dividers are handled in a consistent fashion

const NavMenuSection = ({ section, className }: NavMenuSectionProps) => {
  const { label, specialSectionType, links, multicolumnBehaviour, colSpan } = section
  const { getLinkProps } = useGetLinkProps()
  const { t } = useTranslation()

  return (
    <div className={cn('flex w-full flex-col gap-6', className)}>
      <div>
        <Typography variant="h6">{label}</Typography>
        <NavBarDivider variant="horizontal" className="pt-4" />
      </div>
      {specialSectionType === 'latest_articles' ? (
        <NavMenuLatestArticlesList />
      ) : multicolumnBehaviour === 'split_equally' && colSpan > 1 ? (
        <NavMenuTwoColumnList links={links} />
      ) : (
        <ul className="flex flex-col bg-background-primary">
          {/* eslint-disable-next-line sonarjs/cognitive-complexity */}
          {links.map((link, index) => {
            const { children, href, target } = getLinkProps(link)

            const mostRecentWorkshopDate =
              // @ts-ignore
              formatMostRecentWorkshopDate(link?.workshop?.data?.attributes?.dates) ?? null

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
                  className={cn('pb-4', {
                    'border-b border-border-default': index !== links.length - 1,
                    'pt-4': index !== 0,
                  })}
                />
              </li>
            ) : link.branch?.data?.attributes ? (
              <li key={link.id}>
                <MenuItemBranchCard
                  title={children}
                  subText={link?.branch?.data?.attributes?.address ?? ''}
                  linkHref={href}
                  className={cn('pb-6', {
                    'border-b border-border-default': index !== links.length - 1,
                    'pt-6': index !== 0,
                  })}
                />
              </li>
            ) : (
              <NavMenuLink
                key={link.id}
                asChild
                href={href}
                target={target}
                className={cn('pb-4', { 'pt-4': index !== 0 })}
              >
                {children}
              </NavMenuLink>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default NavMenuSection
