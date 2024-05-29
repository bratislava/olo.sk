import type { Preview } from '@storybook/react'
import '@/src/styles/globals.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import React from 'react'

// addDecorator(storyFn => (
//   <I18nextProvider i18n={i18n}>{storyFn()}</I18nextProvider>
// ));

const preview: Preview = {
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
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
