/* eslint-disable sonarjs/no-duplicate-string */

import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import CardBase from '@/src/components/common/Card/CardBase'
import Pictogram from '@/src/components/common/Icon/Pictogram'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

export const wasteTypesMap = {
  paper: {
    pictogramName: 'paper',
    className: 'bg-waste-paper',
    pictogramClassName: 'text-background-primary',
  },
  plastic: {
    pictogramName: 'plastic',
    className: 'bg-waste-plastic',
    pictogramClassName: 'text-content-secondary',
  },
  glass: {
    pictogramName: 'glass',
    className: 'bg-waste-glass',
    pictogramClassName: 'text-background-primary',
  },
  civicAmenitySite: {
    pictogramName: 'civicAmenitySite',
    className: 'bg-waste-civicAmenitySite',
    pictogramClassName: 'text-content-secondary',
  },
  cookingOilsAndFats: {
    pictogramName: 'cookingOilsAndFats',
    className: 'bg-waste-cookingOilsAndFats',
    pictogramClassName: 'text-background-primary',
  },
  kitchen: {
    pictogramName: 'kitchenWaste',
    className: 'bg-waste-kitchen',
    pictogramClassName: 'text-background-primary',
  },
  organic: {
    pictogramName: 'organic',
    className: 'bg-waste-organic',
    pictogramClassName: 'text-background-primary',
  },
  mixed: {
    pictogramName: 'mixed',
    className: 'bg-waste-mixed',
    pictogramClassName: 'text-background-primary',
  },
  cemetery: {
    pictogramName: 'cemetery',
    className: 'bg-waste-cemetery',
    pictogramClassName: 'text-background-primary',
  },
  christmasTrees: {
    pictogramName: 'christmasTrees',
    className: 'bg-waste-christmasTrees',
    pictogramClassName: 'text-background-primary',
  },
} as const

export type WasteSortingCardProps = {
  title: string
  linkHref: string
  wasteType: keyof typeof wasteTypesMap
  hasWhiteBackground?: boolean
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=44-5836&mode=design&t=Eh99aEaL0mrnGsMz-4
 */

const WasteSortingCard = ({
  title,
  linkHref,
  wasteType,
  hasWhiteBackground = true,
  className,
}: WasteSortingCardProps) => {
  const { t } = useTranslation()

  return (
    <CardBase
      variant="background-white"
      hasWhiteSectionBackground={hasWhiteBackground}
      className={className}
      title={title}
    >
      <div
        className={cn(
          'flex aspect-[280/164] shrink-0 flex-col items-center justify-center rounded-t-lg lg:aspect-[280/204]',
          wasteTypesMap[wasteType]?.className,
        )}
      >
        <div className="flex size-[124px] items-center justify-center">
          {wasteType in wasteTypesMap ? (
            <Pictogram
              name={wasteTypesMap[wasteType].pictogramName}
              className={wasteTypesMap[wasteType].pictogramClassName}
            />
          ) : null}
        </div>
      </div>
      <div className="flex h-full flex-col justify-between gap-4 p-4 lg:gap-5 lg:px-5">
        <Typography
          variant="h5"
          className_onlyWhenNecessary={cn('line-clamp-3', {
            'group-hover/CardBase:underline': linkHref,
          })}
        >
          {title}
        </Typography>
        <Button variant="black-link" href={linkHref} stretched asLink>
          {t('common.findOutMore')}
        </Button>
      </div>
    </CardBase>
  )
}

export default WasteSortingCard
