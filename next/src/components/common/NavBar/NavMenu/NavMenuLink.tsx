import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'

import Icon from '@/src/components/common/Icon/Icon'
import Link from '@/src/components/common/Link/Link'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import Typography from '@/src/components/common/Typography/Typography'
import { MenuLinkFragment } from '@/src/services/graphql/api'

type NavMenuLinkProps = MenuLinkFragment

const NavMenuLink = ({ label, url }: NavMenuLinkProps) => {
  const { setMobileMenuOpen } = useNavMenuContext()

  return (
    <li className="flex">
      <NavigationMenuLink onClick={() => setMobileMenuOpen(false)} className="flex gap-4">
        <Icon name="sipka-doprava" />
        <Link href={url as Object} variant="unstyled">
          <Typography variant="p-default">{label}</Typography>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default NavMenuLink
