import type { Preview } from '@storybook/react'
import '@/styles/globals.css'

const preview: Preview = {
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
