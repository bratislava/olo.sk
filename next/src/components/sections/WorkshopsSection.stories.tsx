import type { Meta, StoryObj } from '@storybook/react'

import { WorkshopEntityFragment, WorkshopsSectionFragment } from '@/src/services/graphql/api'

import WorkshopsSectionComponent from './WorkshopsSection'

type Props = WorkshopsSectionFragment & { workshopsCount: number }

const meta: Meta<Props> = {
  title: 'Sections/Workshops',
  args: {
    title: 'Workshopy, ktoré ocenia aj budúce generácie',
    text: 'V KOLO organizujeme workshopy a zážitkové programy pre školy aj deti v predškolskom veku.',
    workshopsCount: 3,
  },
  argTypes: {
    workshopsCount: {
      control: { type: 'number', min: 1 },
    },
  },
}

const getWorkshopsDummyData = (count: number): WorkshopEntityFragment[] => {
  return Array.from({ length: count }).map((_, index) => ({
    __typename: 'WorkshopEntity',
    attributes: { title: `Workshop ${index + 1}`, slug: `#` },
  }))
}

type Story = StoryObj<Props>

export const WorkshopsSection: Story = {
  name: 'Workshops',
  render: (args) => (
    <WorkshopsSectionComponent
      section={{ ...args, workshops: { data: getWorkshopsDummyData(args.workshopsCount) } }}
    />
  ),
}

export default meta
