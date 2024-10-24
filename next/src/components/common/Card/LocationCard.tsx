import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import OloIcon, { OloIconName } from '@/src/components/common/Icon/OloIcon'
import Typography from '@/src/components/common/Typography/Typography'

type LocationCardProps = {
  title: string
  address?: string | null | undefined
  linkHref: string
  iconName?: OloIconName
  hasWhiteBackground?: boolean
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=2094-18340&mode=dev
 */

const LocationCard = ({
  title,
  linkHref,
  address,
  iconName = 'place',
  hasWhiteBackground = true,
  className,
}: LocationCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
    >
      <div className="flex h-full flex-col justify-between gap-6 p-6">
        <div className="flex flex-col items-start gap-6">
          <div className="rounded-full bg-background-secondary p-4">
            <OloIcon
              name={iconName}
              className="text-action-background size-6 fill-action-background-default"
            />
          </div>
          <div className="flex flex-col gap-2 self-stretch lg:gap-3">
            <Typography variant="h5" className_onlyWhenNecessary="group-hover/CardBase:underline">
              {title}
            </Typography>
            {address ? <Typography variant="p-default">{address}</Typography> : null}
          </div>
        </div>
        <Button variant="category-outline" href={linkHref} asLink stretched fullWidth>
          {t('common.findOutMore')}
        </Button>
      </div>
    </CardBase>
  )
}

export default LocationCard
