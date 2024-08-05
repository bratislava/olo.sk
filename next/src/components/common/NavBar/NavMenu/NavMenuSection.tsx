import { Fragment } from 'react'

import MenuItemArticleCard from '@/src/components/common/Card/MenuItemArticleCard'
import MenuItemBranchCard from '@/src/components/common/Card/MenuItemBranchCard'
import MenuItemWorkshopCard from '@/src/components/common/Card/MenuItemWorkshopCard'
import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import TwoColumnNavMenuSection from '@/src/components/common/NavBar/NavMenu/TwoColumnNavMenuSection'
import Typography from '@/src/components/common/Typography/Typography'
import { MenuLinkFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

export type NavMenuSectionProps = {
  section: ReturnType<typeof getParsedMenus>[number]['sections'][number]
  className?: string
}

const NavMenuSection = ({ section, className }: NavMenuSectionProps) => {
  const { getLinkProps } = useGetLinkProps()
  const { label, specialSectionType, links, multicolumnBehaviour } = section

  const renderSectionLink = (link: MenuLinkFragment, index: number) => {
    const linkProps = getLinkProps(link)
    const divider = index > 0 ? <NavBarDivider variant="horizontal" /> : null

    if (specialSectionType === 'latest_articles') {
      return (
        <div className="flex flex-col gap-4" key={link?.id}>
          {divider}
          <MenuItemArticleCard
            title={linkProps.children ?? ''}
            linkHref={linkProps.href}
            tagText="Category"
          />
        </div>
      )
    }

    if (link?.workshop?.data) {
      return (
        <Fragment key={link?.id}>
          {divider}
          <MenuItemWorkshopCard
            title={linkProps.children ?? ''}
            subText="Not included within Strapi data"
            linkHref={linkProps.href}
          />
        </Fragment>
      )
    }

    if (link?.branch?.data) {
      return (
        <Fragment key={link?.id}>
          {index > 0 ? <NavBarDivider variant="horizontal" className="py-2" /> : null}
          <MenuItemBranchCard
            title={linkProps.children ?? ''}
            subText={link?.branch?.data?.attributes?.address ?? ''}
            linkHref={linkProps.href}
          />
        </Fragment>
      )
    }

    return (
      <NavMenuLink key={link?.id} {...linkProps}>
        {linkProps.children}
      </NavMenuLink>
    )
  }

  return (
    <li className={cn('flex w-full flex-col gap-6', className)}>
      <div>
        <Typography variant="h6">{label}</Typography>
        <NavBarDivider variant="horizontal" className="pt-4" />
      </div>

      {multicolumnBehaviour === 'split_equally' ? (
        <TwoColumnNavMenuSection section={section} />
      ) : (
        <ul className="flex flex-col gap-4 bg-background-primary">
          {links.map((link, index) => renderSectionLink(link, index))}
        </ul>
      )}
    </li>
  )
}

export default NavMenuSection
