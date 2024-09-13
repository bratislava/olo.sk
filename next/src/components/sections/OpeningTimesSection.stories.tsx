import 'mapbox-gl/dist/mapbox-gl.css'

import type { Meta, StoryObj } from '@storybook/react'

import { OpeningTimesSectionFragment } from '@/src/services/graphql/api'

import OpeningTimesSectionComponent from './OpeningTimesSection'

type Props = OpeningTimesSectionFragment

// eslint-disable-next-line const-case/uppercase
const commonOpeningTime = '10:00 – 17:00'

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
                { label: 'Utorok', value: commonOpeningTime },
                { label: 'Streda', value: commonOpeningTime },
                { label: 'Štvrtok', value: commonOpeningTime },
                { label: 'Piatok', value: commonOpeningTime },
                { label: 'Sobota – Nedeľa', value: '10:00 – 18:00' },
              ],
            },
          },
        },
      },
    ],
    branchLocation: {
      data: {
        __typename: 'BranchEntity',
        attributes: {
          title: 'KOLO Jurigovo námestie',
          latitude: 48.15,
          longitude: 17.06,
          mapIconName: 'kolo',
          address: 'Jurigovo námestie, 841 04 Karlova Ves',
          parkingInfo: 'v areáli OC Korzo',
          publicTransportInfo: 'zastávka Jurigovo nám. (linka číslo 139)',
          barrierFreeInfo: 'bezbariérový vstup',
        },
      },
    },
  },
  parameters: { controls: { exclude: ['openingTimes', 'branchLocation'] } },
}

type Story = StoryObj<Props>

export const OpeningTimesSection: Story = {
  name: 'Opening Times',
  render: (args) => <OpeningTimesSectionComponent section={args} />,
}

export default meta
