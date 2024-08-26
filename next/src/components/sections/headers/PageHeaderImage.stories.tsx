import type { Meta, StoryObj } from '@storybook/react'

import imagePlaceholder from '@/src/assets/images/olo-truck.jpg'
import { ImageHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderImageComponent from './PageHeaderImage'

type Props = ImageHeaderSectionFragment & {
  title: string
  perex?: string
  imageUrl: string
}

const meta: Meta<Props> = {
  title: 'Page Headers/Obrázok',
  args: {
    title: 'Modernizácia a ekologizácia',
    perex: '',
    imageUrl: imagePlaceholder.src,
  },
}

type Story = StoryObj<Props>

export const PageHeaderImage: Story = {
  name: 'Obrázok',
  render: (args: Props) => (
    <PageHeaderImageComponent
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
    />
  ),
}

export default meta
