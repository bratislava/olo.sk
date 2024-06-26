import type { Meta, StoryObj } from '@storybook/react'

import placeholderImage from '@/src/assets/images/olo-olinka.jpg'
import {
  ColumnsSectionFragment,
  Enum_Componentsectionscolumns_Backgroundcolor,
} from '@/src/services/graphql/api'

import ColumnsSectionComponent from './ColumnsSection'

type Props = ColumnsSectionFragment & { columnsCount: number }

const meta: Meta<Props> = {
  title: 'Sections/Columns',
  args: {
    title: 'Naše hodnoty',
    text: '',
    backgroundColor: Enum_Componentsectionscolumns_Backgroundcolor.Primary,
    columnsCount: 5,
  },
  argTypes: {
    columnsCount: {
      name: 'počet stĺpcov',
      control: { type: 'number', min: 1 },
    },
    backgroundColor: {
      options: Object.values(Enum_Componentsectionscolumns_Backgroundcolor),
      control: {
        type: 'inline-radio',
      },
    },
  },
}

const getColumnsDummyData = (count: number): ColumnsSectionFragment['items'] => {
  const initialItems: ColumnsSectionFragment['items'] = [
    {
      itemTitle: `Starostlivosť`,
      text: `Staráme sa o našich zamestnancov, o životné prostredie aj o budúcnosť ďalších generácií.`,
      image: { data: { attributes: { name: '', url: placeholderImage.src } } },
    },
    {
      itemTitle: `Transparentnosť`,
      text: `Komunikujeme transparentne a záleží nám na tom, aby sme si udržali dôveru verejnosti.`,
      image: { data: { attributes: { name: '', url: placeholderImage.src } } },
    },
    {
      itemTitle: `Odbornosť`,
      text: `Podporujeme odborný rozvoj, inšpirujeme sa najlepšími svetovými riešeniami a hľadáme skutočnú podstatu problémov.`,
      image: { data: { attributes: { name: '', url: placeholderImage.src } } },
    },
    {
      itemTitle: `Energia`,
      text: `Vyrábame zelenú energiu a skúmame možnosti, ako naše energetické zdroje čo najefektívnejšie využiť.`,
      image: { data: { attributes: { name: '', url: placeholderImage.src } } },
    },
    {
      itemTitle: `Úcta`,
      text: `S úctou pristupujemek sebe navzájom, ku všetkým ľuďom aj k nášmu okoliu a prírode.`,
      image: { data: { attributes: { name: '', url: placeholderImage.src } } },
    },
  ]

  const generatedItems = Array.from({ length: count - initialItems.length }).map((_, index) => ({
    itemTitle: `Column ${index + 1 + initialItems.length}`,
    text: `Column ${index + 1 + initialItems.length}`,
    image: { data: { attributes: { name: '', url: placeholderImage.src } } },
  }))

  return [...initialItems, ...generatedItems].slice(0, count)
}

type Story = StoryObj<Props>

export const ColumnsSection: Story = {
  name: 'Columns',
  render: (args) => (
    <ColumnsSectionComponent
      section={{
        ...args,
        items: getColumnsDummyData(args.columnsCount),
      }}
    />
  ),
}

export default meta
