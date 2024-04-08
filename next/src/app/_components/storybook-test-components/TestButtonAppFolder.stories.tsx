import type { Meta, StoryObj } from '@storybook/react'

import TestButtonAppFolderComponent from './TestButtonAppFolder'

const meta: Meta<typeof TestButtonAppFolderComponent> = {
  component: TestButtonAppFolderComponent,
  title: 'Components/TestButtonAppFolder',
}

export default meta
type Story = StoryObj<typeof TestButtonAppFolderComponent>

export const TestButtonAppFolder: Story = {
  render: () => <TestButtonAppFolderComponent />,
}
