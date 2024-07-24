import * as React from 'react'

import Brand from '@/src/components/common/Brand/Brand'
import NavBarHorizontalDivider from '@/src/components/common/NavBar/NavMenu/NavBarHorizontalDivider'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import cn from '@/src/utils/cn'
import { useCurrentWeekParity } from '@/src/utils/useCurrentWeekParity'

type NavBarHeaderProps = {
  className?: string
}

const NavBarHeader = ({ className }: NavBarHeaderProps) => {
  const { currentWeekMessage } = useCurrentWeekParity()

  return (
    <SectionContainer className={cn('bg-action-background-default py-3', className)}>
      <div className="flex items-center justify-between">
        <div className="flex gap-4 py-0.5">
          <Brand />
          <NavBarHorizontalDivider />
          <Typography variant="p-small">{currentWeekMessage}</Typography>
        </div>
        {/* Set opacity to 25% to suggest that it should not be interacted with */}
        <div className="opacity-25">
          <div className="flex gap-4">
            <Typography variant="p-small">Kontakty</Typography>
            <NavBarHorizontalDivider />
            <Typography variant="p-small">SK</Typography>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default NavBarHeader
