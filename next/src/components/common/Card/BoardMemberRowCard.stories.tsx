/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'

import BoardMemberRowCardComponent from './BoardMemberRowCard'

const meta: Meta<typeof BoardMemberRowCardComponent> = {
  component: BoardMemberRowCardComponent,
  title: 'Components/Cards/BoardMemberRowCard',
  args: {
    name: 'Name',
    position: 'Position',
    links: [
      { label: 'Link', url: '#' },
      { label: 'Link', url: '#' },
      { label: 'Link', url: '#' },
    ],
  },
  parameters: { controls: { exclude: ['className', 'imgSrc', 'fileItem'] } },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BoardMemberRowCardComponent>

export const BoardMemberRowCard: Story = {
  render: (args) => (
    <div className="flex flex-col divide-y divide-border-default">
      <div className="flex flex-col py-4">
        <p className="text-[0.6rem]">Without link:</p>
        <BoardMemberRowCardComponent name={args.name} position={args.position} />
      </div>
      <div className="flex flex-col py-4">
        <p className="text-[0.6rem]">One link:</p>
        <BoardMemberRowCardComponent
          name={args.name}
          position={args.position}
          links={args.links?.slice(0, 1)}
        />
      </div>
      <div className="flex flex-col py-4">
        <p className="text-[0.6rem]">Two links:</p>
        <BoardMemberRowCardComponent
          name={args.name}
          position={args.position}
          links={args.links?.slice(0, 2)}
        />
      </div>
      <div className="flex flex-col py-4">
        <p className="text-[0.6rem]">Three links:</p>
        <BoardMemberRowCardComponent name={args.name} position={args.position} links={args.links} />
      </div>
    </div>
  ),
}
