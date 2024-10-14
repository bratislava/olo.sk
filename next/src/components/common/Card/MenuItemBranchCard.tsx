import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import Icon from '@/src/components/common/Icon/Icon'
import NavMenuLink from '@/src/components/common/NavBar/NavMenu/NavMenuLink'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type MenuItemBranchCardProps = {
  title: string
  subText?: string
  linkHref: string
  className?: string
}

/**
 * Figma: https://www.figma.com/design/sCtADmxpqyNCJO2y1GpD6F/OLO-Web-Kate?node-id=406-3655&t=Jkul07XBrrsdNgzU-4
 */

const MenuItemBranchCard = ({
  title,
  subText: address,
  linkHref,
  className,
}: MenuItemBranchCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase variant="unstyled" className={cn(className)}>
      <div className="flex flex-col items-start gap-2">
        <Typography
          variant="h6"
          className_onlyWhenNecessary="text-wrap lg:group-hover/CardBase:underline"
        >
          {title}
        </Typography>

        <div className="flex flex-col gap-4">
          {address ? <Typography variant="p-default">{address}</Typography> : null}

          <NavMenuLink href={linkHref} stretched>
            <Button variant="black-link" asLink endIcon={<Icon name="sipka-doprava" />}>
              {t('navBar.branchCard.showDetails')}
            </Button>
          </NavMenuLink>
        </div>
      </div>
    </CardBase>
  )
}

export default MenuItemBranchCard
