import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import { NavMenuSectionProps } from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import { splitNavMenuSectionLinks } from '@/src/components/common/NavBar/NavMenu/splitNavMenuSectionLinks'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

const NavMenuSectionDual = ({ section, className }: NavMenuSectionProps) => {
  const { getLinkProps } = useGetLinkProps()
  const [firstGroup, secondGroup] = splitNavMenuSectionLinks(section.links)

  return (
    <div className={cn('flex w-full', className)}>
      {[firstGroup, secondGroup].map((group, index) => (
        <>
          {/* eslint-disable-next-line react/no-array-index-key */}
          <ul key={index} className="flex w-1/2 flex-col gap-5 bg-background-primary">
            {group.map((link) => {
              const linkProps = getLinkProps(link)

              return (
                <NavMenuLink key={link?.id} {...linkProps}>
                  {linkProps.children}
                </NavMenuLink>
              )
            })}
          </ul>
          {index === 0 ? <NavBarDivider variant="vertical" className="px-8" /> : null}
        </>
      ))}
    </div>
  )
}

export default NavMenuSectionDual
