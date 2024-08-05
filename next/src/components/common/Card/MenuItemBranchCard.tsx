import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
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

const MenuItemBranchCard = ({ title, subText, linkHref, className }: MenuItemBranchCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase className={cn('bg-background-primary', className)} variant="unstyled">
      <div className="flex flex-col items-start gap-2">
        <Typography variant="h6">{title}</Typography>

        <div className="flex flex-col gap-4">
          <Typography variant="p-default">{subText}</Typography>
          <Button variant="black-link" href={linkHref} hasLinkIcon asLink>
            <Typography>{t('navBar.branchCard.showDetails')}</Typography>
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default MenuItemBranchCard
