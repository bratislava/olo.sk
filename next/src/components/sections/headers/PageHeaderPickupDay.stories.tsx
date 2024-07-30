import type { Meta, StoryObj } from '@storybook/react'

import BAQueryClientProvider from '@/src/providers/BAQueryClientProvider'
import { PickupDayHeaderSectionFragment } from '@/src/services/graphql/api'

import PageHeaderPickupDayComponent from './PageHeaderPickupDay'

type Props = PickupDayHeaderSectionFragment & {
  title: string
}

const meta: Meta<Props> = {
  title: 'Page Headers/Odvozový deň',
  args: {
    title: 'Nevyviezli mi odpad',
    carouselTitle: 'Články',
    anchors: [
      { label: 'Anchor 1', targetId: 'id1' },
      { label: 'Anchor 2', targetId: 'id2' },
      { label: 'Anchor 3', targetId: 'id3' },
    ],
  },
}

type Story = StoryObj<Props>

export const PageHeaderPickupDay: Story = {
  name: 'Odvozový deň',
  render: (args: Props) => (
    <BAQueryClientProvider>
      <PageHeaderPickupDayComponent
        header={{
          ...args,
        }}
        title={args.title}
      />
      {Array.from({ length: 4 }).map((_, index) => {
        return (
          <div
            id={`id${index + 1}`}
            key={args?.anchors?.[index]?.targetId}
            style={{ height: '50vh' }}
          >
            <div className="flex justify-center p-6">
              {index < 3 ? `Anchor ${index + 1} should scroll here on click.` : null}
            </div>
          </div>
        )
      })}
    </BAQueryClientProvider>
  ),
}

export default meta
