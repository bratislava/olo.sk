import type { Meta, StoryObj } from '@storybook/react'

import imagePlaceholder from '@/src/assets/images/olo-truck.jpg'
import { GalleryHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderGalleryComponent from './PageHeaderGallery'

type Props = GalleryHeaderSectionFragment

const meta: Meta<Props> = {
  title: 'Page Headers/Galéria',
  args: {
    title: 'KOLO Pestovateľská',
    text: 'Lorem ipsum dolor sit amet consectetur. Nisi non integer fringilla vel arcu vitae iaculis lorem. Semper at vestibulum massa ut nulla quisque tortor a aliquam. Enim vitae rhoncus sed dictum viverra pellentesque tincidunt convallis nulla. Aliquam diam ultrices aliquam diam venenatis.',
    medias: {
      data: [
        { attributes: { url: imagePlaceholder.src, name: 'placeholder' } },
        { attributes: { url: imagePlaceholder.src, name: 'placeholder' } },
        { attributes: { url: imagePlaceholder.src, name: 'placeholder' } },
      ],
    },
  },
}

type Story = StoryObj<Props>

export const PageHeaderGallery: Story = {
  name: 'Galéria',
  render: (args: Props) => (
    <PageHeaderGalleryComponent
      header={{
        ...args,
      }}
    />
  ),
}

export default meta
