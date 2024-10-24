import * as NavigationMenu from '@radix-ui/react-navigation-menu'

import CardBase from '@/src/components/common/Card/CardBase'
import IconWrapper from '@/src/components/common/Icon/IconWrapper'
import Link from '@/src/components/common/Link/Link'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type MenuItemWorkshopCardProps = {
  title: string
  linkHref: string
  subText?: string
  iconName?: string
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1949-19741&m=dev
 */

const MenuItemWorkshopCard = ({
  title,
  subText: mostRecentWorkshopDate,
  linkHref,
  iconName = 'live-help',
  className,
}: MenuItemWorkshopCardProps) => {
  const { setMobileMenuOpen } = useNavMenuContext()

  return (
    <li className={cn(className)}>
      <CardBase variant="unstyled">
        <div className="flex items-start gap-4">
          <div
            // 1.25rem = 20px
            className="rounded-[1.25rem] bg-background-secondary p-4"
          >
            <IconWrapper name={iconName} className="size-6" />
          </div>

          <div
            className={cn('flex flex-col items-start gap-2 self-stretch', {
              'justify-center': !mostRecentWorkshopDate,
            })}
          >
            <NavigationMenu.Link asChild onClick={() => setMobileMenuOpen(false)}>
              <Link variant="underlineOnHover" href={linkHref} stretched>
                <Typography variant="h6">{title}</Typography>
              </Link>
            </NavigationMenu.Link>

            {mostRecentWorkshopDate ? (
              <Typography variant="p-small">{mostRecentWorkshopDate}</Typography>
            ) : null}
          </div>
        </div>
      </CardBase>
    </li>
  )
}

export default MenuItemWorkshopCard
