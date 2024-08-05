import * as React from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import NavBarLogo from '@/src/components/common/NavBar/NavBarLogo'
import Typography from '@/src/components/common/Typography/Typography'
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
      <div className="fixed top-0 z-30 w-full border-b border-border-default bg-background-primary p-4">
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
      </div>
      <div aria-hidden className="h-[3.813rem]" />

      <div className="w-full bg-action-background-default px-4 py-2 text-center">
        <Typography variant="p-small">{currentWeekMessage}</Typography>
      </div>
    </div>
  )
}

export default MobileNavBar
