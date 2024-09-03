import type { Meta, StoryObj } from '@storybook/react'
import React, { ReactNode } from 'react'

import BasicRowCard from '@/src/components/common/Card/BasicRowCard'

import DirectionsBoxComponent from './DirectionsBox'

type Props = {
  rowsContent: {
    value: ReactNode
    iconName: 'place' | 'directions-bus' | 'local-parking'
  }[]
}

const meta: Meta<Props> = {
  title: 'Components/Box/DirectionsBox',
  parameters: { controls: { exclude: ['rowsContent'] } },
  args: {
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
    <div className="mx-auto flex max-w-72 flex-col items-start lg:max-w-[50rem]">
      <DirectionsBoxComponent>
        {...args.rowsContent.map((row) => (
          <BasicRowCard value={row.value} variant="icon-value" iconName={row.iconName} />
        ))}
      </DirectionsBoxComponent>
    </div>
  ),
}
