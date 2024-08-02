import { PropsWithChildren } from 'react'

import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'
import { Enum_Componentmenumenusection_Multicolumnbehaviour } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'

type NavMenuContentCellProps = {
  colSpan: number
  multicolumnBehaviour?: Enum_Componentmenumenusection_Multicolumnbehaviour | null | undefined
  hasDivider?: boolean
  className?: string
}

const NavMenuContentCell = ({
  children,
  colSpan,
  hasDivider, // Assumption: First section doesn't have divider (hasDivider = false)
  className,
}: PropsWithChildren<NavMenuContentCellProps>) => {
  return (
    <div
      className={cn(
        'flex',
        {
          'col-span-1': colSpan === 1,
          'col-span-2': colSpan === 2,
        },
        className,
      )}
    >
      {hasDivider ? <NavBarDivider variant="vertical" className="px-8" /> : null}
      {children}
    </div>
  )
}

export default NavMenuContentCell
