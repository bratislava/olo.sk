/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/src/components/common/Button/Button'

import ShareModalComponent from './ShareModal'

const meta: Meta<typeof ShareModalComponent> = {
  component: ShareModalComponent,
  title: 'Components/ShareModal',
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
type Story = StoryObj<typeof ShareModalComponent>

export const ShareModal: Story = {
  render: (args) => {
    return <ShareModalComponent {...args} />
  },
}
