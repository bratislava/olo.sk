import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import WasteSortingGuideComponent from '@/src/components/common/Accordion/WasteSortingGuide'

const wasteSortingGuideData = {
  leftColumn: {
    columnTitle: 'Patrí sem:',
    columnItems: ['Item 1', 'Item 2', 'Item 3'],
  },
  rightColumn: {
    columnTitle: 'Nepatrí sem:',
    columnItems: ['Item 1', 'Item 2', 'Item 3'],
  },
}

const meta: Meta<typeof WasteSortingGuideComponent> = {
  component: WasteSortingGuideComponent,
  title: 'Components/Accordion/WasteSortingGuide',
  tags: ['autodocs'],
  args: {
    leftColumn: wasteSortingGuideData.leftColumn,
    rightColumn: wasteSortingGuideData.rightColumn,
    className: 'rounded-lg border border-border-default bg-background-primary',
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof WasteSortingGuideComponent>

export const WasteSortingGuide: Story = {
  render: (args) => (
    <div className="w-full min-w-[256px] max-w-[1136px]">
      <WasteSortingGuideComponent {...args} />
    </div>
  ),
}
