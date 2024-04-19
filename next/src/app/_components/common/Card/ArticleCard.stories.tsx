/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import ArticleCardComponent from './ArticleCard'

const meta: Meta<typeof ArticleCardComponent> = {
  component: ArticleCardComponent,
  title: 'Components/Cards/ArticleCard',
  args: {
    title: 'ArticleCard title',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ArticleCardComponent>

export const ArticleCard: Story = {
  args: {
    linkHref: '#',
    tagText: 'category',
  },
  render: (args) => <ArticleCardComponent {...args} />,
}

export const ArticleCardRows: Story = {
  args: {
    linkHref: '#',
    tagText: 'category',
  },
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <ArticleCardComponent {...args} />
      <ArticleCardComponent {...args} />
      <ArticleCardComponent {...args} />
      <ArticleCardComponent {...args} />
    </div>
  ),
}
