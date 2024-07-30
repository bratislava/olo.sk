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
    <div
      className={cn(
        'flex w-full flex-col gap-12',
        {
          'col-span-1': colSpan === 1,
          'col-span-2': colSpan === 2,
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

export default NavMenuContentCell
