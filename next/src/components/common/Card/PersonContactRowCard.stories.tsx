import type { Meta, StoryObj } from '@storybook/react'

import PersonContactRowCardComponent from './PersonContactRowCard'

const meta: Meta<typeof PersonContactRowCardComponent> = {
  component: PersonContactRowCardComponent,
  title: 'Components/Cards/PersonContactRowCard',
  args: {
    name: 'Name',
    position: 'Position',
    link: { label: 'Link', url: '#' },
  },
  parameters: { controls: { exclude: ['className', 'imgSrc', 'fileItem'] } },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PersonContactRowCardComponent>

export const PersonContactRowCard: Story = {
  render: (args) => (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <p className="text-[0.6rem]">Without link:</p>
        <PersonContactRowCardComponent name={args.name} position={args.position} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[0.6rem]">With link:</p>
        <PersonContactRowCardComponent name={args.name} position={args.position} link={args.link} />
      </div>
    </div>
  ),
}
