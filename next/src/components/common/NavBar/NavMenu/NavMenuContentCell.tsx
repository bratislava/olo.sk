import { PropsWithChildren } from 'react'

import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import cn from '@/src/utils/cn'

type NavMenuContentCellProps = {
  colSpan: number
  hasVerticalDivider?: boolean
  className?: string
}

const NavMenuContentCell = ({
  children,
  colSpan,
  hasVerticalDivider,
  className,
}: PropsWithChildren<NavMenuContentCellProps>) => {
  return (
    <li
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
      {hasVerticalDivider ? <NavBarDivider variant="vertical" className="px-8" /> : null}
    </li>
  )
}

export default NavMenuContentCell
