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
  decorators: [
    (Story) => (
      <div className="flex justify-center bg-[rgb(245,245,245)] py-10">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ArticleCardComponent>

export const ArticleCard: Story = {
  args: {
    size: 'small',
    className: '',
  },
  render: (args) => <ArticleCardComponent {...args} />,
}

export const ArticleCardsAll: Story = {
  name: 'Article Card - all sizes',
  render: (args) => (
    <div className="flex flex-row gap-8 [&>*]:self-start">
      <ArticleCardComponent {...args} size="small" />
      <ArticleCardComponent {...args} size="medium" />
      <ArticleCardComponent {...args} size="large" />
    </div>
  ),
}
