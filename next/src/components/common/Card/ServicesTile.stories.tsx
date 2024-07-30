import type { Meta, StoryObj } from '@storybook/react'

import ServicesTileComponent from './ServicesTile'

const meta: Meta<typeof ServicesTileComponent> = {
  component: ServicesTileComponent,
  title: 'Components/Cards/ServicesTile',
  args: {
    title: 'Service name',
    text: 'Service description',
    linkProps: {
      href: '#',
      children: 'Read more',
    },
  },
  parameters: {
    controls: { exclude: ['className'] },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ServicesTileComponent>

export const ServicesTile: Story = {
  decorators: [
    (Story) => (
      <div className="w-[288px] lg:w-[386px]">
        <Story />
      </div>
    ),
  ],
  render: (args) => <ServicesTileComponent {...args} />,
}

export const ServicesTileGrid: Story = {
  parameters: {
    controls: { exclude: ['serviceCategories'] },
  },
  render: (args) => (
    <div className="flex grid-rows-1 gap-2 lg:gap-8">
      <ServicesTileComponent {...args} />
      <ServicesTileComponent {...args} />
      <ServicesTileComponent {...args} />
    </div>
  ),
}
