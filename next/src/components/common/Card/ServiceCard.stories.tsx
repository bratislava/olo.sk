import type { Meta, StoryObj } from '@storybook/react'

import ServiceCardComponent from './ServiceCard'

const meta: Meta<typeof ServiceCardComponent> = {
  component: ServiceCardComponent,
  title: 'Components/Cards/ServiceCard',
  args: {
    title: 'Service name',
    linkHref: '/',
  },
  parameters: {
    controls: { exclude: ['className'] },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ServiceCardComponent>

export const ServiceCard: Story = {
  render: (args) => <ServiceCardComponent {...args} />,
  decorators: [
    (Story) => (
      <div className="w-[288px] lg:w-[386px]">
        <Story />
      </div>
    ),
  ],
}

export const ServiceCardRows: Story = {
  render: (args) => (
    <div className="lg:flex-inline flex flex-wrap gap-2 lg:gap-8">
      <ServiceCardComponent {...args} />
      <ServiceCardComponent {...args} />
      <ServiceCardComponent {...args} />
    </div>
  ),
}
