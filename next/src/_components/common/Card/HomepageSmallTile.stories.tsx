import type { Meta, StoryObj } from '@storybook/react'

import HomepageSmallTileComponent from './HomepageSmallTile'

const meta: Meta<typeof HomepageSmallTileComponent> = {
  component: HomepageSmallTileComponent,
  title: 'Components/Cards/HomepageSmallTile',
  args: {
    title: 'HomepageSmallTile title',
    linkHref: '#',
    iconName: 'domcek',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HomepageSmallTileComponent>

export const HomepageSmallTile: Story = {
  render: (args) => <HomepageSmallTileComponent {...args} />,
}

export const HomepageSmallTileRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <HomepageSmallTileComponent {...args} />
      <HomepageSmallTileComponent {...args} />
      <HomepageSmallTileComponent {...args} />
      <HomepageSmallTileComponent {...args} />
    </div>
  ),
}
