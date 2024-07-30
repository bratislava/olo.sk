import type { Meta, StoryObj } from '@storybook/react'

import PageHeaderBasicComponent from './PageHeaderBasic'

type Props = {
  title: string
  perex?: string
}

const meta: Meta<Props> = {
  component: PageHeaderBasicComponent,
  title: 'Page Headers/Basic',
  args: {
    title: 'Nevyviezli mi odpad',
    perex:
      'Lorem ipsum dolor sit amet consectetur. Nisi non integer fringilla vel arcu vitae iaculis lorem. Semper at vestibulum massa ut nulla quisque tortor a aliquam. Enim vitae rhoncus sed dictum viverra pellentesque tincidunt convallis nulla. Aliquam diam ultrices aliquam diam venenatis.',
  },
}

type Story = StoryObj<Props>

export const PageHeaderBasic: Story = {
  name: 'Basic',
}

export default meta
