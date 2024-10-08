// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { OloTruckImage, ZevoIronHandImage } from '@/src/assets/images'
import WasteRemovalCardsSectionComponent from '@/src/components/sections/WasteRemovalCardsSection'
import { WasteRemovalCardsSectionFragment } from '@/src/services/graphql/api'

type Props = WasteRemovalCardsSectionFragment

const meta: Meta<Props> = {
  title: 'Sections/Waste Removal Cards',
  args: {
    title: 'Prehľad veľkokapacitných a lisovacích kontajnerov s cenami',
    text: 'Subtext',
    cardsWasteRemovalCardsSection: [
      {
        title: 'Card title',
        text: 'Card text',
        image: {
          data: {
            attributes: {
              name: '',
              url: OloTruckImage.src,
            },
          },
        },
      },
      {
        title: 'Card title',
        text: 'Card text',
        image: {
          data: {
            attributes: {
              name: '',
              url: ZevoIronHandImage.src,
            },
          },
        },
      },
    ],
  },
  parameters: {
    controls: {
      exclude: ['cardsWasteRemovalCardsSection'],
    },
  },
}

type Story = StoryObj<Props>

export const WasteRemovalCardsSection: Story = {
  name: 'Waste Removal Cards',
  render: (args) => (
    <div className="max-w-[800px]">
      <WasteRemovalCardsSectionComponent section={args} />
    </div>
  ),
}

export default meta
