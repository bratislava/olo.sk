import type { Meta, StoryObj } from '@storybook/react'

import { iconNameMap } from '@/src/components/common/Icon/Icon'
import { oloIconNameMap } from '@/src/components/common/Icon/OloIcon'
import { IconHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderIconComponent from './PageHeaderIcon'

type Props = IconHeaderSectionFragment & {
  title: string
  perex?: string
}

const meta: Meta<Props> = {
  title: 'Page Headers/Ikonka',
  args: {
    title: 'Nevyviezli mi odpad',
    perex:
      'Lorem ipsum dolor sit amet consectetur. Nisi non integer fringilla vel arcu vitae iaculis lorem. Semper at vestibulum massa ut nulla quisque tortor a aliquam. Enim vitae rhoncus sed dictum viverra pellentesque tincidunt convallis nulla. Aliquam diam ultrices aliquam diam venenatis.',
    iconName: 'pomoc',
  },
  argTypes: {
    iconName: {
      control: { type: 'select' },
      options: [...Object.keys(iconNameMap), ...Object.keys(oloIconNameMap)].sort(),
    },
  },
}

type Story = StoryObj<Props>

export const PageHeaderIcon: Story = {
  name: 'Ikonka',
  render: (args: Props) => (
    <PageHeaderIconComponent
      header={{ iconName: args.iconName }}
      title={args.title}
      perex={args.perex}
    />
  ),
}

export default meta
