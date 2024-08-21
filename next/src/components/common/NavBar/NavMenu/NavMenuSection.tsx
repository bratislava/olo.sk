import { useTranslation } from 'next-i18next'
import { Fragment } from 'react'

import MenuItemBranchCard from '@/src/components/common/Card/MenuItemBranchCard'
import MenuItemWorkshopCard from '@/src/components/common/Card/MenuItemWorkshopCard'
import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuLatestArticlesSection from '@/src/components/common/NavBar/NavMenu/NavMenuLatestArticlesSection'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import NavMenuTwoColumnSection from '@/src/components/common/NavBar/NavMenu/NavMenuTwoColumnSection'
import Typography from '@/src/components/common/Typography/Typography'
import { MenuLinkFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

export type NavMenuSectionProps = {
  section: ReturnType<typeof getParsedMenus>[number]['sections'][number]
  className?: string
}

const NavMenuSection = ({ section, className }: NavMenuSectionProps) => {
  const { t } = useTranslation()
  const { getLinkProps, getAdditionalLinkProps } = useGetLinkProps()
  const { label, specialSectionType, links, multicolumnBehaviour, colSpan } = section

  const renderSectionLink = (link: MenuLinkFragment, index: number) => {
    const { children, href, target } = getLinkProps(link)
    const { subText } = getAdditionalLinkProps(link)
    const divider = index > 0 ? <NavBarDivider variant="horizontal" /> : null

    if (isDefined(link.workshop?.data)) {
      return (
        <Fragment key={link.id}>
          {divider}
          <MenuItemWorkshopCard
            title={children ?? ''}
            subText={subText ? t('navBar.workshopCard.messageMostRecentDate', { subText }) : ''}
            linkHref={href}
          />
        </Fragment>
      )
    }

    if (isDefined(link.branch?.data)) {
      return (
        <Fragment key={link.id}>
          {index > 0 ? <NavBarDivider variant="horizontal" className="py-2" /> : null}
          <MenuItemBranchCard title={children ?? ''} subText={subText ?? ''} linkHref={href} />
        </Fragment>
      )
    }

    return (
      <NavMenuLink key={link.id} href={href} target={target}>
        {children}
      </NavMenuLink>
    )
  }

  const renderSection = () => {
    if (specialSectionType === 'latest_articles' && label === 'Najnovšie články') {
      return <NavMenuLatestArticlesSection />
    }

    if (multicolumnBehaviour === 'split_equally' && colSpan > 1) {
      return <NavMenuTwoColumnSection section={section} />
    }

    return (
      <ul className="flex flex-col gap-4 bg-background-primary">
        {links.map((link, index) => renderSectionLink(link, index))}
      </ul>
    )
  }

  return (
    <li className={cn('flex w-full flex-col gap-6', className)}>
      <div>
        <Typography variant="h6">{label}</Typography>
        <NavBarDivider variant="horizontal" className="pt-4" />
      </div>
      {renderSection()}
    </li>
  )
}

export default NavMenuSection
