/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import LinkComponent from './Link'

const meta: Meta<typeof LinkComponent> = {
  component: LinkComponent,
  title: 'Components/Link',
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'text' },
    variant: {
      options: ['unstyled', 'underlineOnHover', 'underlined'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof LinkComponent>

export const Link: Story = {
  args: {
    variant: 'underlined',
    className: '',
    href: '#',
    children: 'Link',
  },
  render: (args) => <LinkComponent {...args} />,
}
