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
  hasPrimaryButton: boolean
  primaryButtonLabel: string
  hasSecondaryButton: boolean
  secondaryButtonLabel: string
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
    hasPrimaryButton: true,
    primaryButtonLabel: 'primary',
    hasSecondaryButton: true,
    secondaryButtonLabel: 'secondary',
  },
  argTypes: {
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
    primaryButtonLabel: {
      if: { arg: 'hasPrimaryButton' },
    },
    secondaryButtonLabel: {
      if: { arg: 'hasSecondaryButton' },
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
        primaryButton: args.hasPrimaryButton
          ? { label: args.primaryButtonLabel, url: '' }
          : undefined,
        secondaryButton: args.hasSecondaryButton
          ? { label: args.secondaryButtonLabel, url: '' }
          : undefined,
      }}
    />
  ),
}

export default meta
