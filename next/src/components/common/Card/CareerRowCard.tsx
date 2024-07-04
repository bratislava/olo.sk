import CardBase from '@/src/components/common/Card/CardBase'
import Icon from '@/src/components/common/Icon/Icon'
import OloIcon from '@/src/components/common/Icon/OloIcon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type CareerRowCardProps = {
  value: string
  label: string
  toolTipText?: string
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=4625-31845&m=dev
 */

const CareerRowCard = ({ value, label, toolTipText, className }: CareerRowCardProps) => {
  return (
    <CardBase variant="unstyled" className={cn('bg-background-primary', className)}>
      <div className="py-3 lg:py-4">
        <div className="flex gap-4">
          <OloIcon name="career-calendar" className="size-6" />
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
        </div>
      </div>
    </CardBase>
  )
}

export default CareerRowCard
