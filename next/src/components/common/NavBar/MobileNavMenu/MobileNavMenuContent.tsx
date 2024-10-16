import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import CardBase from '@/src/components/common/Card/CardBase'
import Icon from '@/src/components/common/Icon/Icon'
import { getParsedMenus } from '@/src/components/common/NavBar/NavMenu/getParsedMenus'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import NavMenuSection from '@/src/components/common/NavBar/NavMenu/NavMenuSection'
import Divider from '@/src/components/common/Sidebar/Divider'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type MobileNavMenuContentProps = {
  menuItem: ReturnType<typeof getParsedMenus>[number]
}

const MobileNavMenuContent = ({ menuItem }: MobileNavMenuContentProps) => {
  const { getLinkProps } = useGetLinkProps()
  const { setMenuValue } = useNavMenuContext()

  const { label, sections, seeAllLink } = menuItem

  return (
    <NavigationMenu.Content
      // To disable "onHover" behaviour, needs to be set also in NavMenuTrigger
      // https://github.com/radix-ui/primitives/issues/1630#issuecomment-1237106380
      onPointerMove={(event) => event.preventDefault()}
      onPointerLeave={(event) => event.preventDefault()}
    >
      <ul>
        <li>
          {/* Our Button (implemented by react-aria-components) is not compatible with radix and causes press events problem on mobile */}
          {/* TODO: Potentially extract into a separate component */}
          <CardBase>
            {/* TODO: Potentially have a FocusRingWrapper component for cases where using CardBase isn't an appropriate solution */}
            <button
              type="button"
              onClick={() => setMenuValue('')}
              className="flex w-full items-center justify-center border-b border-border-default p-4"
            >
              <Typography variant="p-default-black">{label}</Typography>
              <Icon name="sipka-dolava" className="absolute left-4" aria-hidden />
            </button>
          </CardBase>
        </li>

        <ul className="flex size-full flex-col justify-center gap-6 divide-y divide-border-default px-4 py-6">
          {sections.map((section, index) => {
            return (
              <li key={section.id}>
                <NavMenuSection section={section} className={cn({ 'pt-6': index > 0 })} />
              </li>
            )
          })}
        </ul>

        {seeAllLink ? (
          <>
            <li>
              <Divider />
            </li>
            <NavMenuLink {...getLinkProps(seeAllLink)} className="px-4 py-6" />
          </>
        ) : null}
      </ul>
    </NavigationMenu.Content>
  )
}

export default MobileNavMenuContent
