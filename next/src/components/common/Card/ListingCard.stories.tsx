import type { Meta, StoryObj } from '@storybook/react'

import ListingCardComponent from './ListingCard'

const meta: Meta<typeof ListingCardComponent> = {
  component: ListingCardComponent,
  title: 'Components/Cards/ListingCard',
  argTypes: {
    hasWhiteBackground: { type: 'boolean' },
  },
  args: {
    title: 'ListingCard title',
    link: { url: '/' },
    hasWhiteBackground: true,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ListingCardComponent>

export const ListingCard: Story = {
  render: (args) => <ListingCardComponent {...args} />,
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const ListingCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <ListingCardComponent {...args} />
      <ListingCardComponent {...args} />
      <ListingCardComponent {...args} />
    </div>
  ),
}
