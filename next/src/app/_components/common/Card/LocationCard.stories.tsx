/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import { twMerge } from 'tailwind-merge'

import LocationCardComponent from './LocationCard'

const meta: Meta<typeof LocationCardComponent> = {
  component: LocationCardComponent,
  title: 'Components/Cards/LocationCard',
  args: {
    title: 'Location card',
    linkHref: '#',
    address: 'Majerčíková 10',
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
