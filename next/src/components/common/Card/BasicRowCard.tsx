import { ReactNode } from 'react'

import CardBase from '@/src/components/common/Card/CardBase'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

export type BasicRowCardProps = {
  value: string
  className?: string
} & (
  | {
      variant: 'label-value-horizontal' | 'label-value-vertical'
      label: string
      icon?: never
    }
  | {
      variant: 'icon-value'
      label?: never
      icon: ReactNode
    }
)

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-9981&m=dev
 */

const BasicRowCard = ({ variant, value, label, icon, className }: BasicRowCardProps) => {
  return (
    <CardBase variant="unstyled" className={cn('bg-background-primary', className)}>
      <div className="py-3 lg:py-4">
        {variant === 'icon-value' ? (
          <div className="flex gap-3 lg:gap-4">
            {/* Icon will be passed from parent, but we want to ensure the correct size */}
            <div className="size-5 lg:size-6 [&>*]:w-full">{icon}</div>
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
        ) : null}
      </div>
    </CardBase>
  )
}

export default BasicRowCard
