import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { PropsWithChildren } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import cn from '@/src/utils/cn'
import { LinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuLinkProps = {
  className?: string
} & Omit<LinkProps, 'children'>

const NavMenuLink = ({ className, ...rest }: PropsWithChildren<NavMenuLinkProps>) => {
  const { setMobileMenuOpen } = useNavMenuContext()

  return (
    <li className={cn('flex', className)}>
      <NavigationMenu.Link onClick={() => setMobileMenuOpen(false)} className="w-full">
        <Button
          variant="unstyled"
          asLink
          startIcon={<Icon name="sipka-doprava" />}
          hasLinkIcon={false}
          className="flex gap-4"
          {...rest}
        />
      </NavigationMenu.Link>
    </li>
  )
}

export default NavMenuLink
