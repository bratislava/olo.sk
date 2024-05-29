import type { Meta, StoryObj } from '@storybook/react'

import DocumentRowGroupComponent from './DocumentRowGroup'

const meta: Meta<typeof DocumentRowGroupComponent> = {
  component: DocumentRowGroupComponent,
  title: 'Components/Cards/DocumentRowGroup',
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
type Story = StoryObj<typeof DocumentRowGroupComponent>

export const DocumentRowGroup: Story = {
  args: {
    documentRowCardData: [
      { title: 'Document title 1', linkHref: '#', metaData: ['PDF', '1.2MB'] },
      { title: 'Document title 2', linkHref: '#', metaData: ['DOCX', '5MB'] },
      { title: 'Document title 3', linkHref: '#', metaData: ['PDF', '440GB'] },
    ],
  },
  render: (args) => (
    <div className="w-full max-w-[600px]">
      <DocumentRowGroupComponent {...args} />
    </div>
  ),
}
