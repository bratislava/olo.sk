import type { Config } from 'tailwindcss'
import screens from './tailwind.config.screens'
import plugin from 'tailwindcss/plugin'
import pluginRAC from 'tailwindcss-react-aria-components'

/**
 * This plugin removes X button and decorations in native search input.
 * https://github.com/tailwindlabs/tailwindcss/discussions/10190#discussioncomment-4994363
 *
 * Similar styles are used also in RAC example styling https://react-spectrum.adobe.com/react-aria/SearchField.html#example
 *
 */
const removeNativeSearchInputStyling = plugin(function ({ addBase }) {
  addBase({
    '[type="search"]::-webkit-search-decoration': { display: 'none' },
    '[type="search"]::-webkit-search-cancel-button': { display: 'none' },
    '[type="search"]::-webkit-search-results-button': { display: 'none' },
    '[type="search"]::-webkit-search-results-decoration': { display: 'none' },
  })
})

/*
 * Helper functions to easily calculate rem values from px in desired shape `[fontSize: string, lineHeight: string]`
 */
const toRem = (px: number) => `${px / 16}rem`
const getFontSize = (size: [number, number]) =>
  [toRem(size[0]), toRem(size[1])] satisfies [fontSize: string, lineHeight: string]

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [
    removeNativeSearchInputStyling,
    require('tailwind-scrollbar-hide'),
    pluginRAC,
    // require('tailwindcss-animate'),
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    screens,

    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '800',
    },

    // do not use these classes, use Typography component instead
    fontSize: {
      'size-button-large': getFontSize([16, 24]), // this is probably not used in OLO ?
      'size-button-default': getFontSize([14, 24]),

      'size-p-large': getFontSize([20, 28]),
      'size-p-default': getFontSize([16, 24]),
      'size-p-small': getFontSize([14, 20]),

      'size-h6': getFontSize([16, 24]),
      'size-h6-r': getFontSize([16, 24]),
      'size-h5': getFontSize([20, 28]),
      'size-h5-r': getFontSize([16, 24]),
      'size-h4': getFontSize([24, 32]),
      'size-h4-r': getFontSize([18, 26]),
      'size-h3': getFontSize([28, 36]),
      'size-h3-r': getFontSize([20, 28]),
      'size-h2': getFontSize([32, 40]),
      'size-h2-r': getFontSize([24, 32]),
      'size-h1': getFontSize([40, 48]),
      'size-h1-r': getFontSize([28, 36]),
      'size-h1-hero': getFontSize([56, 64]),
      'size-h1-hero-r': getFontSize([32, 40]),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'rgb(var(--color-grey-0))',
      background: {
        primary: 'rgb(var(--token-background-primary))',
        secondary: 'rgb(var(--token-background-secondary))',
        tertiary: 'rgb(var(--token-background-tertiary))',
        primaryInverted: 'rgb(var(--token-background-primary-inverted))',
        disabled: 'rgb(var(--token-background-disabled))',
        tag: {
          public: 'rgb(var(--token-badge-public))',
          firms: 'rgb(var(--token-badge-firms))',
          institutions: 'rgb(var(--token-badge-institutions))',
        },
      },
      border: {
        default: 'rgb(var(--token-border-default))',
        hover: 'rgb(var(--token-border-hover))',
        dark: 'rgb(var(--token-border-dark))',
      },
      content: {
        primary: 'rgb(var(--token-content-primary))',
        secondary: 'rgb(var(--token-content-secondary))',
        tertiary: 'rgb(var(--token-content-tertiary))',
        primaryInverted: 'rgb(var(--token-content-primary-inverted))',
        secondaryInverted: 'rgb(var(--token-content-secondary-inverted))',
        tertiaryInverted: 'rgb(var(--token-content-tertiary-inverted))',
        disabled: 'rgb(var(--token-content-disabled))',
        link: {
          default: 'rgb(var(--token-content-link-default))',
          hover: 'rgb(var(--token-content-link-hover))',
          pressed: 'rgb(var(--token-content-link-pressed))',
        },
      },
      action: {
        content: {
          default: 'rgb(var(--token-action-content-default))',
          hover: 'rgb(var(--token-action-content-hover))',
          pressed: 'rgb(var(--token-action-content-pressed))',
        },
        background: {
          default: 'rgb(var(--token-action-background-default))',
          hover: 'rgb(var(--token-action-background-hover))',
          pressed: 'rgb(var(--token-action-background-pressed))',
        },
        softBackground: {
          hover: 'rgb(var(--token-action-soft-background-hover))',
          pressed: 'rgb(var(--token-action-soft-background-pressed))',
        },
        border: {
          default: 'rgb(var(--token-action-border-default))',
          hover: 'rgb(var(--token-action-border-hover))',
          pressed: 'rgb(var(--token-action-border-pressed))',
        },
      },
      success: {
        background: {
          default: 'rgb(var(--token-success-background-default))',
        },
        content: {
          default: 'rgb(var(--token-success-content-default))',
        },
      },
      warning: {
        background: {
          default: 'rgb(var(--token-warning-background-default))',
        },
        softBackground: {
          default: 'rgb(var(--token-warning-soft-background-default))',
        },
      },
      error: {
        content: {
          default: 'rgb(var(--token-error-content-default))',
        },
      },
      waste: {
        paper: 'rgb(var(--token-waste-paper))',
        plastic: 'rgb(var(--token-waste-plastic))',
        glass: 'rgb(var(--token-waste-glass))',
        civicAmenitySite: 'rgb(var(--token-waste-civicAmenitySite))',
        cookingOilsAndFats: 'rgb(var(--token-waste-cookingOilsAndFats))',
        kitchen: 'rgb(var(--token-waste-kitchen))',
        organic: 'rgb(var(--token-waste-organic))',
        mixed: 'rgb(var(--token-waste-mixed))',
        cemetery: 'rgb(var(--token-waste-cemetery))',
        christmasTrees: 'rgb(var(--token-waste-christmasTrees))',
      },
    },
    extend: {
      borderWidth: {
        1: '1px',
        3: '3px',
      },
      borderRadius: {
        4: '4px',
      },
      lineHeight: {
        14: '4rem', // 64px
        12: '3rem', // 48px
        6.5: '1.625rem', // 26px
      },
      spacing: {
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        13: '3.25rem', // 52px
        15: '3.75rem', // 60px
        18: '4.5rem', // 72px
        mobileNavBar: '3.75rem', // 60px
      },
      zIndex: {
        1: '1',
      },
      aspectRatio: {
        heroSliderMedia: '612/322',
      },
    },
  },
}

export default config
