import type { Meta, StoryObj } from '@storybook/react'

import WorkshopCardComponent from './WorkshopCard'

const meta: Meta<typeof WorkshopCardComponent> = {
  component: WorkshopCardComponent,
  title: 'Components/Cards/WorkshopCard',
  args: {
    title: 'WorkshopCard title',
    linkHref: '#',
    iconName: 'disk', // temporary icon
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WorkshopCardComponent>

export const WorkshopCard: Story = {
  render: (args) => <WorkshopCardComponent {...args} />,
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const WorkshopCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <WorkshopCardComponent {...args} />
      <WorkshopCardComponent {...args} />
      <WorkshopCardComponent {...args} />
    </div>
  ),
}
