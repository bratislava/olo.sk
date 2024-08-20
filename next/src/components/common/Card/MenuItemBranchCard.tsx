import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import NavMenuCardLink from '@/src/components/common/NavBar/NavMenu/NavMenuCardLink'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type MenuItemBranchCardProps = {
  title: string
  subText: string
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
    <NavMenuCardLink linkHref={linkHref} className={cn(className)}>
      <CardBase variant="unstyled">
        <div className="flex flex-col items-start gap-2">
          <Typography
            variant="h6"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          <div className="flex flex-col gap-4">
            <Typography variant="p-default">{address}</Typography>
            <Button variant="black-link" href={linkHref} asLink stretched>
              {t('navBar.branchCard.showDetails')}
            </Button>
          </div>
        </div>
      </CardBase>
    </NavMenuCardLink>
  )
}

export default MenuItemBranchCard
