import type { Meta, StoryObj } from '@storybook/react'

import WasteSortingCardComponent from './WasteSortingCard'

const meta: Meta<typeof WasteSortingCardComponent> = {
  component: WasteSortingCardComponent,
  title: 'Components/Cards/WasteSortingCard',
  args: {
    title: 'WasteSortingCard title',
    linkHref: '#',
    wasteType: 'paper',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WasteSortingCardComponent>

export const WasteSortingCard: Story = {
  render: (args) => <WasteSortingCardComponent {...args} />,
}

export const WasteSortingCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
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
