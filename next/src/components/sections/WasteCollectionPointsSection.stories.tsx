// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react'

import {
  Enum_Componentsectionswastecollectionpoints_Backgroundcolor,
  WasteCollectionPointsSectionFragment,
} from '@/src/services/graphql/api'

import WasteCollectionPointsSectionComponent from './WasteCollectionPointsSection'

type Props = WasteCollectionPointsSectionFragment

const meta: Meta<Props> = {
  title: 'Sections/Zberné miesta',
  args: {
    title: 'Zberné miesta',
    text: 'Lorem ipsum dolor sit amet consectetur. Nisi non integer fringilla vel arcu vitae iaculis lorem. Semper at vestibulum massa ut nulla quisque tortor a aliquam. Enim vitae rhoncus sed dictum viverra pellentesque tincidunt convallis nulla. Aliquam diam ultrices aliquam diam venenatis.',
    backgroundColorWasteCollectionPoints:
      Enum_Componentsectionswastecollectionpoints_Backgroundcolor.Primary,
    cardsWasteCollectionPointsCards: [
      {
        title: 'Podunajské Biskupice',
        address: 'Lieskovská cesta, areál A-Z STAV s.r.o.',
        linkHref: '#',
      },
      {
        title: 'Vrakuňa',
        address: 'Majerská ul., koniec ulice',
        linkHref: '#',
      },
      {
        title: 'Nové Mesto',
        address: 'rôzne zberné miesta (podľa druhu odpadu)',
        linkHref: '#',
      },
    ],
  },
  parameters: {
    controls: {
      exclude: ['cardsWasteCollectionPointsCards', 'backgroundColorWasteCollectionPoints'],
    },
  },
}

export default meta

type Story = StoryObj<Props>

export const WasteCollectionPointsSection: Story = {
  name: 'Zberné miesta',
  render: (args) => (
    <div className="max-w-[1440px]">
      <WasteCollectionPointsSectionComponent section={args} />
    </div>
  ),
}
