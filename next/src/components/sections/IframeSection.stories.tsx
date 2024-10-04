// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { IframeSectionFragment } from '@/src/services/graphql/api'

import IframeSectionComponent from './IframeSection'

type Props = IframeSectionFragment & Exclude<IframeSectionFragment, 'typename'>

const meta: Meta<Props> = {
  title: 'Sections/Iframe',
  args: {
    title: 'Section title',
    text: '',
    iframeTitle: 'Lorem ipsum dolor sit amet',
    url: 'https://olo.venzeo.com/publicView/87a15623e28d126b9d70b53c44c75889b10a2bae5d0979aeb7/list',
    body: 'Lorem ipsum dolor sit amet. Hic voluptas **deserunt sit suscipit saepe** ad error facilis ea illo nulla est maxime deleniti et pariatur autem. Non velit unde et expedita iure ea magnam velit ut illum quia id quos nisi. Aut **minima modi qui mollitia voluptatibus** ut quaerat omnis.',
  },
}

export default meta

type Story = StoryObj<Props>

export const IframeSection: Story = {
  name: 'Iframe',
  render: (args) => <IframeSectionComponent section={args} />,
}
