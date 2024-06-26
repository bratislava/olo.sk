import type { Meta, StoryObj } from '@storybook/react'

import placeholderIconUrl from '@/src/assets/icons/pomoc.svg?url'
import { IconHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderIconComponent from './PageHeaderIcon'

type Props = IconHeaderSectionFragment

const meta: Meta<Props> = {
  title: 'Page Headers/Ikonka',
  args: {
    title: 'Nevyviezli mi odpad',
    text: 'Lorem ipsum dolor sit amet consectetur. Nisi non integer fringilla vel arcu vitae iaculis lorem. Semper at vestibulum massa ut nulla quisque tortor a aliquam. Enim vitae rhoncus sed dictum viverra pellentesque tincidunt convallis nulla. Aliquam diam ultrices aliquam diam venenatis.',
  },
}

type Story = StoryObj<Props>

export const PageHeaderIcon: Story = {
  name: 'Ikonka',
  render: (args: Props) => (
    <PageHeaderIconComponent
      header={{
        ...args,
        icon: { data: { attributes: { name: 'icon-1', url: placeholderIconUrl } } },
      }}
    />
  ),
}

export default meta
