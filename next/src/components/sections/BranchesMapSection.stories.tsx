import 'mapbox-gl/dist/mapbox-gl.css'

import type { Meta, StoryObj } from '@storybook/react'

import { BranchEntityFragment, BranchesMapSectionFragment } from '@/src/services/graphql/api'

import BranchesMapSectionComponent from './BranchesMapSection'

type Props = BranchesMapSectionFragment

const meta: Meta<Props> = {
  title: 'Sections/Map of Branches',
  tags: ['autodocs'],
}

const getKoloBranchesDummyData = (): BranchEntityFragment[] => {
  return [
    {
      __typename: 'BranchEntity',
      id: '1',
      attributes: {
        title: 'KOLO Jurigovo námestie',
        latitude: 48.15,
        longitude: 17.06,
        address: 'Jurigovo námestie, 841 04 Karlova Ves',
        mapIconName: 'kolo',
      },
    },
    {
      __typename: 'BranchEntity',
      id: '2',
      attributes: {
        title: 'KOLO Pestovateľská',
        latitude: 48.17,
        longitude: 17.18,
        address: 'Pestovateľská 13, 821 04 Bratislava',
        mapIconName: 'kolo',
      },
    },
    {
      __typename: 'BranchEntity',
      id: '3',
      attributes: {
        title: 'KOLO Vlčie hrdlo',
        latitude: 48.12,
        longitude: 17.17,
        address: 'Vlčie hrdlo 72, 821 07 Bratislava',
        mapIconName: 'kolo',
      },
    },
  ] as const
}

const getDefaultBranchesDummyData = (): BranchEntityFragment[] => {
  // eslint-disable-next-line const-case/uppercase
  const title = 'Zberný dvor'

  return [
    {
      __typename: 'BranchEntity',
      id: '4',
      attributes: {
        title,
        latitude: 48.16,
        longitude: 17.17,
        address: 'Stará Ivanská cesta 2, 821 04 Bratislava',
        mapIconName: 'default',
      },
    },
    {
      __typename: 'BranchEntity',
      id: '5',
      attributes: {
        title,
        latitude: 48.2,
        longitude: 17.16,
        address: 'Pri Šajbách 1, 831 06 Bratislava',
        mapIconName: 'default',
      },
    },
    {
      __typename: 'BranchEntity',
      id: '6',
      attributes: {
        title,
        latitude: 48.11,
        longitude: 17.2,
        address: 'Lieskovská cesta, areál A-Z STAV s.r.o.',
        mapIconName: 'default',
      },
    },
  ] as const
}

type Story = StoryObj<Props>

export const KoloBranchesMapSection: Story = {
  name: 'Mapa KOLO pobočiek',
  args: {
    title: 'Naše pobočky',
    text: '',
  },
  render: (args) => (
    <BranchesMapSectionComponent
      section={{
        ...args,
        branches: { data: getKoloBranchesDummyData() },
      }}
    />
  ),
}

export const DefaultBranchesMapSection: Story = {
  name: 'Mapa Zberných dvorov',
  args: {
    title: 'Zberné dvory',
    text: '',
  },
  render: (args) => (
    <BranchesMapSectionComponent
      section={{
        ...args,
        branches: { data: getDefaultBranchesDummyData() },
      }}
    />
  ),
}

export default meta
