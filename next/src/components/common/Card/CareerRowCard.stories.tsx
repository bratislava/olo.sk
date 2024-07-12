import type { Meta, StoryObj } from '@storybook/react'

import CareerRowCardComponent from './CareerRowCard'

const meta: Meta<typeof CareerRowCardComponent> = {
  component: CareerRowCardComponent,
  title: 'Components/Cards/CareerRowCard',
  args: {
    value: 'value',
    label: 'label',
    toolTipText: 'tooltip text',
  },
  parameters: { controls: { exclude: ['className'] } },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CareerRowCardComponent>

export const CareerRowCard: Story = {
  render: (args) => <CareerRowCardComponent {...args} />,
}

export const CareerRowCardRows: Story = {
  render: (args) => (
    <div className="flex flex-col">
      <CareerRowCardComponent {...args} />
      <CareerRowCardComponent {...args} />
      <CareerRowCardComponent {...args} />
      <CareerRowCardComponent {...args} />
    </div>
  ),
}
