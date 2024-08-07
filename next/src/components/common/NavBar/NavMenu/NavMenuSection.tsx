import MenuItemArticleCard from '@/src/components/common/Card/MenuItemArticleCard'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuContentDivider from '@/src/components/common/NavBar/NavMenu/NavMenuContentDivider'
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
  const { label, colSpan, multicolumnBehaviour, hasDivider, specialSectionType, links } = section

  return (
    <li
      className={cn(
        'flex w-full flex-col gap-6',
        {
          'col-span-1': colSpan === 1,
          'col-span-2': colSpan === 2,
          'w-[50vw]': multicolumnBehaviour === 'split_equally', // "fullWidth" is default
        },
        className,
      )}
    >
      <div>
        <div className="pb-4">
          <Typography variant="h6">{label}</Typography>
        </div>
        {hasDivider ? <NavMenuContentDivider variant="vertical" /> : null}
      </div>

      {/* Menu links or Article cards */}
      <ul className="flex flex-col gap-4 bg-background-primary">
        {links.map((link, index: number) => {
          const linkProps = getLinkProps(link)

          return specialSectionType === 'latest_articles' ? (
            <div className="flex flex-col gap-4" key={link.id}>
              {index > 0 && <NavMenuContentDivider variant="vertical" />}
              <MenuItemArticleCard
                // TODO: Temporary implementation
                title={linkProps.children ?? ''}
                linkHref={linkProps.href}
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
