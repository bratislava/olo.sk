/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import { twMerge } from 'tailwind-merge'

import ArticleCardComponent from './ArticleCard'

const meta: Meta<typeof ArticleCardComponent> = {
  component: ArticleCardComponent,
  title: 'Components/ArticleCard',
  args: {
    title: 'Article headline',
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
