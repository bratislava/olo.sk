import cx from 'classnames'
import { twMerge } from 'tailwind-merge'

import { normalizeSkText } from '@/app/_components/common/Typography/normalizeSkText'

// TODO make `as` prop generic for any text HTML element
type TypographyProps = {
  children: string
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
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span' | 'label' | 'cite' // TODO generic
  className_onlyWhenNecessary?: string
}

const Typography = ({
  variant = 'p-default',
  children,
  as,
  className_onlyWhenNecessary,
}: TypographyProps) => {
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

  const Component = as ?? variantElement

  return (
    <Component
      className={twMerge(
        cx(
          {
            'text-size-h1-hero-r lg:text-size-h1-hero': variant === 'h1',
            'text-size-h1-r lg:text-size-h1': variant === 'h1',
            'text-size-h2-r lg:text-size-h2': variant === 'h2',
            'text-size-h3-r lg:text-size-h3': variant === 'h3',
            'text-size-h4-r lg:text-size-h4': variant === 'h4',
            'text-size-h5-r lg:text-size-h5': variant === 'h5',
            'text-size-h6-r lg:text-size-h6': variant === 'h6',
            'text-size-p-default lg:text-size-p-large': variant.startsWith('p-large'),
            'text-size-p-default lg:text-size-p-default': variant.startsWith('p-default'),
            'text-size-p-small lg:text-size-p-small': variant.startsWith('p-small'),
            'font-bold': variant.endsWith('-bold'),
            'font-black': variant.endsWith('-black'),
            'text-size-button-default font-bold': variant === 'button-default',
            'text-size-button-large font-bold': variant === 'button-large',
          },
          className_onlyWhenNecessary,
        ),
      )}
    >
      {normalizeSkText(children)}
    </Component>
  )
}

export default Typography
