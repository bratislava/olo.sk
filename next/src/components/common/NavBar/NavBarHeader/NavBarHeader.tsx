import * as React from 'react'

import NavBarLogo from '@/src/components/common/NavBar/NavBarLogo'
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
          <NavBarLogo />
          <Typography variant="p-small">{currentWeekMessage}</Typography>
        </div>
        {/* TODO: Temporary solution - should be implemented as a Button */}
        <div className="opacity-25">
          <Typography variant="p-small">Kontakty</Typography>
        </div>
      </div>
    </SectionContainer>
  )
}

export default NavBarHeader
