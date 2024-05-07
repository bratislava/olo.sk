import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/_components/common/Button/Button'

import ModalShareComponent from './ModalShare'

const meta: Meta<typeof ModalShareComponent> = {
  component: ModalShareComponent,
  title: 'Components/ModalShare',
  tags: ['autodocs'],
  args: { triggerButton: <Button variant="category-outline">Show</Button> },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ModalShareComponent>

export const ModalShare: Story = {
  render: (args) => {
    return <ModalShareComponent {...args} />
  },
}
