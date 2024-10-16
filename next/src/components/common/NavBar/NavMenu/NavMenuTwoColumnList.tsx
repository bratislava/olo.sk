import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import { NavMenuColumnListProps } from '@/src/components/common/NavBar/NavMenu/NavMenuSingleColumnList'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

const NavMenuTwoColumnList = ({ links, className }: NavMenuColumnListProps) => {
  const { getLinkProps } = useGetLinkProps()
  const middleIndex = Math.floor(links.length / 2)

  return (
    <ul className={cn('w-full columns-2 gap-8', className)}>
      {links.map((link, index) => {
        return (
          <div
            key={link.id}
            className={cn({
              'border-r border-border-default pr-8': index <= middleIndex,
            })}
          >
            <NavMenuLink
              {...getLinkProps(link)}
              className={cn('pb-5', { 'pb-0': index === middleIndex })}
            />
          </div>
        )
      })}
    </ul>
  )
}

export default NavMenuTwoColumnList
