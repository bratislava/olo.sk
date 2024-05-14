import type { Meta, StoryObj } from '@storybook/react'

import FaqCategoryCardComponent from './FaqCategoryCard'

const meta: Meta<typeof FaqCategoryCardComponent> = {
  component: FaqCategoryCardComponent,
  title: 'Components/Cards/FaqCategoryCard',
  argTypes: {
    hasWhiteBackground: { type: 'boolean' },
  },
  args: {
    title: 'FaqCategoryCard title',
    linkHref: '#',
    iconName: 'domcek',
    hasWhiteBackground: true,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FaqCategoryCardComponent>

export const FaqCategoryCard: Story = {
  render: (args) => <FaqCategoryCardComponent {...args} />,
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const FaqCategoryCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <FaqCategoryCardComponent {...args} />
      <FaqCategoryCardComponent {...args} />
      <FaqCategoryCardComponent {...args} />
    </div>
  ),
}
