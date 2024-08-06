import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuContentCell from '@/src/components/common/NavBar/NavMenu/NavMenuContentCell'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import NavMenuSection from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import cn from '@/src/utils/cn'
import { LinkProps } from '@/src/utils/useGetLinkProps'
import { useNavMenuCells } from '@/src/utils/useSectionGrouper'

type NavMenuContentProps = {
  sections: ReturnType<typeof getParsedMenus>[number]['sections']
  seeAllLinkProps?: LinkProps
  className?: string
}

export type SectionType = ReturnType<typeof getParsedMenus>[number]['sections'][number]

const NavMenuContent = ({ sections, seeAllLinkProps, className }: NavMenuContentProps) => {
  const { navMenuCells } = useNavMenuCells(sections)

  return (
    <NavigationMenu.Content
      // To disable "onHover" behaviour, needs to be set also in NavMenuTrigger
      // https://github.com/radix-ui/primitives/issues/1630#issuecomment-1237106380
      onPointerMove={(event) => event.preventDefault()}
      onPointerLeave={(event) => event.preventDefault()}
      className="w-screen border-t border-border-default bg-background-primary"
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className="relative z-[29] flex flex-col items-start justify-start px-28 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions */}
        <ul className={cn('grid w-full py-8', className)}>
          {navMenuCells.map((cell, index: number) => {
            if (Array.isArray(cell)) {
              return (
                <NavMenuContentCell
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  colSpan={1}
                  hasDivider
                >
                  <div className="flex flex-col gap-y-12">
                    {cell.map((section) => {
                      return <NavMenuSection section={section} />
                    })}
                  </div>
                </NavMenuContentCell>
              )
            }

            return (
              <NavMenuContentCell key={cell.id} colSpan={cell.colSpan} hasDivider={cell.hasDivider}>
                <NavMenuSection section={cell} />
              </NavMenuContentCell>
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
