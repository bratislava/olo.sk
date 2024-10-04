// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import {
  Enum_Componentsectionsiframesection_Backgroundcolor,
  IframeSectionFragment,
} from '@/src/services/graphql/api'

import IframeSectionComponent from './IframeSection'

type Props = IframeSectionFragment & Exclude<IframeSectionFragment, 'typename'>

const meta: Meta<Props> = {
  title: 'Sections/Iframe',
  args: {
    title: 'Section title',
    text: '',
    backgroundColorIframe: Enum_Componentsectionsiframesection_Backgroundcolor.Secondary,
    iframeTitle: 'Lorem ipsum dolor sit amet',
    url: 'https://www.youtube.com/embed/8QBjTTCj2JA',
    body: 'Lorem ipsum dolor sit amet. Hic voluptas **deserunt sit suscipit saepe** ad error facilis ea illo nulla est maxime deleniti et pariatur autem. Non velit unde et expedita iure ea magnam velit ut illum quia id quos nisi. Aut **minima modi qui mollitia voluptatibus** ut quaerat omnis.',
  },
}

export default meta

type Story = StoryObj<Props>

export const IframeSection: Story = {
  name: 'Iframe',
  render: (args) => <IframeSectionComponent section={args} />,
}
