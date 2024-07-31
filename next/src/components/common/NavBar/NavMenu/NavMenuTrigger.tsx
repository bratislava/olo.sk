import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import React, { forwardRef } from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type NavMenuTriggerProps = {
  label: string
  className?: string
}

const NavMenuTrigger = forwardRef<HTMLButtonElement, NavMenuTriggerProps>(
  ({ label, className }, forwardedRef) => {
    return (
      <NavigationMenu.Trigger
        ref={forwardedRef}
        // To disable "onHover" behaviour, needs to be set also in NavMenuContent
        // https://github.com/radix-ui/primitives/issues/1630#issuecomment-1237106380
        onPointerMove={(event) => event.preventDefault()}
        onPointerLeave={(event) => event.preventDefault()}
        className={cn(
          'rotate-menu-trigger flex items-center justify-center gap-0.5 px-4 py-5',
          className,
        )}
      >
        <Typography variant="p-default-bold">{label}</Typography>
        <Icon name="chevron-dole-maly" className="chevron-down-animate mb-1 size-6" aria-hidden />
      </NavigationMenu.Trigger>
    )
  },
)

export default NavMenuTrigger
