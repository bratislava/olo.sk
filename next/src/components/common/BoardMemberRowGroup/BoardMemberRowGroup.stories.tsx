import type { Meta, StoryObj } from '@storybook/react'

import { OloTruckImage, ZevoIronHandImage } from '@/src/assets/images'

import BoardMemberRowGroupComponent from './BoardMemberRowGroup'

const meta: Meta<typeof BoardMemberRowGroupComponent> = {
  component: BoardMemberRowGroupComponent,
  title: 'Components/Board Member Row Group',
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
      {
        name: 'Name',
        position: 'Position',
        links: [
          { label: 'Link 1', url: '#' },
          { label: 'Link 2', url: '#' },
        ],
        imgSrc: OloTruckImage.src,
      },
      {
        name: 'Name',
        position: 'Position',
        links: null,
      },
      {
        name: 'Name',
        position: 'Position',
        links: [
          { label: 'Link 1', url: '#' },
          { label: 'Link 2', url: '#' },
          { label: 'Link 3', url: '#' },
        ],
        imgSrc: ZevoIronHandImage.src,
      },
      {
        name: 'Name',
        position: 'Position',
        links: [{ label: 'Link 1', url: '#' }],
      },
    ],
  },
  parameters: {
    controls: {
      exclude: ['BoardMemberRowCardData', 'className'],
    },
  },
  render: (args) => (
    <div className="w-full">
      <BoardMemberRowGroupComponent {...args} />
    </div>
  ),
}
