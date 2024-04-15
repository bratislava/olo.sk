/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import TagComponent from './Tag'

const meta: Meta<typeof TagComponent> = {
  component: TagComponent,
  title: 'Components/Tag',
}

export default meta
type Story = StoryObj<typeof TagComponent>

export const Tag: Story = {
  args: {
    text: 'category',
    variant: 'without-bg',
  },
}
