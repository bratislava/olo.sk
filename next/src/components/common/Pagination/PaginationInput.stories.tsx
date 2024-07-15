// eslint-disable-next-line import/no-extraneous-dependencies
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import PaginationInputComponent from './PaginationInput'

const meta: Meta<typeof PaginationInputComponent> = {
  component: PaginationInputComponent,
  title: 'Components/PaginationInput',
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    totalCount: 20,
  },
  parameters: { controls: { exclude: ['onPageChange', 'currentPage'] } },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof PaginationInputComponent>

export const PaginationInput: Story = {
  render: (props) => {
    const [{ currentPage }, updateArgs] = useArgs()

    return (
      <PaginationInputComponent
        {...props}
        currentPage={currentPage}
        onPageChange={(num) => updateArgs({ currentPage: num })}
      />
    )
  },
}
