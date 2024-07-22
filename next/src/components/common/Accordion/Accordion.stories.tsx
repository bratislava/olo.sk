import type { Meta, StoryObj } from '@storybook/react'

import WasteIcon from '@/src/components/common/Accordion/WasteIcon'
import Typography from '@/src/components/common/Typography/Typography'

import AccordionComponent from './Accordion'

// to waste, pass special children - my component

const meta: Meta<typeof AccordionComponent> = {
  component: AccordionComponent,
  title: 'Components/Accordion/Accordion',
  tags: ['autodocs'],
  args: {
    title: 'AccordionComponent title',
    children: (
      <Typography variant="p-default">
        Ut eget malesuada nisl. Donec gravida, risus in maximus tincidunt, augue elit maximus ante,
        at posuere arcu est in metus. Sed maximus risus nulla, quis blandit nulla efficitur in.
        Aenean porttitor lacus sed gravida volutpat. Nunc feugiat quam id mi pulvinar vestibulum.
        Integer eget porttitor est. Duis at enim sit amet tellus elementum vehicula nec quis enim.
        Curabitur ut molestie ex. Mauris aliquet vulputate lacus, sed mollis urna luctus in.
        Phasellus magna neque, aliquet nec odio at, accumsan ultricies justo. Suspendisse sit amet
        orci purus.
      </Typography>
    ),
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
    <div className="w-full min-w-[256px] max-w-[500px]">
      <AccordionComponent {...args} />
    </div>
  ),
}

export const AllAccordions: Story = {
  render: (args) => (
    <div className="flex w-full min-w-[256px] max-w-[500px] flex-col gap-4">
      <div>
        <p className="mb-1 text-[.7rem]">default</p>
        <AccordionComponent {...args} />
      </div>
      <div>
        <p className="mb-1 text-[.7rem]">waste</p>
        <AccordionComponent {...args} icon={<WasteIcon variant="glass" />} />
      </div>
    </div>
  ),
}
