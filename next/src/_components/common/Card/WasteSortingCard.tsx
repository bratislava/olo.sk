/* eslint-disable sonarjs/no-duplicate-string */

import { useTranslation } from 'next-i18next'
import { twMerge } from 'tailwind-merge'

import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import Pictogram from '@/_components/common/Icon/Pictogram'
import Typography from '@/_components/common/Typography/Typography'

const wasteTypesMap = {
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
} as const

type WasteSortingCardProps = {
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
    >
      <div
        className={twMerge(
          'flex aspect-[280/164] flex-col items-center justify-center rounded-t-lg lg:aspect-[280/204]',
          wasteTypesMap[wasteType]?.className,
        )}
      >
        <div className="flex size-[124px] items-center justify-center">
          <Pictogram
            name={wasteTypesMap[wasteType].pictogramName}
            className={wasteTypesMap[wasteType].pictogramClassName}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 lg:gap-5 lg:px-5">
        <Typography
          variant="h5"
          className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
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
