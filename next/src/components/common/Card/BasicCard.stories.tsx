import type { Meta, StoryObj } from '@storybook/react'

import BasicCardComponent from './BasicCard'

const meta: Meta<typeof BasicCardComponent> = {
  component: BasicCardComponent,
  title: 'Components/Cards/BasicCard',
  argTypes: {
    hasWhiteBackground: { type: 'boolean' },
  },
  args: {
    title: 'BasicCard title',
    subtext: 'subtext',
    link: { label: 'See more', url: '#' },
    hasWhiteBackground: true,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BasicCardComponent>

export const BasicCard: Story = {
  render: (args) => <BasicCardComponent {...args} />,
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const BasicCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <BasicCardComponent {...args} />
      <BasicCardComponent {...args} />
      <BasicCardComponent {...args} />
    </div>
  ),
}
