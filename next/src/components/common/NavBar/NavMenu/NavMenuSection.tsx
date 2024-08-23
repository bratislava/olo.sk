import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuLatestArticlesList from '@/src/components/common/NavBar/NavMenu/NavMenuLatestArticlesList'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import NavMenuTwoColumnList from '@/src/components/common/NavBar/NavMenu/NavMenuTwoColumnList'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

export type NavMenuSectionProps = {
  section: ReturnType<typeof getParsedMenus>[number]['sections'][number]
  className?: string
}

// TODO: #353 ensures that dividers are handled in a consistent fashion

const NavMenuSection = ({ section, className }: NavMenuSectionProps) => {
  const { label, specialSectionType, links, multicolumnBehaviour, colSpan } = section
  const { getLinkProps } = useGetLinkProps()

  return (
    <div className={cn('flex w-full flex-col gap-6', className)}>
      <div>
        <Typography variant="h6">{label}</Typography>
        <NavBarDivider variant="horizontal" className="pt-4" />
      </div>
      {specialSectionType === 'latest_articles' ? (
        <NavMenuLatestArticlesList />
      ) : multicolumnBehaviour === 'split_equally' && colSpan > 1 ? (
        <NavMenuTwoColumnList links={links} />
      ) : (
        <ul className="flex flex-col gap-4 bg-background-primary">
          {links.map((link, index) => {
            const linkProps = getLinkProps(link)

            return (
              <NavMenuLink
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                {...linkProps}
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default NavMenuSection
