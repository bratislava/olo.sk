import MenuItemArticleCard from '@/src/components/common/Card/MenuItemArticleCard'
import NavMenuContentDivider from '@/src/components/common/NavBar/NavMenu/NavMenuContentDivider'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import Typography from '@/src/components/common/Typography/Typography'
import { MenuSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'

type NavMenuSectionProps = {
  section: MenuSectionFragment
  className?: string
}

const NavMenuSection = ({ section, className }: NavMenuSectionProps) => {
  return (
    <li
      className={cn(
        'flex w-full flex-col gap-6',
        {
          'col-span-1': section?.colSpan === 1,
          'col-span-2': section?.colSpan === 2,
          'w-[50vw]': section?.multicolumnBehaviour === 'split_equally', // "fullWidth" is default
        },
        className,
      )}
    >
      <div>
        <div className="pb-4">
          <Typography variant="h6">{section.label}</Typography>
        </div>
        {section.hasDivider ? <NavMenuContentDivider variant="vertical" /> : null}
      </div>

      {/* Menu links or Article cards */}
      <ul className="flex flex-col gap-4 bg-background-primary">
        {section?.links?.map((link, index: number) =>
          section?.specialSectionType === 'latest_articles' ? (
            <div className="flex flex-col gap-4">
              {index > 0 && <NavMenuContentDivider variant="vertical" />}
              <MenuItemArticleCard
                // eslint-disable-next-line react/no-array-index-key
                key={index} // TODO: Temporary solution
                title={link?.label as string}
                linkHref={link?.url as string}
                tagText="Category"
              />
            </div>
          ) : (
            <NavMenuLink
              key={link?.id}
              id={link?.id as string}
              label={link?.label}
              url={link?.url}
            />
          ),
        )}
      </ul>
    </li>
  )
}

export default NavMenuSection
