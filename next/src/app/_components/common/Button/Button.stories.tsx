/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import ButtonComponent, { PolymorphicProps } from './Button'

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'Components/Button',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ButtonComponent>

export const Button: Story = {
  args: {
    variant: 'category-solid',
    asLink: true,
    href: '#',
    children: 'Button',
    hasLinkIcon: true,
  } satisfies PolymorphicProps,
}
