import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useMemo } from 'react'

import ClickableContainer from '@/src/components/common/NavBar/NavMenu/ClickableContainer'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuContentCell from '@/src/components/common/NavBar/NavMenu/NavMenuContentCell'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import NavMenuSection from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import cn from '@/src/utils/cn'
import { getNavMenuCells } from '@/src/utils/getNavMenuCells'
import { LinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuContentProps = {
  sections: ReturnType<typeof getParsedMenus>[number]['sections']
  seeAllLinkProps?: LinkProps
  className?: string
}

export type SectionType = ReturnType<typeof getParsedMenus>[number]['sections'][number]

const NavMenuContent = ({ sections, seeAllLinkProps, className }: NavMenuContentProps) => {
  const navMenuCells = useMemo(() => getNavMenuCells(sections), [sections])

  return (
    <NavigationMenu.Content
      // To disable "onHover" behaviour, needs to be set also in NavMenuTrigger
      // https://github.com/radix-ui/primitives/issues/1630#issuecomment-1237106380
      onPointerMove={(event) => event.preventDefault()}
      onPointerLeave={(event) => event.preventDefault()}
      className={cn(
        'w-screen border-t border-border-default bg-background-primary shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]',
        className,
      )}
    >
      <ClickableContainer
        // Together with onCLick in Viewport, it closes the menu on click outside of container area
        handleClick={(event) => event.stopPropagation()}
        className="relative z-[29] mx-auto flex max-w-screen-xl flex-col items-start justify-start px-4 lg:px-8"
      >
        <ul className="grid w-full grid-cols-3 py-8">
          {navMenuCells.map((cell, index) => {
            if (Array.isArray(cell)) {
              return (
                <NavMenuContentCell
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  colSpan={1}
                  hasDivider
                >
                  <div className="flex grow flex-col gap-y-12">
                    {cell.map((section) => (
                      <NavMenuSection section={section} />
                    ))}
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
          <ClickableContainer
            // Together with onCLick in Viewport, it closes the menu on click outside of container area
            handleClick={(event) => event.stopPropagation()}
            className="flex w-full items-start justify-start border-t border-border-default py-6"
          >
            <NavMenuLink {...seeAllLinkProps} />
          </ClickableContainer>
        ) : null}
      </ClickableContainer>
    </NavigationMenu.Content>
  )
}

export default NavMenuContent
