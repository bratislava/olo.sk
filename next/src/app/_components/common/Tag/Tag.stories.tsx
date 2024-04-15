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
export const AllTags: Story = {
  args: {
    text: 'category',
  },
  parameters: {
    controls: { exclude: ['variant'] },
  },
  render: (args) => (
    <div className="flex flex-col items-start gap-4">
      <div>
        <p className="mb-1 text-[.7rem]">large</p>
        <TagComponent {...args} variant="large" />
      </div>
      <div>
        <p className="mb-1 text-[.7rem]">small</p>
        <TagComponent {...args} variant="small" />
      </div>
      <div>
        <p className="mb-1 text-[.7rem]">without-bg</p>
        <TagComponent {...args} variant="without-bg" />
      </div>
    </div>
  ),
}
