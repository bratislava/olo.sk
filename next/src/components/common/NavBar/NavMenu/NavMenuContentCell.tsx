import { PropsWithChildren } from 'react'

import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import cn from '@/src/utils/cn'

type NavMenuContentCellProps = {
  colSpan: number
  hasDivider?: boolean
  className?: string
}

const NavMenuContentCell = ({
  children,
  colSpan,
  hasDivider,
  className,
}: PropsWithChildren<NavMenuContentCellProps>) => {
  return (
    <div
      className={cn(
        'flex justify-start',
        {
          'col-span-1': colSpan === 1,
          'col-span-2': colSpan === 2,
        },
        className,
      )}
    >
      {children}
      {hasDivider ? <NavBarDivider variant="vertical" className="px-8" /> : null}
    </div>
  )
}

export default NavMenuContentCell
