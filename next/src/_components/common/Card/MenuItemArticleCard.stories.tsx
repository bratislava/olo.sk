import type { Meta, StoryObj } from '@storybook/react'

import MenuItemArticleCardComponent from './MenuItemArticleCard'

const meta: Meta<typeof MenuItemArticleCardComponent> = {
  component: MenuItemArticleCardComponent,
  title: 'Components/Cards/MenuItemArticleCard',
  args: {
    title: 'MenuItemArticleCard title',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MenuItemArticleCardComponent>

export const MenuItemArticleCard: Story = {
  args: {
    linkHref: '#',
    tagText: 'category',
  },
  render: (args) => <MenuItemArticleCardComponent {...args} />,
}

export const MenuItemArticleCardRows: Story = {
  args: {
    linkHref: '#',
    tagText: 'category',
  },
  render: (args) => (
    <div className="mx-auto my-8 flex max-w-[50vw] flex-col gap-4">
      <MenuItemArticleCardComponent {...args} />
      <MenuItemArticleCardComponent {...args} />
      <MenuItemArticleCardComponent {...args} />
      <MenuItemArticleCardComponent {...args} />
    </div>
  ),
}
