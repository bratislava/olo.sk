import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useMemo } from 'react'

import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuContentCell from '@/src/components/common/NavBar/NavMenu/NavMenuContentCell'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import NavMenuSection from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
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
        'relative z-[29] w-screen border-t border-border-default bg-background-primary shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]',
        className,
      )}
    >
      <SectionContainer>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions */}
        <ul
          // Together with onCLick in Viewport, it closes the menu on click outside of container area
          onClick={(event) => event.stopPropagation()}
          className="grid w-full grid-cols-3 gap-8 divide-x divide-border-default border-b border-border-default py-8"
        >
          {navMenuCells.map((cell, index) => {
            const hasLeftPadding = { 'pl-8': index !== 0 }
            if (Array.isArray(cell)) {
              return (
                <NavMenuContentCell
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  colSpan={1}
                  className={cn('grow flex-col gap-y-12', hasLeftPadding)}
                >
                  {cell.map((section) => (
                    <NavMenuSection key={section.id} section={section} />
                  ))}
                </NavMenuContentCell>
              )
            }

            return (
              <NavMenuContentCell
                key={cell.id}
                colSpan={cell.colSpan}
                className={cn(hasLeftPadding)}
              >
                <NavMenuSection section={cell} />
              </NavMenuContentCell>
            )
          })}
        </ul>

        {seeAllLinkProps?.children ? (
          // Together with onCLick in Viewport, it closes the menu on click outside of container area
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div
            onClick={(event) => event.stopPropagation()}
            className="flex w-full items-start justify-start py-6"
          >
            <NavMenuLink {...seeAllLinkProps} />
          </div>
        ) : null}
      </SectionContainer>
    </NavigationMenu.Content>
  )
}

export default NavMenuContent
