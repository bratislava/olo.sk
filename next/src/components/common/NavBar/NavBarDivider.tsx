import cn from '@/src/utils/cn'

type NavMenuContentDividerProps = {
  variant: 'vertical' | 'horizontal'
  className?: string
}

const NavBarDivider = ({ variant, className }: NavMenuContentDividerProps) => (
  <div className={cn(className)}>
    <div
      className={cn(
        variant === 'vertical' ? 'h-full border-r' : 'w-full border-b',
        'border-border-default',
      )}
    />
  </div>
)

export default NavBarDivider
