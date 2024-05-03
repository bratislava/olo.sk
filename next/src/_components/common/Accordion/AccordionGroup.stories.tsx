import type { Meta, StoryObj } from '@storybook/react'

import Typography from '@/_components/common/Typography/Typography'

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

const dummyTextContent = (
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

export default meta
type Story = StoryObj<typeof AccordionGroupComponent>

export const AccordionGroup: Story = {
  args: {
    accordionData: [
      { title: 'Accordion title 1', children: <Typography>Short dummy text</Typography> },
      { title: 'Accordion title 2', children: dummyTextContent },
      { title: 'Accordion title 3', children: dummyTextContent },
    ],
  },
  render: (args) => (
    <div className="w-full max-w-[500px]">
      <AccordionGroupComponent {...args} />
    </div>
  ),
}
