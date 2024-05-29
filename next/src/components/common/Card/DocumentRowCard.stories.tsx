import type { Meta, StoryObj } from '@storybook/react'

import DocumentRowCardComponent from './DocumentRowCard'

const meta: Meta<typeof DocumentRowCardComponent> = {
  component: DocumentRowCardComponent,
  title: 'Components/Cards/DocumentRowCard',
  argTypes: {
    hasBottomBorder: { control: 'boolean' },
  },
  args: {
    title: 'DocumentRowCard title',
    linkHref: '#',
    metaData: ['Formát', '1.2MB'],
    hasBottomBorder: false,
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DocumentRowCardComponent>

export const DocumentRowCard: Story = {
  render: (args) => <DocumentRowCardComponent {...args} />,
}

export const DocumentRowCardRows: Story = {
  args: {
    hasBottomBorder: true,
  },
  render: (args) => (
    <div className="flex flex-col">
      <DocumentRowCardComponent {...args} />
      <DocumentRowCardComponent {...args} />
      <DocumentRowCardComponent {...args} />
      <DocumentRowCardComponent {...args} hasBottomBorder={false} />
    </div>
  ),
}
