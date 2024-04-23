/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import TypographyComponent from './Typography'

const meta: Meta<typeof TypographyComponent> = {
  component: TypographyComponent,
  title: 'Components/Typography',
  tags: ['autodocs'],
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
  },
  render: (args) => <TypographyComponent {...args}>Typography</TypographyComponent>,
}
