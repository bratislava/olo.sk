/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import WasteIcon from '@/src/components/common/Accordion/WasteIcon'
import WasteSortingGuide from '@/src/components/common/Accordion/WasteSortingGuide'
import Typography from '@/src/components/common/Typography/Typography'

import AccordionGroupComponent from './AccordionGroup'

const meta: Meta<typeof AccordionGroupComponent> = {
  component: AccordionGroupComponent,
  title: 'Components/Accordion/AccordionGroup',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

const accordionDefaultDummyTextContent = (
  <Typography>
    Long dummy text: Ut eget malesuada nisl. Donec gravida, risus in maximus tincidunt, augue elit
    maximus ante, at posuere arcu est in metus. Sed maximus risus nulla, quis blandit nulla
    efficitur in. Aenean porttitor lacus sed gravida volutpat. Nunc feugiat quam id mi pulvinar
    vestibulum. Integer eget porttitor est. Duis at enim sit amet tellus elementum vehicula nec quis
    enim. Curabitur ut molestie ex. Mauris aliquet vulputate lacus, sed mollis urna luctus in.
    Phasellus magna neque, aliquet nec odio at, accumsan ultricies justo. Suspendisse sit amet orci
    purus.
  </Typography>
)

const accordionDefaultData = [
  {
    title: 'Accordion title 1',
    hasBottomBorder: false,
    children: <Typography>Short dummy text</Typography>,
  },

  {
    title: 'Accordion title 2',
    hasBottomBorder: false,
    children: accordionDefaultDummyTextContent,
  },

  {
    title: 'Accordion title 3',
    hasBottomBorder: false,
    children: accordionDefaultDummyTextContent,
  },
]
const wasteSortingGuideData = {
  leftColumn: {
    columnTitle: 'Patrí sem:',
    columnItems: ['Item 1', 'Item 2', 'Item 3'],
  },
  rightColumn: {
    columnTitle: 'Nepatrí sem:',
    columnItems: ['Item 1', 'Item 2', 'Item 3'],
  },
}

const dummySortingGuideContent = (
  <WasteSortingGuide
    leftColumn={wasteSortingGuideData.leftColumn}
    rightColumn={wasteSortingGuideData.rightColumn}
  />
)

const accordionWasteData = [
  {
    title: 'Accordion title 1',
    hasBottomBorder: false,
    icon: <WasteIcon variant="plastic" />,
    children: dummySortingGuideContent,
  },

  {
    title: 'Accordion title 2',
    hasBottomBorder: false,
    icon: <WasteIcon variant="paper" />,
    children: dummySortingGuideContent,
  },

  {
    title: 'Accordion title 3',
    hasBottomBorder: false,
    icon: <WasteIcon variant="glass" />,
    children: dummySortingGuideContent,
  },
]

export default meta
type Story = StoryObj<typeof AccordionGroupComponent>

export const AccordionDefaultGroup: Story = {
  args: {
    accordionData: accordionDefaultData,
  },
  render: (args) => (
    <div className="flex w-full min-w-[255px] flex-col gap-4">
      <div>
        <p className="mb-1 text-[.7rem]">default</p>
        <AccordionGroupComponent {...args} className="px-5 py-2" /> {/* Adjust group's padding */}
      </div>
    </div>
  ),
}

export const AccordionWasteGroup: Story = {
  args: {
    accordionData: accordionWasteData,
  },
  render: (args) => (
    <div className="flex w-full min-w-[255px] flex-col gap-4">
      <div>
        <p className="mb-1 text-[.7rem]">waste</p>
        <AccordionGroupComponent {...args} /> {/* Has no group padding */}
      </div>
    </div>
  ),
}
