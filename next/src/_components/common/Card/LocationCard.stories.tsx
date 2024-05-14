import type { Meta, StoryObj } from '@storybook/react'

import LocationCardComponent from './LocationCard'

const meta: Meta<typeof LocationCardComponent> = {
  component: LocationCardComponent,
  title: 'Components/Cards/LocationCard',
  argTypes: {
    hasWhiteBackground: { type: 'boolean' },
  },
  args: {
    title: 'LocationCard title',
    linkHref: '#',
    iconName: 'domcek',
    address: 'Vymyslená cesta 123/45',
    hasWhiteBackground: true,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LocationCardComponent>

export const LocationCard: Story = {
  render: (args) => <LocationCardComponent {...args} />,
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
}

export const LocationCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 [&>*]:basis-[280px]">
      <LocationCardComponent {...args} />
      <LocationCardComponent {...args} />
      <LocationCardComponent {...args} />
    </div>
  ),
}
