import * as React from 'react'

import Brand from '@/src/components/common/Brand/Brand'
import NavBarHorizontalDivider from '@/src/components/common/NavBar/NavMenu/NavBarHorizontalDivider'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { useCurrentWeekParity } from '@/src/utils/useCurrentWeekParity'

const NavBarHeader = () => {
  const { currentWeekMessage } = useCurrentWeekParity()

  return (
    <SectionContainer className="bg-action-background-default py-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 py-0.5">
          <Brand />
          <NavBarHorizontalDivider />
          <Typography variant="p-small">{currentWeekMessage}</Typography>
        </div>
        {/* TODO: implement in the future */}
        <div>
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
