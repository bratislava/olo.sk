import type { Meta, StoryObj } from '@storybook/react'

import HomepageTileComponent from './HomepageTile'

const meta: Meta<typeof HomepageTileComponent> = {
  component: HomepageTileComponent,
  title: 'Components/Cards/HomepageTile',
  args: {
    title: 'HomepageTile title',
    linkHref: '#',
    variant: 'small',
    text: 'text text text',
    iconName: 'domcek',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HomepageTileComponent>

export const HomepageTile: Story = {
  render: (args) => <HomepageTileComponent {...args} />,
}

export const HomepageTileRows: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-12 [&>*]:basis-[280px]">
      <HomepageTileComponent {...args} />
      <HomepageTileComponent {...args} />
      <HomepageTileComponent {...args} />
      <HomepageTileComponent {...args} />
    </div>
  ),
}
