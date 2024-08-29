import type { Meta, StoryObj } from '@storybook/react'

import FileRowGroupComponent from './FileRowGroup'

const meta: Meta<typeof FileRowGroupComponent> = {
  component: FileRowGroupComponent,
  title: 'Components/Cards/FileRowGroup',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof FileRowGroupComponent>

export const FileRowGroup: Story = {
  args: {
    fileRowCardData: [
      { title: 'File title 1', linkHref: '#', metaData: ['PDF', '1.2MB'] },
      { title: 'File title 2', linkHref: '#', metaData: ['DOCX', '5MB'] },
      { title: 'File title 3', linkHref: '#', metaData: ['PDF', '440GB'] },
    ],
  },
  render: (args) => (
    <div className="w-full">
      <FileRowGroupComponent {...args} />
    </div>
  ),
}
