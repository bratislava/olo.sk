import 'mapbox-gl/dist/mapbox-gl.css'

import { Meta, StoryObj } from '@storybook/react'

import DirectionsBoxComponent from '@/src/components/common/Box/DirectionsBox'
import { BranchEntityFragment } from '@/src/services/graphql/api'

type Props = {
  branch: BranchEntityFragment
}

const meta: Meta<Props> = {
  title: 'Components/Box/DirectionsBox',
  parameters: { controls: { exclude: ['branch'] } },
  args: {
    branch: {
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
}

export default meta

type Story = StoryObj<Props>

export const DirectionsBox: Story = {
  render: (args) => (
    <div className="h-full max-w-72 lg:max-w-[50rem]">
      <DirectionsBoxComponent branch={args.branch} />
    </div>
  ),
}
