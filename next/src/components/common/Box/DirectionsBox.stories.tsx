import 'mapbox-gl/dist/mapbox-gl.css'

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { BranchMapProps } from '@/src/components/common/Box/BranchMap'
import DirectionsBoxComponent from '@/src/components/common/Box/DirectionsBox'
import BasicRowCard from '@/src/components/common/Card/BasicRowCard'

type Props = {
  mapIconName?: string | null | undefined
  rowsContent: {
    value: string
    iconName: 'place' | 'directions-bus' | 'local-parking'
  }[]
} & Pick<BranchMapProps, 'latitude' | 'longitude'>

const meta: Meta<Props> = {
  title: 'Components/Box/DirectionsBox',
  parameters: { controls: { exclude: ['rowsContent'] } },
  args: {
    latitude: 48.171_14,
    longitude: 17.179_21,
    rowsContent: [
      {
        value: 'Ivanská cesta 22, 821 04 Bratislava',
        iconName: 'place',
      },
      {
        value:
          'zastávka Avion IKEA (linky číslo 61, 69, 96 a 163)\nzastávka Avion Shopping Park (linky číslo 63 a 65)',
        iconName: 'directions-bus',
      },
      {
        value: 'v areáli OC Korzo',
        iconName: 'local-parking',
      },
    ],
  },
}

export default meta
type Story = StoryObj<Props>

export const DirectionsBox: Story = {
  render: (args) => (
    <div className="h-full max-w-72 lg:max-w-[50rem]">
      <DirectionsBoxComponent
        latitude={args.latitude}
        longitude={args.longitude}
        mapIconName={args.mapIconName}
      >
        {...args.rowsContent.map((row) => (
          <BasicRowCard value={row.value} variant="icon-value" iconName={row.iconName} />
        ))}
      </DirectionsBoxComponent>
    </div>
  ),
}
