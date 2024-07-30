import type { Meta, StoryObj } from '@storybook/react'

import imagePlaceholder from '@/src/assets/images/olo-truck.jpg'
import { SideImageHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderSideImageComponent from './PageHeaderSideImage'

type Props = SideImageHeaderSectionFragment & {
  title: string
  perex?: string
  imageUrl: string
}

const meta: Meta<Props> = {
  title: 'Page Headers/Obrázok vpravo',
  args: {
    title: 'KOLO – Bratislavské centrum opätovného použitia',
    perex: '',
    imageUrl: imagePlaceholder.src,
  },
}

type Story = StoryObj<Props>

export const PageHeaderSideImage: Story = {
  name: 'Obrázok vpravo',
  render: (args: Props) => (
    <PageHeaderSideImageComponent
      header={{
        ...args,
        media: {
          data: {
            attributes: { url: args.imageUrl, name: 'placeholder' },
          },
        },
      }}
      title={args.title}
      perex={args.perex}
      breadcrumbs={[]}
    />
  ),
}

export default meta
