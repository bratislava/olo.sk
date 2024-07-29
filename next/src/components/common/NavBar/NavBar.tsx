import * as React from 'react'

import DesktopNavBar from '@/src/components/common/NavBar/DesktopNavBar'
import MobileNavBar from '@/src/components/common/NavBar/MobileNavBar'
import cn from '@/src/utils/cn'

/*
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/NavBar/NavBar.tsx
 */

type NavBarProps = {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={cn(className)}>
      <DesktopNavBar className="max-lg:hidden" />
      <MobileNavBar className="lg:hidden" />
    </div>
  )
}

export default NavBar
