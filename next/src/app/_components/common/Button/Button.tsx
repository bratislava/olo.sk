'use client'

/* eslint-disable sonarjs/no-duplicate-string */
import cx from 'classnames'
import NextLink from 'next/link'
import { ComponentProps, forwardRef, ReactNode, RefObject } from 'react'
import { AriaButtonProps } from 'react-aria'
import { Button as RACButton, ButtonProps as RACButtonProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

import Icon from '@/app/_components/common/Icon/Icon'
import Link, { LinkPlausibleProps } from '@/app/_components/common/Link/Link'
import Spinner from '@/app/_components/common/Spinner/Spinner'

type ButtonOrIconButton =
  | {
      icon: ReactNode
      'aria-label': string
      startIcon?: never
      endIcon?: never
      children?: never
    }
  | {
      icon?: never
      startIcon?: ReactNode
      endIcon?: ReactNode
      children: ReactNode
    }

type ButtonBase = {
  variant?:
    | 'unstyled'
    | 'icon-wrapped'
    | 'icon-wrapped-negative-margin'
    | 'category-solid'
    | 'category-outline'
    | 'category-plain'
    | 'black-solid'
    | 'black-outline'
    | 'black-plain'
    | 'negative-solid'
    | 'negative-plain'
    | 'black-link'
    | 'category-link'
  size?: 'responsive' | 'large' | 'small'
  className?: string
  fullWidth?: boolean
  fullWidthMobile?: boolean
  isLoading?: boolean
  loadingText?: string
} & ButtonOrIconButton

export type ButtonProps = Omit<RACButtonProps, 'className' | 'style'> & {
  asLink?: false
  href?: never
  target?: never
  hasLinkIcon?: never
  plausibleProps?: never
}

export type AnchorProps = Omit<AriaButtonProps<'a'>, 'children'> &
  Pick<ComponentProps<typeof NextLink>, 'target' | 'replace' | 'prefetch'> & {
    asLink: true
    stretched?: boolean
    hasLinkIcon?: boolean
    plausibleProps?: LinkPlausibleProps
  }

export type PolymorphicProps = ButtonBase & (ButtonProps | AnchorProps)

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, PolymorphicProps>(
  (
    {
      children,
      className,
      isDisabled,
      variant = 'unstyled',
      size = 'responsive',
      icon,
      startIcon,
      endIcon,
      hasLinkIcon = true,
      fullWidth,
      fullWidthMobile,
      isLoading,
      loadingText,
      ...rest
    },
    ref,
    // eslint-disable-next-line sonarjs/cognitive-complexity
  ) => {
    const isLoadingOrDisabled = isLoading || isDisabled

    const isSolidVariant = variant.endsWith('-solid')
    const isOutlineVariant = variant.endsWith('-outline')
    const isSolidOrOutlineVariant = isSolidVariant || isOutlineVariant
    const isPlainVariant = variant.endsWith('-plain')
    const isLinkVariant = variant.endsWith('-link')
    const isIconWrappedVariant =
      variant === 'icon-wrapped' || variant === 'icon-wrapped-negative-margin'
    const isIconButton = Boolean(icon)

    /* TODO
     *   - examine why `text-button` interferes with `text-[color]` and therefore is sometimes ignored
     *   - border should render inside button, not outside
     *   - focus text color for 'culture' and 'social' category should be -800
     */
    const styles =
      variant === 'unstyled'
        ? className ?? ''
        : twMerge(
            // TODO text-button interferes with text-[color], as quickfix we set size and color here by arbitrary values
            'inline-flex h-auto items-center justify-center gap-2 text-[1rem] font-semibold leading-[1.5rem] transition',
            cx(
              // we use isFocusVisible to show focus ring only on keyboard navigation
              // it's recommended to remove default outline and use custom styling as ring: https://tailwindcss.com/docs/outline-style#removing-outlines
              'outline-none ring-offset-2 focus-visible:ring',
              // we change rounded corners for link focus ring
              isLinkVariant ? 'rounded-sm max-lg:gap-1' : 'rounded-lg',

              {
                // NOTE: there are some style overrides for link variants below in "twMerge"

                'font-medium underline underline-offset-2': isLinkVariant,

                // disabled or loading
                'opacity-50': isLoadingOrDisabled,

                // https://github.com/tailwindlabs/tailwindcss/issues/1041#issuecomment-957425345
                'after:absolute after:inset-0': 'stretched' in rest && rest.stretched,

                // width or fullwidth
                'w-full': fullWidth,
                'w-full md:w-fit': fullWidthMobile,
                'w-fit': !fullWidth && !fullWidthMobile,

                // border width
                'border-2': isSolidOrOutlineVariant,

                // padding - link variants
                'p-0': isLinkVariant,

                // padding - icon-wrapped variant
                'p-2 outline-offset-0': isIconButton && isIconWrappedVariant,
                '-m-2': isIconButton && variant === 'icon-wrapped-negative-margin',

                // padding - filled and outlined variants
                'px-4 py-2 lg:py-3':
                  size === 'responsive' && !isIconButton && isSolidOrOutlineVariant,
                'px-4 py-2': size === 'small' && !isIconButton && isSolidOrOutlineVariant,
                'px-4 py-3': size === 'large' && !isIconButton && isSolidOrOutlineVariant,

                // padding - filled and outlined variants with "icon"
                'p-2.5 lg:p-3': size === 'responsive' && isIconButton && isSolidOrOutlineVariant,
                'p-2.5': size === 'small' && isIconButton && isSolidOrOutlineVariant,
                'p-3': size === 'large' && isIconButton && isSolidOrOutlineVariant,

                // padding - plain variants
                'px-2 py-1 lg:px-3 lg:py-2':
                  size === 'responsive' && !isIconButton && isPlainVariant,
                'px-2 py-1': size === 'small' && !isIconButton && isPlainVariant,
                'px-3 py-2': size === 'large' && !isIconButton && isPlainVariant,

                // padding - plain variants with "icon"
                'p-1.5 lg:p-2': size === 'responsive' && isIconButton && isPlainVariant,
                'p-1.5': size === 'small' && isIconButton && isPlainVariant,
                'p-2': size === 'large' && isIconButton && isPlainVariant,

                // colors - bg, border, text - idle & focus
                'border-action-background bg-action-background text-content-secondary pressed:border-action-background-pressed pressed:bg-action-background-pressed':
                  variant === 'category-solid',
                'border-action-border bg-transparent text-content-secondary pressed:border-action-border-pressed':
                  variant === 'category-outline',

                'border-gray-700 bg-gray-700 pressed:border-gray-800 pressed:bg-gray-800 text-white':
                  variant === 'black-solid',
                'border-gray-200 text-gray-700 pressed:border-gray-300 pressed:text-gray-800 bg-transparent':
                  variant === 'black-outline',
                'border-negative-700 bg-negative-700 pressed:border-negative-800 pressed:bg-negative-800 text-white':
                  variant === 'negative-solid',

                'text-content-secondary pressed:bg-action-softBackground-pressed':
                  variant === 'category-plain',
                'text-gray-700 pressed:bg-gray-200 pressed:text-gray-800':
                  variant === 'black-plain',
                'text-negative-700 pressed:bg-negative-200 pressed:text-negative-800':
                  variant === 'negative-plain',

                'text-category-700 pressed:text-category-800': variant === 'category-link',
                'text-gray-700 pressed:text-gray-800': variant === 'black-link',

                // colors:hover - bg, border, text
                'hovered:border-action-background-hover hovered:bg-action-background-hover':
                  variant === 'category-solid',
                'hovered:border-action-border-hover hovered:bg-action-border-hover':
                  variant === 'category-outline',
                'hovered:bg-softBackground-hover': variant === 'category-plain',

                'hover:border-gray-600 hover:bg-gray-600': variant === 'black-solid',
                'hover:border-gray-200 hover:text-gray-600': variant === 'black-outline',
                'hover:bg-gray-100 hover:text-gray-600': variant === 'black-plain',

                'hover:border-negative-600 hover:bg-negative-600': variant === 'negative-solid',
                'hover:bg-negative-100 hover:text-negative-600': variant === 'negative-plain',

                'hover:text-category-600': variant === 'category-link',
                'hover:text-gray-600': variant === 'black-link',

                // svg icons
                '[&>svg]:h-5 [&>svg]:w-5 [&>svg]:lg:h-6 [&>svg]:lg:w-6': size === 'responsive',
                '[&>svg]:h-5 [&>svg]:w-5': size === 'small',
                '[&>svg]:h-6 [&>svg]:w-6': size === 'large',
              },
            ),
            className,
          )

    if (rest.href) {
      const isExternal = rest.href.startsWith('http')
      const linkIcon = hasLinkIcon ? (
        isExternal ? (
          <Icon name="sipka-doprava" />
        ) : (
          <Icon name="export" />
        )
      ) : null

      return (
        <Link
          href={rest.href}
          ref={ref as RefObject<HTMLAnchorElement>}
          className={styles}
          plausibleProps={rest.plausibleProps}
          {...rest}
        >
          {startIcon}
          {icon ?? children}
          {linkIcon ?? endIcon}
        </Link>
      )
    }

    return (
      <RACButton
        ref={ref as RefObject<HTMLButtonElement>}
        isDisabled={isLoadingOrDisabled}
        className={styles}
        {...rest}
      >
        {!isLoading && startIcon}
        {isLoading ? (
          <>
            {loadingText}
            <Spinner size="sm" />
          </>
        ) : (
          icon ?? children
        )}
        {!isLoading && endIcon}
      </RACButton>
    )
  },
)

export default Button