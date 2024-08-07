import type { Meta, StoryObj } from '@storybook/react'

import placeholderIconUrl from '@/src/assets/pictograms/pig-coin-bank.svg?url'
import {
  ColumnsListSectionFragment,
  Enum_Componentsectionscolumnslist_Backgroundcolor,
} from '@/src/services/graphql/api'

import ColumnsListSectionComponent from './ColumnsListSection'

type Props = ColumnsListSectionFragment & {
  leftColumn: ColumnsListSectionFragment['leftColumn']
  rightColumn: ColumnsListSectionFragment['rightColumn']
}

const iconDummyData = {
  data: { attributes: { url: placeholderIconUrl ?? 'hey', name: 'placeholder' } },
}

const meta: Meta<Props> = {
  title: 'Sections/Columns List',
  args: {
    title: 'Benefity',
    backgroundColorColumnList: Enum_Componentsectionscolumnslist_Backgroundcolor.Primary,
    leftColumn: [
      {
        content: 'práca v stabilnej a perspektívnej spoločnosti',
        icon: iconDummyData,
      },
      {
        content: 'plat vo výške 50 % priemerného mesačného zárobku',
        icon: iconDummyData,
      },
      {
        content: 'plat vo výške 100 % priemerného mesačného zárobku',
        icon: iconDummyData,
      },
      {
        content: 'príspevok do III. piliera – DDS',
        icon: iconDummyData,
      },
      {
        content: 'odmeny pri pracovných a životných jubileách',
        icon: iconDummyData,
      },
      {
        content: 'ročná odmena za hospodársky výsledok',
        icon: iconDummyData,
      },
      {
        content: 'každoročná valorizácia základnej mzdy',
        icon: iconDummyData,
      },
    ],
    rightColumn: [
      {
        content: 'vybrané mzdové zvýhodnenia za sobotu a nedeľu nad rámec Zákonníka práce',
        icon: iconDummyData,
      },
      {
        content: 'nadštandardný príspevok na stravovanie',
        icon: iconDummyData,
      },
      {
        content: 'dovolenka naviac',
        icon: iconDummyData,
      },
      {
        content: 'karta MultiSport',
        icon: iconDummyData,
      },
      {
        content: 'sociálna výpomoc pri zložitých životných situáciách',
        icon: iconDummyData,
      },
      {
        content: 'psychologické poradenstvo',
        icon: iconDummyData,
      },
      {
        content: 'ďalšie benefity v zmysle kolektívnej zmluvy',
        icon: iconDummyData,
      },
    ],
  },
  argTypes: {
    backgroundColorColumnList: {
      options: Object.values(Enum_Componentsectionscolumnslist_Backgroundcolor),
    },
  },
}

type Story = StoryObj<Props>

export const ColumnsListSection: Story = {
  name: 'ColumnsList',
  render: (args) => (
    <ColumnsListSectionComponent
      section={{
        ...args,
      }}
    />
  ),
}

export default meta
