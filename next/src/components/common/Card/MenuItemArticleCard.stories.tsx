import type { Meta, StoryObj } from '@storybook/react'

import MenuItemArticleCardComponent from './MenuItemArticleCard'

const meta: Meta<typeof MenuItemArticleCardComponent> = {
  component: MenuItemArticleCardComponent,
  title: 'Components/Cards/MenuItemArticleCard',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MenuItemArticleCardComponent>

export const MenuItemArticleCard: Story = {
  args: {
    title: 'Title',
    linkHref: '#',
    tagText: 'category',
  },
  render: (args) => <MenuItemArticleCardComponent {...args} />,
}

const articlesCardRowsData = [
  {
    title: 'Title',
    linkHref: '#',
    tagText: 'category',
  },
  {
    title: 'Title',
    linkHref: '#',
    tagText: 'category',
  },
  {
    title: 'Title',
    linkHref: '#',
    tagText: 'category',
  },
]

export const MenuItemArticleCardRows: Story = {
  render: () => (
    <ul className="mx-auto my-8 flex max-w-[50vw] flex-col divide-y divide-border-default bg-background-primary px-8">
      {articlesCardRowsData.map((articleCard) => (
        <MenuItemArticleCardComponent key={articleCard.title} {...articleCard} className="py-5" />
      ))}
    </ul>
  ),
}
