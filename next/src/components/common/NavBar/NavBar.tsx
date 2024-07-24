import * as React from 'react'
import { useRef } from 'react'
import { useResizeObserver } from 'usehooks-ts'

import Brand from '@/src/components/common/Brand/Brand'
import Icon from '@/src/components/common/Icon/Icon'
import AlertBanner from '@/src/components/common/NavBar/AlertBanner'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { useCurrentWeekParity } from '@/src/utils/useCurrentWeekParity'

import NavBarHeader from './NavBarHeader/NavBarHeader'
import NavMenu from './NavMenu/NavMenu'

/*
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/NavBar/NavBar.tsx
 */

const NavBar = () => {
  const alertRef = useRef<HTMLDivElement>(null)

  const { height = 0 } = useResizeObserver({
    ref: alertRef,
  })

  const { currentWeekMessage } = useCurrentWeekParity()

  return (
    <>
      {/* Screen: desktop */}
      <div className="fixed top-0 z-30 w-full border-b border-border-default bg-white">
        <AlertBanner ref={alertRef} />
        <div className="relative w-full max-lg:hidden">
          <NavBarHeader />
          <NavMenu />
        </div>
      </div>

      {/* Screen: mobile */}
      <div className="fixed top-0 z-30 w-full bg-white lg:hidden">
        <SectionContainer className="border-b border-border-default bg-background-primary p-4">
          <div className="flex items-center justify-between">
            <Brand className="text-action-background-default" />
            <div className="flex gap-6">
              <Icon name="lupa" className="size-6" />
              <Icon name="hamburger" className="size-6" />
            </div>
          </div>
        </SectionContainer>
        {/* TODO: Include option to hide the bar */}
        <SectionContainer className="bg-action-background-default py-2 text-center">
          <Typography variant="p-small">{currentWeekMessage}</Typography>
        </SectionContainer>
      </div>

      {/* TODO Fix height */}
      <div aria-hidden className="h-[5.9rem] lg:h-28" />
      {/* <div style={{ height }} aria-hidden className="hidden lg:block" /> */}
      {/* <div className="hidden h-[137px] lg:block" aria-hidden /> */}
      {/* <MobileNavBar className="lg:hidden" /> */}
    </>
  )
}

export default NavBar
