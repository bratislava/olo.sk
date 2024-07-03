import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type BadgeProps = {
  variant: 'public' | 'firms' | 'institutions'
  text: string
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=4031-20882&t=WtDyPHEz6aYOukym-4
 */

const Badge = ({ variant, text, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        'text-stone-800 flex h-5 items-center justify-center rounded-[0.25rem] px-2',
        {
          'bg-background-secondary': variant === 'public',
          'bg-background-tertiary': variant === 'firms',
          'bg-background-primaryInverted': variant === 'institutions',
        },
        className,
      )}
    >
      <Typography variant="p-small"> {text}</Typography>
    </div>
  )
}

export default Badge
