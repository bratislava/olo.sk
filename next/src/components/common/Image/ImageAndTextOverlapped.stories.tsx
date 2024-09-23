// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { OloTruckImage } from '@/src/assets/images'
import { ImageAndTextOverlappedProps } from '@/src/components/common/Image/ImageAndTextOverlapped'
import {
  Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor as Enum_Backgroundcolor,
  Enum_Componentsectionsimageandtextoverlapped_Imageposition as Enum_Imageposition,
} from '@/src/services/graphql/api'

import ImageAndTextOverlappedComponent from './ImageAndTextOverlapped'

type Props = ImageAndTextOverlappedProps

const meta: Meta<Props> = {
  // eslint-disable-next-line no-secrets/no-secrets
  title: 'Components/Image',
  component: ImageAndTextOverlappedComponent,
  tags: ['autodocs'],
  args: {
    title:
      'Zhodnocovaním odpadu robíme radosť deťom, z ktorých sme vyrástli, aj ďalším generáciám.',
    imagePosition: Enum_Imageposition.Left,
    backgroundColor: Enum_Backgroundcolor.Secondary,
    image: {
      data: {
        attributes: {
          url: OloTruckImage.src,
        },
      },
    },
  },
  parameters: {
    controls: { exclude: ['image', 'text', 'readMoreLink'] },
  },
}

export default meta

type Story = StoryObj<Props>

export const ImageAndTextOverlapped: Story = {
  render: (args) => <ImageAndTextOverlappedComponent {...args} />,
}
