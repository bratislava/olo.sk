import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import Button from '@/src/components/common/Button/Button'
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
      {/* TODO wrap in <ul> */}

      <Button
        variant="unstyled"
        onPress={() => setMenuValue('')}
        className="flex w-full items-center justify-center border-b border-border-default p-4"
      >
        <Typography variant="p-default-black">{label}</Typography>
        <Icon name="sipka-dolava" className="absolute left-4" />
      </Button>

      <div className="flex size-full flex-col justify-center gap-6 divide-y divide-border-default px-4 py-6">
        {sections.map((section, index) => {
          return (
            <NavMenuSection
              key={section.id}
              section={section}
              className={cn({ 'pt-6': index > 0 })}
            />
          )
        })}
      </div>

      {seeAllLink ? (
        <>
          <Divider />
          <NavMenuLink {...getLinkProps(seeAllLink)} className="px-4 py-6" />
        </>
      ) : null}
    </NavigationMenu.Content>
  )
}

export default MobileNavMenuContent
