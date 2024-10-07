// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import { OloTruckImage, ZevoIronHandImage } from '@/src/assets/images'
import WasteRemovalCardsSectionComponent from '@/src/components/sections/WasteRemovalCardsSection'
import {
  CardSliderSectionFragment,
  Enum_Componentsectionscardslider_Backgroundcolor,
} from '@/src/services/graphql/api'

type Props = CardSliderSectionFragment

const meta: Meta<Props> = {
  title: 'Sections/Waste Removal Cards',
  args: {
    title: 'Prehľad veľkokapacitných a lisovacích kontajnerov s cenami',
    text: 'Subtext',
    backgroundColorCardSlider: Enum_Componentsectionscardslider_Backgroundcolor.Primary,
    cardsCardSlider: [
      {
        __typename: 'ComponentItemsCardSliderCard',
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
        __typename: 'ComponentItemsCardSliderCard',
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
      exclude: ['cardsCardSlider'],
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
