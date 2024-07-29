import * as React from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import NavBarLogo from '@/src/components/common/NavBar/NavBarLogo'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import cn from '@/src/utils/cn'
import { useCurrentWeekParity } from '@/src/utils/useCurrentWeekParity'

type MobileNavBarProps = {
  className?: string
}

const MobileNavBar = ({ className }: MobileNavBarProps) => {
  const { currentWeekMessage } = useCurrentWeekParity()

  return (
    <div className={cn(className)}>
      <SectionContainer className="fixed top-0 z-30 w-full border-b border-border-default bg-background-primary p-4">
        <div className="flex items-center justify-between">
          <NavBarLogo className="text-action-background-default" />
          <div className="flex gap-6">
            {/* TODO: Temporary solution - should be implemented as a Button */}
            <div className="opacity-25">
              <Icon name="lupa" className="size-6" />
            </div>
            <Icon name="hamburger" className="size-6" />
          </div>
        </div>
      </SectionContainer>
      <div aria-hidden className="h-14" />
      <SectionContainer className="w-full bg-action-background-default py-2 text-center">
        <Typography variant="p-small">{currentWeekMessage}</Typography>
      </SectionContainer>
    </div>
  )
}

export default MobileNavBar
