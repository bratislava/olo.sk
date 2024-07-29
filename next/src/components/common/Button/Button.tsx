import cx from 'classnames'
import NextLink from 'next/link'
import { ComponentProps, forwardRef, ReactNode, RefObject } from 'react'
import { AriaButtonProps } from 'react-aria'
import { Button as RACButton, ButtonProps as RACButtonProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

import Icon from '@/src/components/common/Icon/Icon'
import Link, { LinkPlausibleProps } from '@/src/components/common/Link/Link'
import Spinner from '@/src/components/common/Spinner/Spinner'

/**
 *  Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=4-385&mode=design&t=IDCmW43zimnlwiDU-4
 */

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
  variant:
    | 'unstyled'
    | 'icon-wrapped'
    | 'icon-wrapped-negative-margin'
    | 'category-solid' // Figma: Primary
    | 'category-outline' // Figma: Secondary
    | 'category-plain' // Figma: Plain
    | 'black-solid' // Figma: Primary inverted
    | 'black-outline' // Figma: Tertiary
    | 'black-plain' // not in Figma, but we implement it
    | 'negative-solid' // TODO not in Figma
    | 'negative-plain' // TODO not in Figma
    | 'black-link' // Figma: Default link
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

/**
 *  Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=4-385&mode=design&t=IDCmW43zimnlwiDU-4
 */

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
      asLink, // not used, but it should not be passed down in `rest` because it's not valid html attribute for <button> or <a>
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
     *   - text should be styled by Typography component, now we use "text-size-button-default font-bold" directly
     *   - border should render inside button, not outside
     */
    const styles = twMerge(
      /*
       *  We use isFocusVisible to show focus ring only on keyboard navigation
       *  It's recommended to remove default outline and use custom styling as ring:
       *  https://tailwindcss.com/docs/outline-style#removing-outlines
       */
      'outline-none ring-offset-2 focus-visible:ring',
      variant === 'unstyled'
        ? className ?? ''
        : twMerge(
            'inline-flex h-auto items-center justify-center gap-2 text-size-button-default font-bold transition',
            cx(
              // we change rounded corners for link focus ring
              isLinkVariant ? 'rounded-sm max-lg:gap-1' : 'rounded-lg',

              {
                // NOTE: there are some style overrides for link variants below in "twMerge"

                'font-normal underline underline-offset-2': isLinkVariant,

                // disabled or loading
                'opacity-50': isLoadingOrDisabled,

                // https://github.com/tailwindlabs/tailwindcss/issues/1041#issuecomment-957425345
                'after:absolute after:inset-0': 'stretched' in rest && rest.stretched,

                // width or fullwidth
                'w-full': fullWidth,
                'w-full md:w-fit': fullWidthMobile,
                'w-fit': !fullWidth && !fullWidthMobile,

                // border width
                border: isSolidOrOutlineVariant,

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

                // colors: idle & focus (background, border, text)

                'border-action-background-default bg-action-background-default text-content-secondary pressed:border-action-background-pressed pressed:bg-action-background-pressed':
                  variant === 'category-solid',
                'border-action-border-default bg-transparent text-content-secondary pressed:border-action-border-pressed':
                  variant === 'category-outline',
                'text-content-secondary pressed:bg-action-softBackground-pressed':
                  variant === 'category-plain',

                'border-action-content-default bg-action-content-default text-content-primaryInverted pressed:border-action-content-pressed pressed:bg-action-content-pressed':
                  variant === 'black-solid',
                'border-border-default bg-transparent text-action-content-default pressed:border-action-content-pressed pressed:text-border-dark':
                  variant === 'black-outline',
                'text-action-content-default pressed:bg-border-hover': variant === 'black-plain',

                'text-action-content-default pressed:text-action-content-pressed':
                  variant === 'black-link',

                // 'border-border-default text-action-content-default pressed:border-border-hover pressed:text-action-content-pressed bg-white':
                // 'border-negative-700 bg-negative-700 pressed:border-negative-800 pressed:bg-negative-800 text-content-primaryInverted':
                //   variant === 'negative-solid',
                // 'text-negative-700 pressed:bg-negative-200 pressed:text-negative-800':
                //   variant === 'negative-plain',

                // colors:hover (background, border, text)

                'hover:border-action-background-hover hover:bg-action-background-hover':
                  variant === 'category-solid',
                'hover:border-action-border-hover': variant === 'category-outline',
                'hover:bg-action-softBackground-hover': variant === 'category-plain',

                'hover:border-action-content-hover hover:bg-action-content-hover':
                  variant === 'black-solid',
                'hover:border-action-content-hover hover:text-action-content-hover':
                  variant === 'black-outline',
                'hover:bg-border-default hover:text-action-content-default':
                  variant === 'black-plain',

                'hover:text-action-content-hover': variant === 'black-link',

                // 'hover:border-negative-600 hover:bg-negative-600': variant === 'negative-solid',
                // 'hover:bg-negative-100 hover:text-negative-600': variant === 'negative-plain',

                // svg icons
                '[&>svg]:h-5 [&>svg]:w-5 [&>svg]:lg:h-6 [&>svg]:lg:w-6': size === 'responsive',
                '[&>svg]:h-5 [&>svg]:w-5': size === 'small',
                '[&>svg]:h-6 [&>svg]:w-6': size === 'large',
              },
            ),
            className,
          ),
    )

    if (rest.href) {
      const isExternal = rest.href.startsWith('http')
      const linkIcon = hasLinkIcon ? (
        isExternal ? (
          <Icon name="export" />
        ) : (
          <Icon name="sipka-doprava" />
        )
      ) : null

      return (
        <Link
          href={rest.href}
          target={isExternal ? '_blank' : '_self'}
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
