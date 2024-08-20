import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ReactNode } from 'react'

import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import cn from '@/src/utils/cn'

type NavMenuCardLinkProps = {
  linkHref: string
  children: ReactNode
  className?: string
}

const NavMenuCardLink = ({ linkHref, children, className }: NavMenuCardLinkProps) => {
  const { setMobileMenuOpen } = useNavMenuContext()

  return (
    <li className={cn('flex', className)}>
      <NavigationMenu.Link
        href={linkHref}
        onClick={() => setMobileMenuOpen(false)}
        className="w-full"
      >
        {children}
      </NavigationMenu.Link>
    </li>
  )
}

export default NavMenuCardLink
