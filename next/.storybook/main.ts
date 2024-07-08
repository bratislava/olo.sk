import type { StorybookConfig } from '@storybook/nextjs'
import svgoConfig from '../svgo.config.mjs'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    // By importing specific folders first, we can influence the order in which stories will appear in the sidebar
    // See more: https://github.com/storybookjs/storybook/issues/6327#issuecomment-612687059
    '../src/components/sections/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/sections/headers/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/common/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldRemoveUndefinedFromOptional: true,
    }, // Available only when reactDocgen is set to 'react-docgen-typescript'
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public', '../src/assets'],
  webpackFinal: async (config) => {
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test

      if (!test) {
        return false
      }

      return test.test('.svg')
    }) as { [key: string]: any }

    imageRule.exclude = /\.svg$/

    config.module?.rules?.push(
      // Load svg as asset if import is ending in ?url so we can use it in <Image />
      {
        test: /\.svg$/i,
        resourceQuery: /url/, // only include if path ends with *.svg?url
        type: 'asset/resource', // See more: https://webpack.js.org/guides/asset-modules/
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: imageRule.issuer,
        resourceQuery: { not: [/url/] }, // exclude if *.svg?url
        use: {
          loader: '@svgr/webpack',
          options: { svgoConfig },
        },
      },
    )

    return config
  },
}
export default config
