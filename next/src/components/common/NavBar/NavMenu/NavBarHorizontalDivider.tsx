import * as React from 'react'

import cn from '@/src/utils/cn'

type NavBarHorizontalDividerProps = {
  className?: string
}

const NavBarHorizontalDivider = ({ className }: NavBarHorizontalDividerProps) => {
  return <div aria-hidden className={cn('border-l border-content-secondary', className)} />
}

export default NavBarHorizontalDivider
