import { useTranslation } from 'next-i18next'

import Badge from '@/src/components/common/Badge/Badge'
import Button from '@/src/components/common/Button/Button'
import CardBase, { CardBaseProps } from '@/src/components/common/Card/CardBase'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import { serviceCategoryMap } from '@/src/components/sections/headers/ServicePageHeader'
import { ServiceCategoryEntityFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type ServiceCardProps = {
  title: string
  linkHref: string
  className?: string
  serviceCategories: ServiceCategoryEntityFragment[]
} & Omit<CardBaseProps, 'variant'>

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=2094-19259&t=KpDlPbubYbVcw7ey-4&mode=dev
 */

const ServiceCard = ({
  title,
  linkHref,
  className,
  serviceCategories,
  hasWhiteSectionBackground,
}: ServiceCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteSectionBackground}
      className={className}
      title={title}
    >
      <div className="flex h-full flex-col gap-8 p-4 lg:gap-12 lg:p-6">
        <div className="flex h-full flex-col items-start justify-start gap-3 lg:gap-4">
          <Typography
            variant="h6"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          <div className="flex flex-wrap items-start justify-start gap-2">
            {serviceCategories
              .map((category) => {
                if (!category.attributes) return null

                return (
                  <Badge
                    label={category.attributes?.title}
                    variant={serviceCategoryMap[category.attributes.categoryColor]}
                  />
                )
              })
              // eslint-disable-next-line unicorn/no-array-callback-reference
              .filter(isDefined)}
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
