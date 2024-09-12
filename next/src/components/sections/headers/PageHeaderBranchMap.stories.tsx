import 'mapbox-gl/dist/mapbox-gl.css'

import type { Meta, StoryObj } from '@storybook/react'

import { BranchEntityFragment } from '@/src/services/graphql/api'

import PageHeaderBranchMapComponent, { PageHeaderBranchMapProps } from './PageHeaderBranchMap'

type Props = PageHeaderBranchMapProps

const branchesData: BranchEntityFragment[] = [
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
]

const meta: Meta<Props> = {
  title: 'Page Headers/Mapa pobočiek',
  args: {
    header: {
      branches: { data: branchesData },
    },
    title: 'Naše pobočky',
    perex:
      'Lorem ipsum dolor sit amet consectetur. Nisi non integer fringilla vel arcu vitae iaculis lorem.',
  },
}

type Story = StoryObj<Props>

export const PageHeaderBranchMap: Story = {
  name: 'Mapa pobočiek',
  render: (args: Props) => <PageHeaderBranchMapComponent {...args} />,
}

export default meta
