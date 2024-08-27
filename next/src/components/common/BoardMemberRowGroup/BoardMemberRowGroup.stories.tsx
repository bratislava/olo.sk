import type { Meta, StoryObj } from '@storybook/react'

import BoardMemberRowGroupComponent from './BoardMemberRowGroup'

const meta: Meta<typeof BoardMemberRowGroupComponent> = {
  component: BoardMemberRowGroupComponent,
  title: 'Components/BoardMemberRowGroup',
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
type Story = StoryObj<typeof BoardMemberRowGroupComponent>

export const BoardMemberRowGroup: Story = {
  args: {
    BoardMemberRowCardData: [
      { name: 'Name', position: 'Position', links: [{ label: 'Link', url: '#' }] },
      { name: 'Name', position: 'Position', links: [{ label: 'Link', url: '#' }] },
      { name: 'Name', position: 'Position', links: [{ label: 'Link', url: '#' }] },
    ],
  },
  render: (args) => (
    <div className="w-full">
      <BoardMemberRowGroupComponent {...args} />
    </div>
  ),
}
