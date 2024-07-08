import type { Meta, StoryObj } from '@storybook/react'

import { ArticleCardEntityFragment } from '@/src/services/graphql/api'

import ArticlePageHeaderComponent from './ArticlePageHeader'

type Props = ArticleCardEntityFragment['attributes'] & { categoryTitle: string }

const meta: Meta<Props> = {
  title: 'Page Headers/Article',
  args: {
    title:
      'Takmer 90 % cintorínskeho odpadu sa dá triediť a následne recyklovať, no aj napriek tomu končí v ZEVO či na skládkach. Aké je riešenie?',
    categoryTitle: 'Category',
    addedAt: '2024-10-16',
  },
  argTypes: {
    categoryTitle: { name: 'category title' },
    addedAt: { name: 'added at (in format YYYY-MM-DD)' },
  },
}

type Story = StoryObj<Props>

export const ArticlePageHeader: Story = {
  name: 'Article',
  render: (args: Props) => (
    <ArticlePageHeaderComponent
      article={{
        __typename: 'ArticleEntity' as const,
        attributes: {
          ...args,
          category: { data: { attributes: { title: args.categoryTitle, slug: '' } } },
        },
      }}
    />
  ),
}

export default meta
