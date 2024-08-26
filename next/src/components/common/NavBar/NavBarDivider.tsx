import cn from '@/src/utils/cn'

type NavMenuContentDividerProps = {
  variant: 'vertical' | 'horizontal'
  className?: string
}

// TODO: Will be refactored by a subsequent PR

const NavBarDivider = ({ variant, className }: NavMenuContentDividerProps) => (
  <div aria-hidden className={cn(className)}>
    <div
      className={cn(
        variant === 'vertical' ? 'h-full border-r' : 'w-full border-b',
        'border-border-default',
      )}
    />
  </div>
)

export default NavBarDivider
