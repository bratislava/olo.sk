import type { Meta, StoryObj } from '@storybook/react'

import LocationCardComponent from './LocationCard'

const meta: Meta<typeof LocationCardComponent> = {
  component: LocationCardComponent,
  title: 'Components/Cards/LocationCard',
  args: {
    title: 'LocationCard title',
    linkHref: '#',
    iconName: 'domcek',
    address: 'Vymyslená cesta 123/45',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LocationCardComponent>

export const LocationCard: Story = {
  render: (args) => <LocationCardComponent {...args} />,
}

export const LocationCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <LocationCardComponent {...args} />
      <LocationCardComponent {...args} />
      <LocationCardComponent {...args} />
      <LocationCardComponent {...args} />
    </div>
  ),
}