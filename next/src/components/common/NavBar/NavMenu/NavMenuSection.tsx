import MenuItemArticleCard from '@/src/components/common/Card/MenuItemArticleCard'
import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuSectionProps = {
  section: ReturnType<typeof getParsedMenus>[number]['sections'][number]
  className?: string
}

const NavMenuSection = ({ section, className }: NavMenuSectionProps) => {
  const { getLinkProps } = useGetLinkProps()
  const { label, specialSectionType, links } = section

  return (
    <li className={cn('flex w-full flex-col gap-6', className)}>
      <div>
        <Typography variant="h6" className_onlyWhenNecessary="pb-4">
          {label}
        </Typography>
        <NavBarDivider variant="horizontal" />
      </div>

      {/* Menu links or Article cards */}
      <ul className="flex flex-col gap-5 bg-background-primary">
        {links.map((link, index: number) => {
          const linkProps = getLinkProps(link)

          return specialSectionType === 'latest_articles' ? (
            <div className="flex flex-col gap-4" key={link.id}>
              {index > 0 && <NavBarDivider variant="vertical" />}
              <MenuItemArticleCard
                title={linkProps.children ?? ''}
                linkHref={linkProps.href}
                // TODO: Temporary implementation
                tagText="Category"
              />
            </div>
          ) : (
            <NavMenuLink key={link?.id} {...linkProps}>
              {linkProps.children}
            </NavMenuLink>
          )
        })}
      </ul>
    </li>
  )
}

export default NavMenuSection
