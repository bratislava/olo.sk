import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import { NavMenuSectionProps } from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuTwoColumnListProps = {
  links: NavMenuSectionProps['section']['links']
  className?: string
}

const NavMenuTwoColumnList = ({ links, className }: NavMenuTwoColumnListProps) => {
  const { getLinkProps } = useGetLinkProps()
  const middleItemIndex = Math.floor(links.length / 2)

  return (
    <ul className={cn('w-full columns-2 gap-8', className)}>
      {links.map((link, index) => {
        const linkProps = getLinkProps(link)

        return (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={cn('pb-5', {
              'pb-0': index === middleItemIndex,
              'border-r border-border-default pr-8': index <= middleItemIndex,
            })}
          >
            <NavMenuLink {...linkProps} />
          </div>
        )
      })}
    </ul>
  )
}

export default NavMenuTwoColumnList
