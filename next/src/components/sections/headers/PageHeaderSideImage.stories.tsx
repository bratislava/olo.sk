import type { Meta, StoryObj } from '@storybook/react'

import imagePlaceholder from '@/src/assets/images/olo-truck.jpg'
import { SideImageHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderSideImageComponent, { PageHeaderSideImageProps } from './PageHeaderSideImage'

type Props = SideImageHeaderSectionFragment & {
  imageUrl: string
} & Pick<PageHeaderSideImageProps, 'breadcrumbs' | 'title' | 'perex'>

const meta: Meta<Props> = {
  title: 'Page Headers/Obrázok vpravo',
  args: {
    title: 'KOLO Karlovka',
    perex:
      'Lorem ipsum dolor sit amet consectetur. Nisi non integer fringilla vel arcu vitae iaculis lorem. Semper at vestibulum massa ut nulla quisque tortor a aliquam. Enim vitae rhoncus sed dictum viverra pellentesque tincidunt convallis nulla. Aliquam diam ultrices aliquam diam venenatis.',
    imageUrl: imagePlaceholder.src,
    breadcrumbs: [
      { title: 'KOLO - Bratislavské centrum opätovného použitia', path: '#' },
      { title: 'KOLO Karlovka', path: '#' },
    ],
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
      {...args}
    />
  ),
}

export default meta
