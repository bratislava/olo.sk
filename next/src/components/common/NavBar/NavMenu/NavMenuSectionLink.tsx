import { ReactNode } from 'react'

import MenuItemBranchCard from '@/src/components/common/Card/MenuItemBranchCard'
import MenuItemWorkshopCard from '@/src/components/common/Card/MenuItemWorkshopCard'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import { MenuLinkFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuSectionLinkProps = {
  link: MenuLinkFragment
  divider?: ReactNode
}

// TODO: #356 ensures that we will have only one NavMenuLink component

const NavMenuSectionLink = ({ link, divider }: NavMenuSectionLinkProps) => {
  const { getLinkProps } = useGetLinkProps()
  const { children, href, subText, target } = getLinkProps(link)

  return isDefined(link.workshop?.data) ? (
    <>
      {divider}
      <li key={link.id}>
        <MenuItemWorkshopCard title={children ?? ''} subText="" linkHref={href} />
      </li>
    </>
  ) : isDefined(link.branch?.data) ? (
    <>
      {divider}
      <li key={link.id}>
        <MenuItemBranchCard title={children ?? ''} subText={subText ?? ''} linkHref={href} />
      </li>
    </>
  ) : (
    <li key={link.id}>
      <NavMenuLink href={href} target={target}>
        {children}
      </NavMenuLink>
    </li>
  )
}

export default NavMenuSectionLink