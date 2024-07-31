import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { PropsWithChildren } from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import Link from '@/src/components/common/Link/Link'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import cn from '@/src/utils/cn'
import { LinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuLinkProps = {
  className?: string
} & LinkProps

const NavMenuLink = ({ className, ...rest }: PropsWithChildren<NavMenuLinkProps>) => {
  const { setMobileMenuOpen } = useNavMenuContext()

  return (
    <li className={cn('flex', className)}>
      <NavigationMenu.Link onClick={() => setMobileMenuOpen(false)} className="flex gap-4">
        <Icon name="sipka-doprava" />
        <Link variant="unstyled" {...rest} />
      </NavigationMenu.Link>
    </li>
  )
}

export default NavMenuLink
