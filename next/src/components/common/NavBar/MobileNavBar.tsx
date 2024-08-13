import * as React from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import NavBarLogo from '@/src/components/common/NavBar/NavBarLogo'
import NavBarMobileCurrentWeekMessage from '@/src/components/common/NavBar/NavBarMobileCurrentWeekMessage'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import PlaceholderWrapper from '@/src/components/placeholder/PlaceholderWrapper'
import cn from '@/src/utils/cn'
import { useCurrentWeekParity } from '@/src/utils/useCurrentWeekParity'

type MobileNavBarProps = {
  className?: string
}

const MobileNavBar = ({ className }: MobileNavBarProps) => {
  const { currentWeekMessage } = useCurrentWeekParity()

  return (
    <div className={cn(className)}>
      <SectionContainer className="fixed top-0 z-30 w-full border-b border-border-default bg-background-primary py-4">
        <div className="flex items-center justify-between">
          <NavBarLogo className="text-action-background-default" />
          {/* TODO: Temporary solution - should be implemented as Buttons */}
          <PlaceholderWrapper className="border-action-background-default">
            <div className="flex gap-6">
              <Icon name="lupa" className="size-6" />
              <Icon name="hamburger" className="size-6" />
            </div>
          </PlaceholderWrapper>
        </div>
      </SectionContainer>
      <NavBarMobileCurrentWeekMessage currentWeekMessage={currentWeekMessage} />
    </div>
  )
}

export default MobileNavBar
