import type { Meta, StoryObj } from '@storybook/react'

import WasteSortingCardComponent from './WasteSortingCard'

const meta: Meta<typeof WasteSortingCardComponent> = {
  component: WasteSortingCardComponent,
  title: 'Components/Cards/WasteSortingCard',
  argTypes: {
    hasWhiteBackground: { type: 'boolean' },
  },
  args: {
    title: 'WasteSortingCard title',
    linkHref: '#',
    wasteType: 'paper',
    hasWhiteBackground: true,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WasteSortingCardComponent>

export const WasteSortingCard: Story = {
  render: (args) => <WasteSortingCardComponent {...args} />,
  decorators: [
    (Story) => (
      <div className="w-[280px]">
        <Story />
      </div>
    ),
  ],
}

export const WasteSortingCardsAll: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-2 [&>*]:basis-[280px]">
      <WasteSortingCardComponent {...{ ...args, wasteType: 'paper' }} />
      <WasteSortingCardComponent {...{ ...args, wasteType: 'plastic' }} />
      <WasteSortingCardComponent {...{ ...args, wasteType: 'glass' }} />
      <WasteSortingCardComponent {...{ ...args, wasteType: 'cookingOilsAndFats' }} />
      <WasteSortingCardComponent {...{ ...args, wasteType: 'organic' }} />
      <WasteSortingCardComponent {...{ ...args, wasteType: 'mixed' }} />
      <WasteSortingCardComponent {...{ ...args, wasteType: 'civicAmenitySite' }} />
      <WasteSortingCardComponent {...{ ...args, wasteType: 'kitchen' }} />
    </div>
  ),
}
