import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuLatestArticlesSection from '@/src/components/common/NavBar/NavMenu/NavMenuLatestArticlesSection'
import NavMenuSectionLink from '@/src/components/common/NavBar/NavMenu/NavMenuSectionLink'
import NavMenuTwoColumnSection from '@/src/components/common/NavBar/NavMenu/NavMenuTwoColumnSection'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'

export type NavMenuSectionProps = {
  section: ReturnType<typeof getParsedMenus>[number]['sections'][number]
  className?: string
}

// TODO: #353 ensures that dividers are handled in a consistent fashion

const NavMenuSection = ({ section, className }: NavMenuSectionProps) => {
  const { label, specialSectionType, links, multicolumnBehaviour, colSpan } = section
  
  return (
    <div className={cn('flex w-full flex-col gap-6', className)}>
      <div>
        <Typography variant="h6">{label}</Typography>
        <NavBarDivider variant="horizontal" className="pt-4" />
      </div>
      {specialSectionType === 'latest_articles' ? (
        <NavMenuLatestArticlesSection />
      ) : multicolumnBehaviour === 'split_equally' && colSpan > 1 ? (
        <NavMenuTwoColumnSection section={section} />
      ) : (
        <ul className="flex flex-col gap-4 bg-background-primary">
          {links.map((link, index) => (
            <NavMenuSectionLink
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              link={link}
              divider={
                index > 0 ? (
                  <NavBarDivider
                    variant="horizontal"
                    className={cn({ 'py-2': isDefined(link.branch?.data) })}
                  />
                ) : null
              }
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavMenuSection
