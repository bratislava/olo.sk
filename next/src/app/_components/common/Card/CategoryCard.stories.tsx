import type { Meta, StoryObj } from '@storybook/react'

import CategoryCardComponent from './CategoryCard'

const meta: Meta<typeof CategoryCardComponent> = {
  component: CategoryCardComponent,
  title: 'Components/Cards/CategoryCard',
  args: {
    title: 'Category card title',
    linkHref: '#',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CategoryCardComponent>

export const CategoryCard: Story = {
  render: (args) => <CategoryCardComponent {...args} />,
}

export const CategoryCardRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <CategoryCardComponent {...args} />
      <CategoryCardComponent {...args} />
      <CategoryCardComponent {...args} />
      <CategoryCardComponent {...args} />
    </div>
  ),
}
