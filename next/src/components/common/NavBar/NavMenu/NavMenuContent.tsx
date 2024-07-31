import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import NavMenuContentDivider from '@/src/components/common/NavBar/NavMenu/NavMenuContentDivider'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import NavMenuSection from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import { MenuSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'

type NavMenuContentProps = {
  sections: MenuSectionFragment[]
  seeAllLinkHref?: string
  seeAllLinkChildren?: string
  className?: string
}

const NavMenuContent = ({
  sections,
  seeAllLinkHref,
  seeAllLinkChildren,
  className,
}: NavMenuContentProps) => {
  // TODO: Parse/group menuCells into groupedSections

  return (
    <NavigationMenu.Content
      // To disable "onHover" behaviour, needs to be set also in NavMenuTrigger
      // https://github.com/radix-ui/primitives/issues/1630#issuecomment-1237106380
      onPointerMove={(event) => event.preventDefault()}
      onPointerLeave={(event) => event.preventDefault()}
      className="w-screen bg-background-primary"
    >
      <div className="relative z-[29] flex flex-col items-start justify-start px-28 shadow">
        <ul
          className={cn('grid w-full grid-cols-3 gap-8 py-8', className)}
          // Together with onCLick in Viewport, it closes the menu on click outside of container area
          onClick={(event) => event.stopPropagation()}
        >
          {sections?.map((section: MenuSectionFragment, index: number) => {
            return (
              <div className="flex gap-8" key={section?.id}>
                {index > 0 && <NavMenuContentDivider variant="horizontal" />}
                <NavMenuSection section={section} />
              </div>
            )
          })}
        </ul>
        <div className="flex w-full items-start justify-start py-6">
          <NavMenuLink id={seeAllLinkChildren as string} url={seeAllLinkHref}>
            {seeAllLinkChildren}
          </NavMenuLink>
        </div>
      </div>
    </NavigationMenu.Content>
  )
}

export default NavMenuContent
