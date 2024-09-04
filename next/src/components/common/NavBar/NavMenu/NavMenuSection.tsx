import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuLatestArticlesList from '@/src/components/common/NavBar/NavMenu/NavMenuLatestArticlesList'
import NavMenuSingleColumnList from '@/src/components/common/NavBar/NavMenu/NavMenuSingleColumnList'
import NavMenuTwoColumnList from '@/src/components/common/NavBar/NavMenu/NavMenuTwoColumnList'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { useLatestArticles } from '@/src/utils/useLatestArticles'

export type NavMenuSectionProps = {
  section: ReturnType<typeof getParsedMenus>[number]['sections'][number]
  className?: string
}

const NavMenuSection = ({ section, className }: NavMenuSectionProps) => {
  const { label, specialSectionType, links, multicolumnBehaviour, colSpan, hasDividers } = section
  const { latestArticles } = useLatestArticles(3)

  const NavMenuSectionHeader = () => (
    <div>
      <Typography variant="h6">{label}</Typography>
      <NavBarDivider variant="horizontal" className="pt-4" />
    </div>
  )

  return (
    <div className={cn('flex w-full flex-col gap-6', className)}>
      <NavMenuSectionHeader />
      {specialSectionType === 'latest_articles' ? (
        <NavMenuLatestArticlesList links={latestArticles} hasDividers={hasDividers} />
      ) : multicolumnBehaviour === 'split_equally' && colSpan > 1 ? (
        <NavMenuTwoColumnList links={links} hasDividers={hasDividers} />
      ) : (
        <NavMenuSingleColumnList links={links} hasDividers={hasDividers} />
      )}
    </div>
  )
}

export default NavMenuSection
