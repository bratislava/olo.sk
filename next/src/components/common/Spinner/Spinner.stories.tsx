/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import SpinnerComponent from './Spinner'

const meta: Meta<typeof SpinnerComponent> = {
  component: SpinnerComponent,
  title: 'Components/Spinner',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpinnerComponent>

export const Spinner: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => (
    <div className="flex flex-col items-start">
      <SpinnerComponent {...args} />
    </div>
  ),
}
