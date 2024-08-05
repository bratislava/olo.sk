/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import BadgeComponent from './Badge'

const variantsToRender = {
  public: 'Pre občanov',
  firms: 'Pre firmy',
  institutions: 'Pre správcovské organizácie',
}

const meta: Meta<typeof BadgeComponent> = {
  component: BadgeComponent,
  title: 'Components/Badge',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BadgeComponent>

export const Badge: Story = {
  args: {
    variant: Object.keys(variantsToRender)[0] as keyof typeof variantsToRender,
    label: variantsToRender.public,
  },
  parameters: {
    controls: { exclude: ['label', 'className'] },
  },
  render: (args) => (
    <div className="flex flex-col items-start">
      <BadgeComponent
        label={variantsToRender[args.variant as keyof typeof variantsToRender]}
        variant={args.variant}
      />
    </div>
  ),
}

export const AllBadges: Story = {
  name: 'All badge variants',
  render: () => {
    return (
      <div className="flex items-center justify-center gap-4">
        {Object.keys(variantsToRender).map((variant: any) => (
          <BadgeComponent
            label={variantsToRender[variant as keyof typeof variantsToRender]}
            key={variant}
            variant={variant}
          />
        ))}
      </div>
    )
  },
}
