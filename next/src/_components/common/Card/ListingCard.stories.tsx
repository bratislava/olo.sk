import type { Meta, StoryObj } from '@storybook/react'

import ListingCardComponent from './ListingCard'

const meta: Meta<typeof ListingCardComponent> = {
  component: ListingCardComponent,
  title: 'Components/Cards/ListingCard',
  args: {
    title: 'ListingCard title',
    linkHref: '#',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ListingCardComponent>

export const ListingCard: Story = {
  render: (args) => <ListingCardComponent {...args} />,
}

export const ListingCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <ListingCardComponent {...args} />
      <ListingCardComponent {...args} />
      <ListingCardComponent {...args} />
      <ListingCardComponent {...args} />
    </div>
  ),
}
