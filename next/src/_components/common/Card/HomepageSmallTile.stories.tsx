import type { Meta, StoryObj } from '@storybook/react'

import HomepageSmallTileComponent from './HomepageSmallTile'

const meta: Meta<typeof HomepageSmallTileComponent> = {
  component: HomepageSmallTileComponent,
  title: 'Components/Cards/HomepageSmallTile',
  argTypes: {
    hasWhiteBackground: { type: 'boolean' },
  },
  args: {
    title: 'HomepageSmallTile title',
    linkHref: '#',
    iconName: 'domcek',
    hasWhiteBackground: true,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HomepageSmallTileComponent>

export const HomepageSmallTile: Story = {
  render: (args) => <HomepageSmallTileComponent {...args} />,
  decorators: [
    (Story) => (
      <div className="flex flex-col items-center">
        <Story />
      </div>
    ),
  ],
}

export const HomepageSmallTileRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <HomepageSmallTileComponent {...args} />
      <HomepageSmallTileComponent {...args} />
      <HomepageSmallTileComponent {...args} />
    </div>
  ),
}
