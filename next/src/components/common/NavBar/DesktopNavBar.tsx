import * as React from 'react'

import NavBarHeader from '@/src/components/common/NavBar/NavBarHeader/NavBarHeader'
import NavMenu from '@/src/components/common/NavBar/NavMenu/NavMenu'
import cn from '@/src/utils/cn'

type DesktopNavBarProps = {
  className?: string
}

const DesktopNavBar = ({ className }: DesktopNavBarProps) => {
  return (
    <div className={cn(className)}>
      <div className="fixed top-0 z-30 w-full">
        <NavBarHeader />
        <NavMenu />
      </div>
      <div className="w-full lg:h-28" aria-hidden />
    </div>
  )
}

export default DesktopNavBar
