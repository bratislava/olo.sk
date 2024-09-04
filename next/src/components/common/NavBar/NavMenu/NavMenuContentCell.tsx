import { PropsWithChildren, ReactNode } from 'react'

import cn from '@/src/utils/cn'

type NavMenuContentCellProps = {
  colSpan: number
  verticalDivider?: ReactNode
  className?: string
}

const NavMenuContentCell = ({
  children,
  colSpan,
  verticalDivider,
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
      {verticalDivider || null}
    </li>
  )
}

export default NavMenuContentCell
