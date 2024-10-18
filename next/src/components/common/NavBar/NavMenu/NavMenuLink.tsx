import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { usePlausible } from 'next-plausible'
import { forwardRef } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import cn from '@/src/utils/cn'
import { LinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuLinkProps = {
  isCard?: boolean
  className?: string
} & NavigationMenu.NavigationMenuLinkProps &
  Omit<LinkProps, 'children'> // To be able to spread link props

/**
 * Based on: // https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing
 */

const NavMenuLink = forwardRef<HTMLAnchorElement, NavMenuLinkProps>(
  ({ href, children, target, isCard = false, plausibleProps, className }, ref) => {
    const { setMobileMenuOpen } = useNavMenuContext()
    const plausible = usePlausible()

    // TODO: This component needs to be refactored to function properly with Plausible

    return (
      <li className={cn('flex w-full', className)}>
        {isCard ? (
          <NavigationMenu.Link href={href} onClick={() => setMobileMenuOpen(false)}>
            {children}
          </NavigationMenu.Link>
        ) : (
          <NavigationMenu.Link asChild>
            <Button
              href={href}
              target={target}
              variant="unstyled"
              asLink
              startIcon={<Icon name="sipka-doprava" />}
              hasLinkIcon={false}
              className="flex gap-4"
              ref={ref}
              onPress={() => plausibleProps && plausible('Link click', { props: plausibleProps })}
            >
              {children}
            </Button>
          </NavigationMenu.Link>
        )}
      </li>
    )
  },
)

export default NavMenuLink
