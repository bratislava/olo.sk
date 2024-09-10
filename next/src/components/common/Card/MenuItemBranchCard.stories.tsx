import type { Meta, StoryObj } from '@storybook/react'

import MenuItemBranchCardComponent from './MenuItemBranchCard'

const meta: Meta<typeof MenuItemBranchCardComponent> = {
  component: MenuItemBranchCardComponent,
  title: 'Components/Cards/MenuItemBranchCard',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MenuItemBranchCardComponent>

export const MenuItemBranchCard: Story = {
  args: {
    title: 'KOLO Pestovateľská',
    linkHref: '#',
    subText: 'Pestovateľská 13, 821 04 Bratislava',
  },
  render: (args) => <MenuItemBranchCardComponent {...args} />,
}

const branchCardRowsData = [
  {
    title: 'KOLO Pestovateľská',
    linkHref: '#',
    subText: 'Pestovateľská 13, 821 04 Bratislava',
  },
  {
    title: 'KOLO Jurigovo námestie',
    linkHref: '#',
    subText: 'Jurigovo námestie, 841 04 Karlova Ves',
  },
]

export const MenuItemBranchCardRows: Story = {
  render: () => (
    <ul className="mx-auto my-8 flex max-w-[50vw] flex-col divide-y divide-border-default bg-background-primary px-8">
      {branchCardRowsData.map((branchCard) => (
        <MenuItemBranchCardComponent key={branchCard.title} {...branchCard} className="py-5" />
      ))}
    </ul>
  ),
}
