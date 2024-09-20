import type { Meta, StoryObj } from '@storybook/react'

import imagePlaceholder from '@/src/assets/images/olo-truck.jpg'
import {
  Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor,
  Enum_Componentsectionsimageandtextoverlapped_Imageposition,
  ImageAndTextOverlappedSectionFragment,
} from '@/src/services/graphql/api'

import ImageAndTextOverlappedSectionComponent from './ImageAndTextOverlappedSection'

type Props = ImageAndTextOverlappedSectionFragment & {
  imageUrl: string
  buttonLabel: string
}

const meta: Meta<Props> = {
  title: 'Sections/Image And Text Overlapped',
  args: {
    title: 'O nás',
    text: 'Sme mestský podnik OLO a.s. a stabilne pôsobíme na trhu už 30 rokov. Naším poslaním je zhodnocovať odpad a zabezpečiť kvalitné služby v oblasti zberu a odvozu komunálneho a drobného stavebného odpadu. Služby poskytujeme obyvateľom s trvalým alebo prechodným pobytom na území Bratislavy a právnickým osobám, ktoré vykonávajú svoju činnosť na území Bratislavy.',
    backgroundColorImageAndTextOverlapped:
      Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor.Secondary,
    imagePositionImageAndTextOverlapped:
      Enum_Componentsectionsimageandtextoverlapped_Imageposition.Left,
    imageUrl: imagePlaceholder.src,
    buttonLabel: 'Read more',
  },
  argTypes: {
    buttonLabel: {
      control: {
        type: 'text',
      },
    },
    backgroundColorImageAndTextOverlapped: {
      name: 'backgroundColor',
      options: Object.values(Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor),
      control: {
        type: 'inline-radio',
      },
    },
    imagePositionImageAndTextOverlapped: {
      name: 'imagePosition',
      options: Object.values(Enum_Componentsectionsimageandtextoverlapped_Imageposition),
      control: {
        type: 'inline-radio',
      },
    },
  },
}

type Story = StoryObj<Props>

export const ImageAndTextOverlappedSection: Story = {
  name: 'Image And Text Overlapped',
  render: (args) => (
    <ImageAndTextOverlappedSectionComponent
      section={{
        ...args,
        image: { data: { attributes: { url: args.imageUrl, name: '' } } },
        readMoreLink: { label: args.buttonLabel, url: '#' },
      }}
    />
  ),
}

export default meta
