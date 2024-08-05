import cn from '@/src/utils/cn'

type NavMenuContentDividerProps = {
  variant: 'vertical' | 'horizontal'
  className?: string
}

const NavMenuContentDivider = ({ variant, className }: NavMenuContentDividerProps) => {
  return (
    <div
      aria-hidden
      className={cn(
        'border-border-default',
        {
          'border-r': variant === 'horizontal',
          'border-b': variant === 'vertical',
        },
        className,
      )}
    />
  )
}

export default NavMenuContentDivider
