import { NavigationMenuContent } from '@radix-ui/react-navigation-menu'

import { MenuLinkFragment, MenuSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'

type NavMenuContentProps = {
  sections: MenuSectionFragment[] | any // TODO: Remove - temporary solution for BA pipeline to pass
  seeAllLink: MenuLinkFragment | any // TODO: Remove - temporary solution for BA pipeline to pass
  className?: string
}

const NavMenuContent = ({ sections, seeAllLink, className }: NavMenuContentProps) => {
  return (
    <NavigationMenuContent
      // To disable "onHover" behaviour, needs to be set also in NavMenuTrigger
      // https://github.com/radix-ui/primitives/issues/1630#issuecomment-1237106380
      onPointerMove={(event) => event.preventDefault()}
      onPointerLeave={(event) => event.preventDefault()}
      className="w-screen"
    >
      <div
        className={cn(
          'relative z-[29] flex flex-col items-start justify-start bg-background-primary px-28 shadow',
          className,
        )}
      >
        {/* TODO: Add sections */}
      </div>
    </NavigationMenuContent>
  )
}

export default NavMenuContent
