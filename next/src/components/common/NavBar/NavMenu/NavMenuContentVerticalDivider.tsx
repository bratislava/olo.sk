import cn from '@/src/utils/cn'

type NavMenuContentVerticalDividerProps = {
  className?: string
}

const NavMenuContentVerticalDivider = ({ className }: NavMenuContentVerticalDividerProps) => {
  return <div aria-hidden className={cn('border-b border-border-default', className)} />
}

export default NavMenuContentVerticalDivider
