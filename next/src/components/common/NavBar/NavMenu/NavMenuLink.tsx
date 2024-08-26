import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { PropsWithChildren } from 'react'

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
 * Based on: // https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing
 */

const NavMenuLink = ({
  href,
  target,
  asChild,
  children,
  className,
}: PropsWithChildren<NavMenuLinkProps>) => {
  const { setMobileMenuOpen } = useNavMenuContext()

  return (
    <li className={cn('flex w-full', className)}>
      <NavigationMenu.Link
        asChild={asChild}
        onClick={() => setMobileMenuOpen(false)}
        href={href}
        target={target}
        className="w-full"
      >
        {asChild ? (
          <Button
            variant="unstyled"
            asLink
            startIcon={<Icon name="sipka-doprava" />}
            hasLinkIcon={false}
            className="flex gap-4"
            target={target}
            href={href}
          >
            {children}
          </Button>
        ) : (
          children // Renders either workshop or branch card
        )}
      </NavigationMenu.Link>
    </li>
  )
}

export default NavMenuLink
