import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

export type BadgeProps = {
  label: string
  variant: 'public' | 'firms' | 'institutions'
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=4031-20882&t=WtDyPHEz6aYOukym-4
 */

const Badge = ({ label, variant, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded px-2 text-content-secondary',
        {
          'bg-background-tag-public': variant === 'public',
          'bg-background-tag-firms': variant === 'firms',
          'bg-background-tag-institutions': variant === 'institutions',
        },
        className,
      )}
    >
      <Typography variant="p-small">{label}</Typography>
    </div>
  )
}

export default Badge
