/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import BasicRowCard from '@/src/components/common/Card/BasicRowCard'

import MapComponent from './Map'

type Props = {
  rowsContent: {
    value: string
    iconName: 'place' | 'directions-bus' | 'local-parking'
  }[]
}

const meta: Meta<Props> = {
  title: 'Components/Box/Map',
  parameters: { controls: { exclude: ['rowsContent'] } },
  args: {
    rowsContent: [
      {
        value: 'Ivanská cesta 22, 821 04 Bratislava',
        iconName: 'place',
      },
      {
        value:
          'zastávka Avion IKEA (linky číslo 61, 69, 96 a 163)\nzastávka Avion IKEA (linky číslo 61, 69, 96 a 163)',
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

export const Map: Story = {
  render: (args) => (
    <div className="mx-auto flex max-w-72 flex-col items-start lg:max-w-[50rem]">
      <MapComponent>
        {...args.rowsContent.map((row) => (
          <BasicRowCard value={row.value} variant="icon-value" iconName={row.iconName} />
        ))}
      </MapComponent>
    </div>
  ),
}
