/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import BadgeComponent from './Badge'

const meta: Meta<typeof BadgeComponent> = {
  component: BadgeComponent,
  title: 'Components/Badge',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BadgeComponent>

export const Badge: Story = {
  args: {
    text: 'Pre obyvateľov',
    variant: 'public',
  },
  render: (args) => (
    <div className="flex flex-col items-start">
      <BadgeComponent {...args} />
    </div>
  ),
}

const dummyData = ['Pre obyvateľov', 'Pre firmy', 'Pre správcovské organizácie']

export const AllBadges: Story = {
  name: 'All badge variants',
  parameters: {
    controls: { exclude: ['variant'] },
  },
  render: () => {
    const variantsToRender = ['public', 'firms', 'institutions']

    return (
      <div className="flex items-center justify-center gap-4">
        {variantsToRender.map((variant: any, index: number) => (
          <BadgeComponent key={variant} variant={variant} text={dummyData[index]} />
        ))}
      </div>
    )
  },
}
