import type { Meta, StoryObj } from '@storybook/react'

import FaqCategoryCardComponent from './FaqCategoryCard'

const meta: Meta<typeof FaqCategoryCardComponent> = {
  component: FaqCategoryCardComponent,
  title: 'Components/Cards/FaqCategoryCard',
  args: {
    title: 'FAQ category card title',
    linkHref: '#',
    iconName: 'domcek',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FaqCategoryCardComponent>

export const FaqCategoryCard: Story = {
  render: (args) => <FaqCategoryCardComponent {...args} />,
}

export const FaqCategoryCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <FaqCategoryCardComponent {...args} />
      <FaqCategoryCardComponent {...args} />
      <FaqCategoryCardComponent {...args} />
      <FaqCategoryCardComponent {...args} />
    </div>
  ),
}
