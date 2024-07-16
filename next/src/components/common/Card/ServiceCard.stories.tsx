import type { Meta, StoryObj } from '@storybook/react'

import ServiceCardComponent from './ServiceCard'

const meta: Meta<typeof ServiceCardComponent> = {
  component: ServiceCardComponent,
  title: 'Components/Cards/ServiceCard',
  argTypes: {
    serviceCategories: {
      options: [['public'], ['firms'], ['institutions'], ['public', 'firms', 'institutions']],
      control: {
        type: 'radio',
        labels: {
          public: 'Public',
          firms: 'Firms',
          institutions: 'Institutions',
          'public,firms,institutions': 'All',
        },
      },
    },
  },
  args: {
    title: 'Service name',
    serviceCategories: ['public', 'firms', 'institutions'],
  },
  parameters: {
    controls: { exclude: ['className'] },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ServiceCardComponent>

export const ServiceCard: Story = {
  decorators: [
    (Story) => (
      <div className="w-[288px] lg:w-[386px]">
        <Story />
      </div>
    ),
  ],
  render: (args) => <ServiceCardComponent {...args} />,
}

export const ServiceCardRows: Story = {
  parameters: {
    controls: { exclude: ['serviceCategories'] },
  },
  render: (args) => (
    <div className="flex grid-rows-1 gap-2 lg:gap-8">
      <ServiceCardComponent {...args} />
      <ServiceCardComponent {...args} />
      <ServiceCardComponent {...args} />
    </div>
  ),
}
