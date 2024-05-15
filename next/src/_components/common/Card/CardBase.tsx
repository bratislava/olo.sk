import cx from 'classnames'
import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type CardBaseProps = {
  variant?: 'unstyled' | 'background-white' | 'background-yellow'
  hasWhiteSectionBackground?: boolean
} & HTMLAttributes<HTMLDivElement>

/*
 * There is no Figma design for CardBase itself. We use two variants which have the same
 * style on nonwhite backgrounds, but different styles on white backgrounds.
 */

const CardBase = ({
  variant = 'unstyled',
  hasWhiteSectionBackground = true,
  children,
  className,
  ...rest
}: CardBaseProps) => {
  return (
    <div
      // overflow-hidden ensures image not to overlap with rounded corners
      className={twMerge(
        cx(
          'group/CardBase relative flex flex-col overflow-hidden',
          // When card is focused, we want to hide all rings of descendants and ring-0 still shows something
          // This needs to be changed when we'll need more focusable elements inside a card
          'focus-within:ring [&_*]:outline-none [&_*]:ring-transparent [&_*]:ring-offset-transparent',
          {
            'rounded-lg bg-background-primary': variant !== 'unstyled',

            'border border-border-default hover:border-border-hover':
              variant === 'background-white' && hasWhiteSectionBackground,

            'bg-background-secondary': variant === 'background-yellow' && hasWhiteSectionBackground,
          },
        ),
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default CardBase
