import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { forwardRef } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import cn from '@/src/utils/cn'
import { LinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuLinkProps = {
  className?: string
} & NavigationMenu.NavigationMenuLinkProps &
  Omit<LinkProps, 'children'> // To be able to spread link props

/**
 * Based on: https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing
 */

const NavMenuLink = forwardRef<HTMLAnchorElement, NavMenuLinkProps>(
  ({ href, children, target, className }, ref) => {
    const { setMobileMenuOpen } = useNavMenuContext()

    return (
      <li className={cn('flex w-full', className)}>
        <NavigationMenu.Link asChild onClick={() => setMobileMenuOpen(false)}>
          {/* TODO: Should ideally be extracted as a separate variant */}
          <Button
            ref={ref}
            href={href}
            target={target}
            variant="unstyled"
            asLink
            startIcon={<Icon name="sipka-doprava" />}
            hasLinkIcon={false}
            className="flex gap-4"
          >
            {children}
          </Button>
        </NavigationMenu.Link>
      </li>
    )
  },
)

export default NavMenuLink
