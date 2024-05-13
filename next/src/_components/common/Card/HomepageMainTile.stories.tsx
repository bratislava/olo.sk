import type { Meta, StoryObj } from '@storybook/react'

import HomepageMainTileComponent from './HomepageMainTile'

const meta: Meta<typeof HomepageMainTileComponent> = {
  component: HomepageMainTileComponent,
  title: 'Components/Cards/HomepageMainTile',
  args: {
    title: 'HomepageMainTile title',
    linkHref: '#',
    variant: 'background-yellow',
    text: 'text text text',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HomepageMainTileComponent>

export const HomepageMainTile: Story = {
  render: (args) => <HomepageMainTileComponent {...args} />,
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const HomepageMainTileRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-4 [&>*]:h-[200px] [&>*]:basis-[280px]">
      <HomepageMainTileComponent {...args} />
      <HomepageMainTileComponent {...args} />
      <HomepageMainTileComponent {...args} />
    </div>
  ),
}
