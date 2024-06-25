import type { Meta, StoryObj } from '@storybook/react'

import imagePlaceholder from '@/src/assets/images/olo-truck.jpg'
import { ImageHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderImageComponent from './PageHeaderImage'

type Props = ImageHeaderSectionFragment & { imageUrl: string }

const meta: Meta<Props> = {
  title: 'Page Headers/Obrázok',
  args: {
    title: 'Modernizácia a ekologizácia',
    text: '',
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
    />
  ),
}

export default meta
