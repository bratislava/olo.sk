import type { Meta, StoryObj } from '@storybook/react'

import templateImage from '@/assets/images/olo-truck.jpg'

import SearchResultRowCardComponent from './SearchResultRowCard'

const meta: Meta<typeof SearchResultRowCardComponent> = {
  component: SearchResultRowCardComponent,
  title: 'Components/Cards/SearchResultRowCard',
  argTypes: {},
  args: {
    title: 'SearchResultRowCard title',
    linkHref: '#',
    metadata: ['Kategória', '8. november, 2023'],
    // iconName: 'disk', // temporary icon
    // imgSrc: '/next/src/assets/images/olo-truck.jpg',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SearchResultRowCardComponent>

export const SearchResultRowCard: Story = {
  render: (args) => <SearchResultRowCardComponent {...args} />,
}

export const SearchResultRowCardRows: Story = {
  render: (args) => (
    <div className="flex flex-col">
      <SearchResultRowCardComponent {...args} imgSrc={templateImage.src} />
      <SearchResultRowCardComponent {...args} iconName="fotoaparat" />
      <SearchResultRowCardComponent {...args} iconName="kniha" />
      <SearchResultRowCardComponent {...args} iconName="pdf" />
    </div>
  ),
}
