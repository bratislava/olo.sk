import type { Meta, StoryObj } from '@storybook/react'

import MenuItemWorkshopCardComponent from './MenuItemWorkshopCard'

const meta: Meta<typeof MenuItemWorkshopCardComponent> = {
  component: MenuItemWorkshopCardComponent,
  title: 'Components/Cards/MenuItemWorkshopCard',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MenuItemWorkshopCardComponent>

export const MenuItemWorkshopCard: Story = {
  args: {
    title: 'Title',
    linkHref: '#',
    subText: 'Najbližší termín: 21. február 2024 o 9:00',
  },
  render: (args) => <MenuItemWorkshopCardComponent {...args} />,
}

const workshopCardRowsData = [
  {
    title: 'Title',
    linkHref: '#',
    subText: 'Najbližší termín: 21. február 2024 o 9:00',
  },
  {
    title: 'Title',
    linkHref: '#',
    subText: 'Najbližší termín: 26. február 2024 o 10:00',
  },
  {
    title: 'Title',
    linkHref: '#',
    subText: 'Najbližší termín: 18. marec 2024 o 10:00',
  },
]

export const MenuItemWorkshopCardRows: Story = {
  render: () => (
    <ul className="mx-auto my-8 flex max-w-[50vw] flex-col divide-y divide-border-default bg-background-primary px-8">
      {workshopCardRowsData.map((workshopCard) => (
        <MenuItemWorkshopCardComponent
          key={workshopCard.title}
          {...workshopCard}
          className="py-5"
        />
      ))}
    </ul>
  ),
}
