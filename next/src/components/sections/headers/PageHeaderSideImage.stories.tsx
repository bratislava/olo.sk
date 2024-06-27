import type { Meta, StoryObj } from '@storybook/react'

import imagePlaceholder from '@/src/assets/images/olo-truck.jpg'
import { SideImageHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderSideImageComponent from './PageHeaderSideImage'

type Props = SideImageHeaderSectionFragment & { imageUrl: string }

const meta: Meta<Props> = {
  title: 'Page Headers/Obrázok vpravo',
  args: {
    title: 'KOLO – Bratislavské centrum opätovného použitia',
    text: '',
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
    />
  ),
}

export default meta
