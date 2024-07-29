import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import WasteIcon from '@/src/components/common/Accordion/WasteIcon'
import WasteSortingGuide from '@/src/components/common/Accordion/WasteSortingGuide'
import Typography from '@/src/components/common/Typography/Typography'

import AccordionComponent from './Accordion'

const wasteSortingGuideData = {
  leftColumn: {
    title: 'Patrí sem:',
    items: [{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }],
  },
  rightColumn: {
    title: 'Nepatrí sem:',
    items: [{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }],
  },
}

const dummySortingGuideContent = (
  <WasteSortingGuide
    leftColumn={wasteSortingGuideData.leftColumn}
    rightColumn={wasteSortingGuideData.rightColumn}
  />
)

const dummyTextContent = (
  <Typography variant="p-default">
    Ut eget malesuada nisl. Donec gravida, risus in maximus tincidunt, augue elit maximus ante, at
    posuere arcu est in metus. Sed maximus risus nulla, quis blandit nulla efficitur in. Aenean
    porttitor lacus sed gravida volutpat. Nunc feugiat quam id mi pulvinar vestibulum. Integer eget
    porttitor est. Duis at enim sit amet tellus elementum vehicula nec quis enim. Curabitur ut
    molestie ex. Mauris aliquet vulputate lacus, sed mollis urna luctus in. Phasellus magna neque,
    aliquet nec odio at, accumsan ultricies justo. Suspendisse sit amet orci purus.
  </Typography>
)

const meta: Meta<typeof AccordionComponent> = {
  component: AccordionComponent,
  title: 'Components/Accordion/Accordion',
  tags: ['autodocs'],
  args: {
    title: 'Accordion title',
    hasBottomBorder: true,
    children: dummyTextContent,
    icon: undefined,
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof AccordionComponent>

export const Accordion: Story = {
  render: (args) => (
    <div className="w-full min-w-[256px]">
      <div className="bg-background-primary px-4 lg:px-5">
        <AccordionComponent {...args} />
      </div>
    </div>
  ),
}

export const AllAccordions: Story = {
  render: (args) => (
    <div className="flex w-full min-w-[255px] flex-col gap-4">
      <div>
        <p className="mb-1 text-[.7rem]">default</p>
        <div className="bg-background-primary px-4 lg:px-5">
          <AccordionComponent {...args} />
        </div>
      </div>
      <div>
        <p className="mb-1 text-[.7rem]">waste</p>
        <AccordionComponent {...args} icon={<WasteIcon variant="paper" />}>
          {dummySortingGuideContent}
        </AccordionComponent>
      </div>
    </div>
  ),
}
