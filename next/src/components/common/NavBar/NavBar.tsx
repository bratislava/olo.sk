import * as React from 'react'

import DesktopNavBar from '@/src/components/common/NavBar/DesktopNavBar'
import MobileNavBar from '@/src/components/common/NavBar/MobileNavBar'

/*
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/NavBar/NavBar.tsx
 */

const NavBar = () => {
  return (
    <div>
      <DesktopNavBar className="max-lg:hidden" />
      <MobileNavBar className="lg:hidden" />
    </div>
  )
}

export default NavBar
