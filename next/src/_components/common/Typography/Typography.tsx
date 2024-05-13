import { createElement, ElementType, forwardRef, ReactNode } from 'react'

import { normalizeSkText } from '@/_components/common/Typography/normalizeSkText'
import cn from '@/app/_utils/cn'

type TypographyProps = {
  children: ReactNode
  as?: ElementType
  className_onlyWhenNecessary?: string
  variant?:
    | 'h1-hero'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p-default'
    | 'p-large'
    | 'p-small'
    | 'p-default-bold'
    | 'p-large-bold'
    | 'p-small-bold'
    | 'p-default-black'
    | 'p-large-black'
    | 'p-small-black'
    | 'button-default'
    | 'button-large'
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=39-2452&mode=dev
 */

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'p-default', children, as, className_onlyWhenNecessary, ...rest }, forwardedRef) => {
    const variantElement = (
      {
        'h1-hero': 'h1',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        'p-default': 'p',
        'p-large': 'p',
        'p-small': 'p',
        'p-default-bold': 'p',
        'p-large-bold': 'p',
        'p-small-bold': 'p',
        'p-default-black': 'p',
        'p-large-black': 'p',
        'p-small-black': 'p',
        'button-default': 'span',
        'button-large': 'span',
      } as const
    )[variant]

    const classes = cn(
      'whitespace-pre-wrap', // TODO revisit if we want to apply it on all text
      'break-words', // TODO revisit if we want to apply it on all text
      {
        'text-size-h1-hero-r font-black lg:text-size-h1-hero': variant === 'h1-hero',
        'text-size-h1-r font-black lg:text-size-h1': variant === 'h1',
        'text-size-h2-r font-black lg:text-size-h2': variant === 'h2',
        'text-size-h3-r font-black lg:text-size-h3': variant === 'h3',
        'text-size-h4-r font-black lg:text-size-h4': variant === 'h4',
        'text-size-h5-r font-black lg:text-size-h5': variant === 'h5',
        'text-size-h6-r font-black lg:text-size-h6': variant === 'h6',
        'text-size-p-default lg:text-size-p-large': variant.startsWith('p-large'),
        'text-size-p-default lg:text-size-p-default': variant.startsWith('p-default'),
        'text-size-p-small lg:text-size-p-small': variant.startsWith('p-small'),
        'font-bold': variant.endsWith('-bold'),
        'font-black': variant.endsWith('-black'),
        'text-size-button-default font-bold': variant === 'button-default',
        'text-size-button-large font-bold': variant === 'button-large',
      },
      className_onlyWhenNecessary,
    )

    // TODO normalizeSkText should be applied on all text - also when used in BlockRenderer
    const childrenNormalised = typeof children === 'string' ? normalizeSkText(children) : children

    return createElement(
      as || variantElement,
      {
        ...rest,
        ref: forwardedRef,
        className: classes,
      },
      childrenNormalised,
    )
  },
)

export default Typography
