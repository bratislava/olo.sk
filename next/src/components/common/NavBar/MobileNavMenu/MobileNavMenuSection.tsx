import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuLatestArticlesList from '@/src/components/common/NavBar/NavMenu/NavMenuLatestArticlesList'
import NavMenuSingleColumnList from '@/src/components/common/NavBar/NavMenu/NavMenuSingleColumnList'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type MobileNavMenuSectionProps = {
  section: ReturnType<typeof getParsedMenus>[number]['sections'][number]
  className?: string
}

const MobileNavMenuSection = ({ section, className }: MobileNavMenuSectionProps) => {
  const { label, links, specialSectionType, hasDividers } = section

  return (
    <div className={cn(className)}>
      <Typography
        variant="h6"
        className_onlyWhenNecessary={cn('pb-4', {
          'pb-5': specialSectionType === 'latest_articles' || label === 'Workshopy', // To enhance readability of these sections on small devices
        })}
      >
        {label}
      </Typography>

      {specialSectionType === 'latest_articles' ? (
        <NavMenuLatestArticlesList hasDividers={hasDividers} />
      ) : (
        <NavMenuSingleColumnList links={links} hasDividers={hasDividers} />
      )}
    </div>
  )
}

export default MobileNavMenuSection
