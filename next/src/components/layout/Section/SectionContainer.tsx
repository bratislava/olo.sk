import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import cn from '@/src/utils/cn'

export type SectionContainerProps = {
  background?: 'primary' | 'secondary' | 'tertiary'
  classNameInner?: string
} & HTMLAttributes<HTMLDivElement>

const SectionContainer = ({
  background = 'primary',
  className,
  classNameInner,
  children,
  ...rest
}: SectionContainerProps) => (
  <div
    className={cn(
      'relative',
      {
        'bg-background-primary': background === 'primary',
        'bg-background-secondary': background === 'secondary',
        'bg-background-tertiary': background === 'tertiary',
      },
      className,
    )}
    {...rest}
  >
    <div className={twMerge('mx-auto max-w-screen-xl px-4 lg:px-8', classNameInner)}>
      {children}
    </div>
  </div>
)

export default SectionContainer
