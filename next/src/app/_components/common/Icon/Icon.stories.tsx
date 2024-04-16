import type { Meta, StoryObj } from '@storybook/react'

import IconComponent from './Icon'

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
  title: 'Components/Icon',
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
type Story = StoryObj<typeof IconComponent>

export const Icon: Story = {
  args: {
    name: 'domcek',
  },
}
