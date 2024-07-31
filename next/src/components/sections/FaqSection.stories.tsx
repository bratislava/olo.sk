import type { Meta, StoryObj } from '@storybook/react'

import {
  Enum_Componentsectionsfaq_Backgroundcolor,
  FaqEntityFragment,
  FaqSectionFragment,
} from '@/src/services/graphql/api'

import FaqSectionComponent from './FaqSection'

type Props = FaqSectionFragment & { columnsCount: number }

const meta: Meta<Props> = {
  title: 'Sections/FAQ',
  args: {
    title: 'Často kladené otázky',
    backgroundColorFaq: Enum_Componentsectionsfaq_Backgroundcolor.Primary,
    columnsCount: 3,
  },
  argTypes: {
    columnsCount: {
      name: 'počet otázok',
      control: { type: 'number', min: 1 },
    },
    backgroundColorFaq: {
      name: 'farba pozadia',
      options: Object.values(Enum_Componentsectionsfaq_Backgroundcolor),
      control: { type: 'select' },
    },
  },
}

const getFaqsDummyData = (count: number): FaqEntityFragment['attributes'][] => {
  const initialItems: FaqEntityFragment['attributes'][] = [
    // {
    //   title: `Headline`,
    //   content: `Staráme sa o našich zamestnancov, o životné prostredie aj o budúcnosť ďalších generácií.`,
    // },
  ]

  const generatedItems = Array.from({ length: count - initialItems.length }).map(() => ({
    title: `Headline`,
    content: 'Content',
  }))

  return [...initialItems, ...generatedItems].slice(0, count)
}

type Story = StoryObj<Props>

export const FaqSection: Story = {
  name: 'FAQ',
  render: (args) => (
    <FaqSectionComponent
      section={{
        ...args,
        showMoreLink: { label: 'Zobraziť viac', url: '#' },
        faqs: {
          data: getFaqsDummyData(args.columnsCount).map((attributes) => ({ attributes })),
        },
      }}
    />
  ),
}

export default meta
