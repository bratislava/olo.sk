import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import { NavMenuSectionProps } from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

const NavMenuTwoColumnSection = ({ section, className }: NavMenuSectionProps) => {
  const { getLinkProps } = useGetLinkProps()
  const middleItemIndex = Math.floor(section.links.length / 2)

  return (
    <ul className={cn('w-full columns-2 gap-8', className)}>
      {section.links.map((link, index) => {
        const linkProps = getLinkProps(link)

        return (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={cn('pb-5', {
              'pb-0': index === middleItemIndex,
              'border-r border-border-default pr-8': index <= middleItemIndex,
            })}
          >
            <NavMenuLink {...linkProps} />
          </li>
        )
      })}
    </ul>
  )
}

export default NavMenuTwoColumnSection
