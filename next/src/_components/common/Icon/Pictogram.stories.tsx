import type { Meta, StoryObj } from '@storybook/react'

import PictogramComponent from './Pictogram'

const meta: Meta<typeof PictogramComponent> = {
  component: PictogramComponent,
  title: 'Components/Pictogram',
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
type Story = StoryObj<typeof PictogramComponent>

export const Pictogram: Story = {
  args: {
    name: 'civicAmenitySite',
  },
}
