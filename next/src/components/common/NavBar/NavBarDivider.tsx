import cn from '@/src/utils/cn'

type NavBarDividerProps = {
  variant: 'vertical' | 'horizontal'
  className?: string
  innerClassName?: string
}

const NavBarDivider = ({ variant, className, innerClassName }: NavBarDividerProps) => (
  <div aria-hidden className={cn(className)}>
    <div
      className={cn(
        variant === 'vertical' ? 'h-full border-r' : 'w-full border-b',
        'border-border-default',
        innerClassName,
      )}
    />
  </div>
)

export default NavBarDivider
