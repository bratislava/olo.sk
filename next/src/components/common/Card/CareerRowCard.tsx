import { ReactNode } from 'react'

import CardBase from '@/src/components/common/Card/CardBase'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type CareerRowCardProps = {
  value: string
  label: string
  icon: ReactNode
  toolTipText?: string
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=4625-31845&m=dev
 */

const CareerRowCard = ({ value, label, toolTipText, icon, className }: CareerRowCardProps) => {
  return (
    <CardBase variant="unstyled" className={cn('flex w-1/2 flex-row gap-4 p-6', className)}>
      <div className="w-6">{icon}</div>
      <div className="flex grow flex-col gap-1 lg:gap-2">
        <Typography variant="p-default-black">{label}</Typography>
        <Typography variant="p-default">{value}</Typography>
      </div>
      {/* TODO Change later to Tooltip component */}
      {toolTipText ? (
        <div title={toolTipText}>
          <Icon name="pomoc" className="size-5 lg:size-6" />
        </div>
      ) : null}
    </CardBase>
  )
}

export default CareerRowCard
