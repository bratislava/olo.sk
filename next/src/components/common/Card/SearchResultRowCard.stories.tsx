import type { Meta, StoryObj } from '@storybook/react'

import templateImage from '@/src/assets/images/olo-truck.jpg'

import SearchResultRowCardComponent from './SearchResultRowCard'

const meta: Meta<typeof SearchResultRowCardComponent> = {
  component: SearchResultRowCardComponent,
  title: 'Components/Cards/SearchResultRowCard',
  argTypes: {},
  args: {
    title: 'SearchResultRowCard title',
    linkHref: '#',
    metadata: ['Kategória', '8. november, 2023'],
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SearchResultRowCardComponent>

export const SearchResultRowCard: Story = {
  render: (args) => <SearchResultRowCardComponent {...args} imgSrc={templateImage.src} />,
}

export const SearchResultRowCardRows: Story = {
  render: (args) => (
    <div className="flex flex-col">
      <SearchResultRowCardComponent {...args} imgSrc={templateImage.src} />
      <SearchResultRowCardComponent {...args} type="documents" />
      <SearchResultRowCardComponent {...args} type="pages" />
    </div>
  ),
}
