/* eslint-disable sonarjs/no-duplicate-string */

'use client'

import { twMerge } from 'tailwind-merge'

import Button from '@/_components/common/Button/Button'
import CardBase from '@/_components/common/Card/CardBase'
import Pictogram from '@/_components/common/Icon/Pictogram'
import Typography from '@/_components/common/Typography/Typography'

const wasteTypesMap = {
  paper: {
    pictogramName: 'paper',
    className: 'bg-background-waste-paper',
    pictogramClassName: 'text-background-primary',
  },
  plastic: {
    pictogramName: 'plastic',
    className: 'bg-background-waste-plastic',
    pictogramClassName: 'text-content-secondary',
  },
  glass: {
    pictogramName: 'glass',
    className: 'bg-background-waste-glass',
    pictogramClassName: 'text-background-primary',
  },
  civicAmenitySite: {
    pictogramName: 'civicAmenitySite',
    className: 'bg-background-waste-civicAmenitySite',
    pictogramClassName: 'text-content-secondary',
  },
  cookingOilsAndFats: {
    pictogramName: 'cookingOilsAndFats',
    className: 'bg-background-waste-cookingOilsAndFats',
    pictogramClassName: 'text-background-primary',
  },
  kitchen: {
    pictogramName: 'kitchenWaste',
    className: 'bg-background-waste-kitchen',
    pictogramClassName: 'text-background-primary',
  },
  organic: {
    pictogramName: 'organic',
    className: 'bg-background-waste-organic',
    pictogramClassName: 'text-background-primary',
  },
  mixed: {
    pictogramName: 'mixed',
    className: 'bg-background-waste-mixed',
    pictogramClassName: 'text-background-primary',
  },
} as const

type WasteSortingCardProps = {
  title: string
  linkHref: string
  wasteType: keyof typeof wasteTypesMap
  className?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=44-5836&mode=design&t=Eh99aEaL0mrnGsMz-4
 */

const WasteSortingCard = ({ title, className, linkHref, wasteType }: WasteSortingCardProps) => {
  return (
    <CardBase variant="solid" className={className}>
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
        {/* TODO Change text to dynamic translation */}
        <Button variant="black-link" href={linkHref} stretched asLink>
          Zistiť viac
        </Button>
      </div>
    </CardBase>
  )
}

export default WasteSortingCard