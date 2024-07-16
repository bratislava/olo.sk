// eslint-disable-next-line import/no-extraneous-dependencies
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import PaginationWithInputComponent from './PaginationWithInput'

const meta: Meta<typeof PaginationWithInputComponent> = {
  component: PaginationWithInputComponent,
  title: 'Components/Pagination/PaginationWithInput',
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
type Story = StoryObj<typeof PaginationWithInputComponent>

export const PaginationWithInput: Story = {
  render: (props) => {
    const [{ currentPage }, updateArgs] = useArgs()

    return (
      <PaginationWithInputComponent
        {...props}
        currentPage={currentPage}
        onPageChange={(pageNumber) => updateArgs({ currentPage: pageNumber })}
      />
    )
  },
}
