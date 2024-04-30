/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import TypographyComponent from './Typography'

const meta: Meta<typeof TypographyComponent> = {
  component: TypographyComponent,
  title: 'Components/Typography',
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'text' },
    variant: {
      options: [
        'h1-hero',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p-default',
        'p-large',
        'p-small',
        'p-default-bold',
        'p-large-bold',
        'p-small-bold',
        'p-default-black',
        'p-large-black',
        'p-small-black',
        'button-default',
        'button-large',
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TypographyComponent>

export const Typography: Story = {
  args: {
    variant: 'h1',
    children: 'Typography',
  },
  render: (args) => <TypographyComponent {...args} />,
}
