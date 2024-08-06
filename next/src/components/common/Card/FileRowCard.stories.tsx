import type { Meta, StoryObj } from '@storybook/react'

import FileRowCardComponent from './FileRowCard'

const meta: Meta<typeof FileRowCardComponent> = {
  component: FileRowCardComponent,
  title: 'Components/Cards/FileRowCard',
  argTypes: {
    hasBottomBorder: { control: 'boolean' },
  },
  args: {
    title: 'FileRowCard title',
    linkHref: '#',
    metaData: ['Formát', '1.2MB'],
    hasBottomBorder: false,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FileRowCardComponent>

export const FileRowCard: Story = {
  render: (args) => <FileRowCardComponent {...args} />,
}

export const FileRowCardRows: Story = {
  args: {
    hasBottomBorder: true,
  },
  render: (args) => (
    <div className="flex flex-col">
      <FileRowCardComponent {...args} />
      <FileRowCardComponent {...args} />
      <FileRowCardComponent {...args} />
      <FileRowCardComponent {...args} hasBottomBorder={false} />
    </div>
  ),
}
