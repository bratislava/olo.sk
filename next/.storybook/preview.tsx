import type { Preview } from '@storybook/react'
import '@/src/styles/globals.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import React from 'react'
import { GeneralContextProvider } from '../src/providers/GeneralContextProvider'
import { client } from '../src/services/graphql'

export const loaders = [
  async () => ({
    general: await client.General({ locale: 'sk' }),
  }),
]

const preview: Preview = {
  decorators: [
    (Story, { loaded: general }) => (
      <GeneralContextProvider general={general}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </GeneralContextProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'figmaBackground',
      values: [
        {
          name: 'figmaBackground',
          value: '#F5F5F5',
        },
      ],
    },
  },
}

export default preview
