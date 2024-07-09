import { useTranslation } from 'next-i18next'

import Badge from '@/src/components/common/Badge/Badge'
import Button from '@/src/components/common/Button/Button'
import CardBase, { CardBaseProps } from '@/src/components/common/Card/CardBase'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type ServiceCardProps = {
  title: string
  linkHref: string
  className?: string
} & Omit<CardBaseProps, 'variant'>

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=2094-19259&t=KpDlPbubYbVcw7ey-4&mode=dev
 */

const ServiceCard = ({ title, linkHref, className, ...rest }: ServiceCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={rest.hasWhiteSectionBackground}
      className={cn('p-4 lg:p-6', className)}
    >
      <div className="flex flex-col gap-8 lg:gap-12">
        <div className="flex flex-col items-start justify-start gap-3 lg:gap-4">
          <Typography
            variant="h6"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>

          <div className="flex flex-wrap items-start justify-start gap-2">
            <Badge variant="public" />
            <Badge variant="firms" />
            <Badge variant="institutions" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Button
            variant="black-link"
            asLink
            href={linkHref}
            stretched
            hasLinkIcon={false}
            className="text-size-button-default font-bold no-underline"
          >
            {t('common.findOutMore')}
          </Button>
          <div className="ml-auto flex size-10 items-center justify-center rounded-lg bg-background-secondary">
            <Icon name="sipka-doprava" className="size-6" />
          </div>
        </div>
      </div>
    </CardBase>
  )
}

export default ServiceCard
