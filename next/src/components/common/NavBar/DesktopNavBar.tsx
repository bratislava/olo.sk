import * as React from 'react'

import NavBarHeader from '@/src/components/common/NavBar/NavBarHeader/NavBarHeader'
import NavMenu from '@/src/components/common/NavBar/NavMenu/NavMenu'
import cn from '@/src/utils/cn'

type DesktopNavBarProps = {
  className?: string
}

const DesktopNavBar = ({ className }: DesktopNavBarProps) => {
  return (
    <>
      <div className={cn('fixed top-0 z-30 w-full', className)}>
        <div className="relative max-lg:hidden">
          <NavBarHeader />
          <NavMenu />
        </div>
      </div>
      <div className="hidden h-[8.563rem] lg:block lg:h-28" aria-hidden />
    </>
  )
}

export default DesktopNavBar
