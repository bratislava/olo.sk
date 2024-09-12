import type { Meta, StoryObj } from '@storybook/react'

import { OpeningTimesSectionFragment } from '@/src/services/graphql/api'

import OpeningTimesSectionComponent from './OpeningTimesSection'

type Props = OpeningTimesSectionFragment

const meta: Meta<Props> = {
  title: 'Sections/Opening Times',
  args: {
    title: 'Detaily',
    openingTimes: [
      {
        title: 'Otváracie hodiny',
        openingTime: {
          data: {
            id: '1',
            attributes: {
              openingHours: [
                { label: 'Pondelok', value: 'Zatvorené' },
                // eslint-disable-next-line sonarjs/no-duplicate-string
                { label: 'Utorok', value: '10:00 – 17:00' },
                { label: 'Streda', value: '10:00 – 17:00' },
                { label: 'Štvrtok', value: '10:00 – 17:00' },
                { label: 'Piatok', value: '10:00 – 17:00' },
                { label: 'Sobota – Nedeľa', value: '10:00 – 18:00' },
              ],
            },
          },
        },
      },
    ],
  },
}

type Story = StoryObj<Props>

export const OpeningTimesSection: Story = {
  name: 'Opening Times',
  render: (args) => <OpeningTimesSectionComponent section={args} />,
}

export default meta
