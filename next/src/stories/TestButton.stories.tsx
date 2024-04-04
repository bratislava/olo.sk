import type { Meta, StoryObj } from '@storybook/react'

import TestButtonComponent from './TestButton'

const meta: Meta<typeof TestButtonComponent> = {
  component: TestButtonComponent,
  title: 'Components/TestButton',
  //tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TestButtonComponent>

export const TestButton: Story = {
  render: () => <TestButtonComponent />,
}
