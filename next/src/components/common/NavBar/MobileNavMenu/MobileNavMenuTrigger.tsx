import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import React, { forwardRef } from 'react'

import BasicRowCard from '@/src/components/common/Card/BasicRowCard'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type MobileNavMenuTriggerProps = {
  label: string
  className?: string
}

const MobileNavMenuTrigger = forwardRef<HTMLButtonElement, MobileNavMenuTriggerProps>(
  ({ label, className }, forwardedRef) => {
    return (
      <NavigationMenu.Trigger
        ref={forwardedRef}
        // To disable "onHover" behaviour, needs to be set also in NavMenuContent
        // https://github.com/radix-ui/primitives/issues/1630#issuecomment-1237106380
        onPointerMove={(event) => event.preventDefault()}
        onPointerLeave={(event) => event.preventDefault()}
        className={cn('w-full', className)}
      >
        <BasicRowCard
          variant="icon-label"
          label={<Typography variant="p-default-black">{label}</Typography>}
          iconName="chevron-doprava"
        />
      </NavigationMenu.Trigger>
    )
  },
)

export default MobileNavMenuTrigger
