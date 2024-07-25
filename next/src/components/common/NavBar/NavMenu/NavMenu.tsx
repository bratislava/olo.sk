import * as React from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import cn from '@/src/utils/cn'

type NavMenuProps = {
  className?: string
}

const NavMenu = ({ className }: NavMenuProps) => {
  return (
    <SectionContainer
      className={cn('border-b border-border-default bg-background-primary py-5', className)}
    >
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-8">
            {['Odpad', 'Služby', 'Aktuality', 'KOLO', 'ZEVO', 'O nás'].map((item) => {
              return (
                <div className="flex items-center justify-center gap-0.5" key={item}>
                  <Typography variant="p-default-bold">{item}</Typography>
                  <Icon name="chevron-dole-maly" className="mb-1 size-6" />
                </div>
              )
            })}
          </div>
          {/* TODO: Temporary solution - should be implemented as a Button */}
          <div className="opacity-25">
            <Icon name="lupa" className="size-6" />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default NavMenu
