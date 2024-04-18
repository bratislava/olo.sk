'use client'

import cx from 'classnames'
import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type CardBaseProps = {
  variant?: 'solid' | 'plain'
  background?: 'white' | 'transparent'
} & HTMLAttributes<HTMLDivElement>

const CardBase = ({ variant = 'plain', children, className, ...rest }: CardBaseProps) => {
  return (
    <div
      // overflow-hidden ensures image not to overlap with rounded corners
      className={twMerge(
        cx('group/CardBase relative flex flex-col overflow-hidden rounded-lg', {
          'border border-border bg-white': variant === 'solid',
        }),
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default CardBase
