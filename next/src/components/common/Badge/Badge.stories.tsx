import type { Meta, StoryObj } from '@storybook/react'

import BadgeComponent, { BadgeProps } from './Badge'

type BadgeVariant = BadgeProps['variant']

const variantsToRender: Record<BadgeVariant, string> = {
  public: 'Pre občanov',
  firms: 'Pre firmy',
  institutions: 'Pre správcovské organizácie',
}

const variantsToRenderKeys = Object.keys(variantsToRender) as BadgeVariant[]

const meta: Meta<typeof BadgeComponent> = {
  component: BadgeComponent,
  title: 'Components/Badge',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BadgeComponent>

export const Badge: Story = {
  args: {
    variant: 'public',
    label: variantsToRender.public,
  },
  parameters: {
    controls: { exclude: ['label', 'className'] },
  },
  render: ({ variant }) => (
    <div className="flex flex-col items-start">
      <BadgeComponent label={variantsToRender[variant]} variant={variant} />
    </div>
  ),
}

export const AllBadges: Story = {
  name: 'All badge variants',
  render: () => {
    return (
      <div className="flex items-center justify-center gap-4">
        {variantsToRenderKeys.map((variant) => (
          <BadgeComponent label={variantsToRender[variant]} key={variant} variant={variant} />
        ))}
      </div>
    )
  },
}
