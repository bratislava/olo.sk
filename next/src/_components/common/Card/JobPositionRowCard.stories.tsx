import type { Meta, StoryObj } from '@storybook/react'

import JobPositionRowCardComponent from './JobPositionRowCard'

const meta: Meta<typeof JobPositionRowCardComponent> = {
  component: JobPositionRowCardComponent,
  title: 'Components/Cards/JobPositionRowCard',
  argTypes: {},
  args: {
    title: 'JobPositionRowCard title',
    linkHref: '#',
    metaData: ['Oddelenie', 'Úväzok', 'Plat'],
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof JobPositionRowCardComponent>

export const JobPositionRowCard: Story = {
  render: (args) => <JobPositionRowCardComponent {...args} />,
}

export const JobPositionRowCardRows: Story = {
  render: (args) => (
    <div className="flex flex-col">
      <JobPositionRowCardComponent {...args} />
      <JobPositionRowCardComponent {...args} />
      <JobPositionRowCardComponent {...args} />
      <JobPositionRowCardComponent {...args} />
    </div>
  ),
}
