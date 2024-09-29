import { ReactNode } from 'react'

import CardBase from '@/src/components/common/Card/CardBase'
import { IconName } from '@/src/components/common/Icon/Icon'
import IconWrapper from '@/src/components/common/Icon/IconWrapper'
import { OloIconName } from '@/src/components/common/Icon/OloIcon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

export type BasicRowCardProps = {
  value?: string
  label?: ReactNode
  className?: string
} & (
  | {
      value: string
      variant: 'label-value-horizontal' | 'label-value-vertical'
      label: string
      iconName?: never
    }
  | {
      value: string
      variant: 'icon-value'
      label?: never
      iconName: IconName | OloIconName
    }
  | {
      variant: 'icon-label'
      label: ReactNode
      value?: never
      iconName: IconName | OloIconName
    }
)

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-9981&m=dev
 */

const BasicRowCard = ({ variant, value, label, iconName, className }: BasicRowCardProps) => {
  return (
    <CardBase variant="unstyled" className={cn('bg-background-primary', className)}>
      <div className="py-3 lg:py-4">
        {variant === 'icon-value' ? (
          <div className="flex gap-3 lg:gap-4">
            <IconWrapper name={iconName} />

            <Typography variant="p-default">{value}</Typography>
          </div>
        ) : variant === 'label-value-horizontal' ? (
          <div className="flex gap-4 lg:gap-6 [&>*]:grow">
            <Typography variant="p-default-black">{label}</Typography>
            <Typography variant="p-default" className_onlyWhenNecessary="text-right">
              {value}
            </Typography>
          </div>
        ) : variant === 'label-value-vertical' ? (
          <div className="flex flex-col gap-1 lg:gap-2">
            <Typography variant="p-default-black">{label}</Typography>
            <Typography variant="p-default">{value}</Typography>
          </div>
        ) : variant === 'icon-label' ? (
          <div className="flex items-center justify-between">
            {label}
            <IconWrapper name={iconName} />
          </div>
        ) : null}
      </div>
    </CardBase>
  )
}

export default BasicRowCard
