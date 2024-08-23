import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { PropsWithChildren } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import cn from '@/src/utils/cn'
import { LinkProps } from '@/src/utils/useGetLinkProps'

type NavMenuLinkProps = {
  asCardLink?: boolean
  className?: string
} & Omit<LinkProps, 'children'> // To be able to spread link properties as such: <NavMenuLink {...linkProps} />

/**
 * Based on: // https://www.radix-ui.com/docs/primitives/components/navigation-menu#with-client-side-routing
 */

const NavMenuLink = ({
  href,
  target,
  asCardLink,
  children,
  className,
}: PropsWithChildren<NavMenuLinkProps>) => {
  const { setMobileMenuOpen } = useNavMenuContext()

  return (
    <li className={cn('flex', className)}>
      <NavigationMenu.Link
        {...(asCardLink && { href })}
        onClick={() => setMobileMenuOpen(false)}
        className="w-full"
      >
        {asCardLink ? (
          children // MenuItemCard component
        ) : (
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
        )}
      </NavigationMenu.Link>
    </li>
  )
}

export default NavMenuLink
