import { PropsWithChildren } from 'react'

import cn from '@/src/utils/cn'

type NavMenuContentCellProps = {
  colSpan: number
  className?: string
}

const NavMenuContentCell = ({
  children,
  colSpan,
  className,
}: PropsWithChildren<NavMenuContentCellProps>) => {
  return (
    <li
      className={cn(
        'flex w-full justify-start',
        {
          'col-span-1': colSpan === 1,
          'col-span-2': colSpan === 2,
        },
        className,
      )}
    >
      {children}
    </li>
  )
}

export default NavMenuContentCell
