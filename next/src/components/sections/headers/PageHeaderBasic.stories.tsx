import type { Meta, StoryObj } from '@storybook/react'

import { BasicHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderBasicComponent from './PageHeaderBasic'

type Props = BasicHeaderSectionFragment

const meta: Meta<Props> = {
  title: 'Page Headers/Basic',
  args: {
    title: 'Nevyviezli mi odpad',
    text: 'Lorem ipsum dolor sit amet consectetur. Nisi non integer fringilla vel arcu vitae iaculis lorem. Semper at vestibulum massa ut nulla quisque tortor a aliquam. Enim vitae rhoncus sed dictum viverra pellentesque tincidunt convallis nulla. Aliquam diam ultrices aliquam diam venenatis.',
  },
}

type Story = StoryObj<Props>

export const PageHeaderBasic: Story = {
  name: 'Basic',
  render: (args: Props) => (
    <PageHeaderBasicComponent
      header={{
        ...args,
      }}
    />
  ),
}

export default meta
