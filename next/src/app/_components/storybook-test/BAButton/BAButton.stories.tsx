import type { Meta, StoryObj } from '@storybook/react'

import BAButtonComponent from './BAButton'

const meta: Meta<typeof BAButtonComponent> = {
  component: BAButtonComponent,
  title: 'Components/BAButton',
  //tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BAButtonComponent>

export const BAButton: Story = {
  render: () => <BAButtonComponent />,
}
