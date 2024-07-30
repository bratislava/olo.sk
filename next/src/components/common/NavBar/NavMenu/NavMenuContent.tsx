import { NavigationMenuContent } from '@radix-ui/react-navigation-menu'

import NavMenuContentDivider from '@/src/components/common/NavBar/NavMenu/NavMenuContentDivider'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import NavMenuSection from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import { MenuLinkFragment, MenuSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'

type NavMenuContentProps = {
  sections: MenuSectionFragment[] | any // TODO: Remove - temporary solution for BA pipeline to pass
  seeAllLink: MenuLinkFragment | any // TODO: Remove - temporary solution for BA pipeline to pass
  className?: string
}

const NavMenuContent = ({ sections, seeAllLink, className }: NavMenuContentProps) => {
  // TODO: Parse/group menuCells into groupedSections

  return (
    <NavigationMenuContent
      // To disable "onHover" behaviour, needs to be set also in NavMenuTrigger
      // https://github.com/radix-ui/primitives/issues/1630#issuecomment-1237106380
      onPointerMove={(event) => event.preventDefault()}
      onPointerLeave={(event) => event.preventDefault()}
      className="w-screen bg-background-primary"
    >
      <div
        className={cn(
          'relative z-[29] flex flex-col items-start justify-start px-28 shadow',
          className,
        )}
      >
        {/* Menu sections - TODO: Do not hard-code `grid-cols-3` */}
        <ul
          className="grid w-full grid-cols-3 gap-8 py-8"
          // Together with onCLick in Viewport, it closes the menu on click outside of container area
          onClick={(event) => event.stopPropagation()}
        >
          {sections?.map((section: any, index: number) => {
            return (
              <div className="flex gap-8">
                {/* eslint-disable-next-line react/no-array-index-key */}
                {index > 0 && <NavMenuContentDivider variant="horizontal" />}
                {/* eslint-disable-next-line react/no-array-index-key */}
                <NavMenuSection key={index} section={section} />
              </div>
            )
          })}
        </ul>
        {/* seeAllLink */}
        <div className="flex w-full items-start justify-start py-6">
          <NavMenuLink id={seeAllLink?.id} label={seeAllLink?.label} url={seeAllLink?.url} />
        </div>
      </div>
    </NavigationMenuContent>
  )
}

export default NavMenuContent
