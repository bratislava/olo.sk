import cx from 'classnames'
import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type CardBaseProps = {
  variant?: 'plain-white' | 'plain-brand' | 'solid' | 'unstyled'
} & HTMLAttributes<HTMLDivElement>

const CardBase = ({ variant = 'unstyled', children, className, ...rest }: CardBaseProps) => {
  return (
    <div
      // overflow-hidden ensures image not to overlap with rounded corners
      className={twMerge(
        cx('group/CardBase relative flex flex-col overflow-hidden', {
          'rounded-lg': variant !== 'unstyled',
          'border border-border-default bg-background-primary hover:border-border-hover':
            variant === 'solid',
          'bg-background-primary': variant === 'plain-white',
          'bg-background-secondary': variant === 'plain-brand',
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
