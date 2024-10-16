import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuLatestArticlesList from '@/src/components/common/NavBar/NavMenu/NavMenuLatestArticlesList'
import NavMenuSingleColumnList from '@/src/components/common/NavBar/NavMenu/NavMenuSingleColumnList'
import NavMenuTwoColumnList from '@/src/components/common/NavBar/NavMenu/NavMenuTwoColumnList'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { useTailwindBreakpointValue } from '@/src/utils/useTailwindBreakpointValue'

export type NavMenuSectionProps = {
  section: ReturnType<typeof getParsedMenus>[number]['sections'][number]
  className?: string
}

const NavMenuSection = ({ section, className }: NavMenuSectionProps) => {
  const { isDesktopBreakpoint } = useTailwindBreakpointValue()
  const { label, specialSectionType, links, multicolumnBehaviour, colSpan, hasDividers } = section

  return (
    <div className={cn('lg:flex lg:w-full lg:flex-col lg:gap-6', className)}>
      <Typography
        variant="h6"
        className_onlyWhenNecessary={cn('pb-4 lg:border-b lg:border-border-default', {
          'pb-5': specialSectionType === 'latest_articles' || label === 'Workshopy', // To enhance readability of these sections on small devices
        })}
      >
        {label}
      </Typography>
      {specialSectionType === 'latest_articles' ? (
        <NavMenuLatestArticlesList hasDividers={hasDividers} />
      ) : multicolumnBehaviour === 'split_equally' && colSpan > 1 && isDesktopBreakpoint ? (
        <NavMenuTwoColumnList links={links} />
      ) : (
        <NavMenuSingleColumnList links={links} hasDividers={hasDividers} />
      )}
    </div>
  )
}

export default NavMenuSection
