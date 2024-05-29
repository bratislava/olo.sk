import type { Meta, StoryObj } from '@storybook/react'

import MenuItemWorkshopCardComponent from './MenuItemWorkshopCard'

const meta: Meta<typeof MenuItemWorkshopCardComponent> = {
  component: MenuItemWorkshopCardComponent,
  title: 'Components/Cards/MenuItemWorkshopCard',
  args: {
    title: 'Title',
    linkHref: '#',
    subText: 'Najbližší termín: 21. február 2024 o 9:00',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MenuItemWorkshopCardComponent>

export const MenuItemWorkshopCard: Story = {
  render: (args) => <MenuItemWorkshopCardComponent {...args} />,
}

export const MenuItemWorkshopCardRows: Story = {
  render: (args) => (
    <div className="mx-auto my-8 flex max-w-[50vw] flex-col gap-4">
      <MenuItemWorkshopCardComponent {...args} />
      <MenuItemWorkshopCardComponent {...args} />
      <MenuItemWorkshopCardComponent {...args} />
      <MenuItemWorkshopCardComponent {...args} />
    </div>
  ),
}
