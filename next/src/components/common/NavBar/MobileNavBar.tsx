import * as React from 'react'

import Brand from '@/src/components/common/Brand/Brand'
import Icon from '@/src/components/common/Icon/Icon'
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
    <div className="lg:hidden">
      <SectionContainer
        className={cn(
          'fixed top-0 z-30 w-full border-b border-border-default bg-background-primary p-4',
          className,
        )}
      >
        <div className="flex items-center justify-between">
          <Brand className="text-action-background-default" />
          <div className="flex gap-6">
            {/* Set opacity to 25% to suggest that it should not be interacted with */}
            <div className="opacity-25">
              <Icon name="lupa" className="size-6" />
            </div>
            <Icon name="hamburger" className="size-6" />
          </div>
        </div>
      </SectionContainer>
      <div aria-hidden className="h-[3.5rem]" />
      <SectionContainer className="w-full bg-action-background-default py-2 text-center">
        <Typography variant="p-small">{currentWeekMessage}</Typography>
      </SectionContainer>
    </div>
  )
}

export default MobileNavBar
