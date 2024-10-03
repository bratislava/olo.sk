import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import MobileNavMenuContentHeader from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenuContentHeader'
import MobileNavMenuSection from '@/src/components/common/NavBar/MobileNavMenu/MobileNavMenuSection'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import Divider from '@/src/components/common/Sidebar/Divider'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type MobileNavMenuContentProps = {
  menuItem: ReturnType<typeof getParsedMenus>[number]
}

const MobileNavMenuContent = ({ menuItem }: MobileNavMenuContentProps) => {
  const { getLinkProps } = useGetLinkProps()
  const { label, sections, seeAllLink } = menuItem

  return (
    <NavigationMenu.Content
      // To disable "onHover" behaviour, needs to be set also in NavMenuTrigger
      // https://github.com/radix-ui/primitives/issues/1630#issuecomment-1237106380
      onPointerMove={(event) => event.preventDefault()}
      onPointerLeave={(event) => event.preventDefault()}
      className="flex size-full flex-col items-center"
    >
      <div>
        <MobileNavMenuContentHeader label={label} />

        <div className="flex size-full flex-col justify-center gap-6 divide-y divide-border-default py-6">
          {sections.map((section, index) => {
            return (
              <MobileNavMenuSection
                key={section.id}
                section={section}
                className={cn({ 'pt-6': index > 0 })}
              />
            )
          })}
        </div>

        <Divider className="-mx-4 w-dvw" />
        <NavMenuLink {...getLinkProps(seeAllLink)} className="py-6" />
      </div>
    </NavigationMenu.Content>
  )
}

export default MobileNavMenuContent
