// eslint-disable-next-line import/no-extraneous-dependencies
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import PaginationComponent from './Pagination'

const meta: Meta<typeof PaginationComponent> = {
  component: PaginationComponent,
  title: 'Components/Pagination',
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    totalCount: 20,
  },
  parameters: { controls: { exclude: ['onPageChange'] } },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof PaginationComponent>

export const Pagination: Story = {
  render: (props) => {
    const [{ currentPage }, updateArgs] = useArgs()

    return (
      <PaginationComponent
        {...props}
        currentPage={currentPage}
        onPageChange={(num) => updateArgs({ currentPage: num })}
      />
    )
  },
}
