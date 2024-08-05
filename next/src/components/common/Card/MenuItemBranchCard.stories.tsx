import type { Meta, StoryObj } from '@storybook/react'

import NavBarDivider from '@/src/components/common/NavBar/NavBarDivider'

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
    <div className="mx-auto my-8 flex max-w-[50vw] flex-col bg-background-primary px-8 py-6">
      {branchCardRowsData.map((branchCard, index) => (
        <>
          {index > 0 && <NavBarDivider variant="horizontal" className="py-6" />}
          {/* eslint-disable-next-line react/no-array-index-key */}
          <MenuItemBranchCardComponent key={index} {...branchCard} />
        </>
      ))}
    </div>
  ),
}
