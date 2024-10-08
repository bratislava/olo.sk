import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import { NavMenuColumnListProps } from '@/src/components/common/NavBar/NavMenu/NavMenuSingleColumnList'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

const NavMenuTwoColumnList = ({ links, hasDividers, className }: NavMenuColumnListProps) => {
  const { getLinkProps } = useGetLinkProps()
  const middleIndex = Math.floor(links.length / 2)

  return (
    <ul
      className={cn(
        'w-full columns-2 gap-8',
        { 'divide-y divide-border-default': hasDividers },
        className,
      )}
    >
      {links.map((link, index) => {
        const linkProps = getLinkProps(link)

        return (
          <div
            key={link.id}
            className={cn({
              'border-r border-border-default pr-8': index <= middleIndex,
            })}
          >
            <NavMenuLink {...linkProps} className={cn('pb-5', { 'pb-0': index === middleIndex })} />
          </div>
        )
      })}
    </ul>
  )
}

export default NavMenuTwoColumnList
