import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import { useNavMenuContext } from '@/src/components/common/NavBar/NavMenu/NavMenuContextProvider'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'
import { LinkProps } from '@/src/utils/useGetLinkProps'

type MenuItemBranchCardProps = {
  title: string
  subText?: string
  className?: string
} & Omit<LinkProps, 'children'>

/**
 * Figma: https://www.figma.com/design/sCtADmxpqyNCJO2y1GpD6F/OLO-Web-Kate?node-id=406-3655&t=Jkul07XBrrsdNgzU-4
 */

const MenuItemBranchCard = ({
  title,
  subText: address,
  href,
  target,
  plausibleProps,
  className,
}: MenuItemBranchCardProps) => {
  const { t } = useTranslation()
  const { setMobileMenuOpen } = useNavMenuContext()

  return (
    <li className={cn(className)}>
      <CardBase variant="unstyled">
        <div className="flex flex-col items-start gap-2">
          <Typography
            variant="h6"
            className_onlyWhenNecessary="text-wrap lg:group-hover/CardBase:underline"
          >
            {title}
          </Typography>

          <div className="flex flex-col gap-4">
            {address ? <Typography variant="p-default">{address}</Typography> : null}

            <NavigationMenu.Link asChild onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="black-link"
                href={href}
                asLink
                stretched
                target={target}
                plausibleProps={plausibleProps}
              >
                {t('navBar.branchCard.showDetails')}
              </Button>
            </NavigationMenu.Link>
          </div>
        </div>
      </CardBase>
    </li>
  )
}

export default MenuItemBranchCard
