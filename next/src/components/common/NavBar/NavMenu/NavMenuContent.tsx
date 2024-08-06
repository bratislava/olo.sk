import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuContentDivider from '@/src/components/common/NavBar/NavMenu/NavMenuContentDivider'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import NavMenuSection from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import cn from '@/src/utils/cn'
import { LinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuContentProps = {
  sections: ReturnType<typeof getParsedMenus>[number]['sections']
  seeAllLinkProps?: LinkProps
  className?: string
}

const NavMenuContent = ({ sections, seeAllLinkProps, className }: NavMenuContentProps) => {
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
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions */}
        <ul
          className={cn('grid w-full grid-cols-3 gap-8 py-8', className)}
          // Together with onCLick in Viewport, it closes the menu on click outside of container area
          onClick={(event) => event.stopPropagation()}
        >
          {sections.map((section, index: number) => {
            return (
              <div className="flex gap-8" key={section?.id}>
                {index > 0 && <NavMenuContentDivider variant="horizontal" />}
                <NavMenuSection section={section} />
              </div>
            )
          })}
        </ul>
        {seeAllLinkProps?.children ? (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div
            className="flex w-full items-start justify-start border-t border-border-default py-6"
            // Together with onCLick in Viewport, it closes the menu on click outside of container area
            onClick={(event) => event.stopPropagation()}
          >
            <NavMenuLink {...seeAllLinkProps}>{seeAllLinkProps.children}</NavMenuLink>
          </div>
        ) : null}
      </div>
    </NavigationMenu.Content>
  )
}

export default NavMenuContent
