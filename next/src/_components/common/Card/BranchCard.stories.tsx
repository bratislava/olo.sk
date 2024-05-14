import type { Meta, StoryObj } from '@storybook/react'

import BranchCardComponent from './BranchCard'

const meta: Meta<typeof BranchCardComponent> = {
  component: BranchCardComponent,
  title: 'Components/Cards/BranchCard',
  argTypes: {
    hasWhiteBackground: { type: 'boolean' },
  },
  args: {
    title: 'BranchCard title',
    linkHref: '#',
    address: 'Majerčíková 10',
    hasWhiteBackground: true,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BranchCardComponent>

export const BranchCard: Story = {
  render: (args) => <BranchCardComponent {...args} />,
}

export const BranchCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:flex-grow [&>*]:basis-[280px]">
      <BranchCardComponent {...args} />
      <BranchCardComponent {...args} />
    </div>
  ),
}
