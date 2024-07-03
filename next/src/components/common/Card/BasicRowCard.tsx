import Image from 'next/image'

import CardBase from '@/src/components/common/Card/CardBase'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type BasicRowCardProps = {
  value: string
  hasBottomBorder?: boolean
  className?: string
} & (
  | {
      variant: 'icon-label-value-vertical'
      label: string
      iconSrc: string
      toolTipText?: string
    }
  | {
      variant: 'label-value-horizontal' | 'label-value-vertical'
      label: string
      iconSrc?: never
      toolTipText?: never
    }
  | {
      variant: 'icon-value'
      label?: never
      iconSrc: string
      toolTipText?: never
    }
)

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-9981&m=dev
 */

const BasicRowCard = ({
  variant,
  hasBottomBorder = false,
  value,
  label,
  iconSrc,
  toolTipText,
  className,
}: BasicRowCardProps) => {
  return (
    <CardBase variant="unstyled" className={cn('bg-background-primary', className)}>
      <div
        className={cn('px-3 lg:px-5', {
          // eslint-disable-next-line sonarjs/no-duplicate-string
          'border-b border-border-default': hasBottomBorder && variant !== 'label-value-vertical',
        })}
      >
        <div
          className={cn('py-3 lg:py-4', {
            'border-b border-border-default': hasBottomBorder && variant === 'label-value-vertical',
          })}
        >
          {variant === 'icon-label-value-vertical' ? (
            <div className="flex gap-4">
              <div className="relative size-6 shrink-0">
                <Image src={iconSrc} alt="" fill className="object-contain" />
              </div>
              <div className="flex grow flex-col gap-1 lg:gap-2">
                <Typography variant="p-default-black">{label}</Typography>
                <Typography variant="p-default">{value}</Typography>
              </div>
              {/* TODO Consider using Tooltip component */}
              {toolTipText ? (
                <div title={toolTipText}>
                  <Icon name="pomoc" className="size-5 lg:size-6" />
                </div>
              ) : null}
            </div>
          ) : variant === 'icon-value' ? (
            <div className="flex gap-3 lg:gap-4">
              <div className="relative size-5 lg:size-6">
                <Image src={iconSrc} alt="" fill className="object-contain" />
              </div>
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
      </div>
    </CardBase>
  )
}

export default BasicRowCard
