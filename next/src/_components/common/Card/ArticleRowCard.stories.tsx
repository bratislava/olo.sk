import type { Meta, StoryObj } from '@storybook/react'

import ArticleRowCardComponent from './ArticleRowCard'

const meta: Meta<typeof ArticleRowCardComponent> = {
  component: ArticleRowCardComponent,
  title: 'Components/Cards/ArticleRowCard',
  args: {
    title: 'ArticleRowCard title',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ArticleRowCardComponent>

export const ArticleRowCard: Story = {
  args: {
    linkHref: '#',
    tagText: 'category',
  },
  render: (args) => <ArticleRowCardComponent {...args} />,
}

export const ArticleRowCardRows: Story = {
  args: {
    linkHref: '#',
    tagText: 'category',
  },
  render: (args) => (
    <div className="mx-auto my-8 flex max-w-[50vw] flex-col gap-4">
      <ArticleRowCardComponent {...args} />
      <ArticleRowCardComponent {...args} />
      <ArticleRowCardComponent {...args} />
      <ArticleRowCardComponent {...args} />
    </div>
  ),
}
