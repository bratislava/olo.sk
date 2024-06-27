import type { Meta, StoryObj } from '@storybook/react'

import imagePlaceholder from '@/src/assets/images/olo-truck.jpg'
import { FeaturedNewsHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderFeaturedNewsComponent from './PageHeaderFeaturedNews'

type Props = FeaturedNewsHeaderSectionFragment

const dummyArticleData = {
  attributes: {
    title: 'Article',
    slug: '',
    category: { data: { attributes: { title: 'Category', slug: '' } } },
    addedAt: '2021-09-01',
    coverMedia: { data: { attributes: { url: imagePlaceholder.src, name: 'placeholder' } } },
  },
}

const meta: Meta<Props> = {
  title: 'Page Headers/Aktuality (články)',
  args: {
    title: 'Aktuality',
    text: 'Lorem ipsum dolor sit amet consectetur. Nisi non integer fringilla vel arcu vitae iaculis lorem. Semper at vestibulum massa ut nulla quisque tortor a aliquam. Enim vitae rhoncus sed dictum viverra pellentesque tincidunt convallis nulla. Aliquam diam ultrices aliquam diam venenatis.',
    articlesTitle: 'Headline',
    firstArticle: { data: dummyArticleData },
    secondArticle: { data: dummyArticleData },
  },
}

type Story = StoryObj<Props>

export const PageHeaderFeaturedNews: Story = {
  name: 'Aktuality (články)',
  render: (args: Props) => (
    <PageHeaderFeaturedNewsComponent
      header={{
        ...args,
      }}
    />
  ),
}

export default meta
