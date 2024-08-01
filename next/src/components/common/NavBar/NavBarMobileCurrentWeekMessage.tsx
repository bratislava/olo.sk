import * as React from 'react'

import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import cn from '@/src/utils/cn'

type MobileNavBarCurrentWeekMessageProps = {
  currentWeekMessage: string
  className?: string
}

const MobileNavBarCurrentWeekMessage = ({
  currentWeekMessage,
  className,
}: MobileNavBarCurrentWeekMessageProps) => {
  return (
    <div className={cn(className)}>
      <div aria-hidden className="h-[3.813rem]" />
      <SectionContainer className="w-full bg-action-background-default py-2 text-center">
        <Typography variant="p-small">{currentWeekMessage}</Typography>
      </SectionContainer>
    </div>
  )
}

export default MobileNavBarCurrentWeekMessage
