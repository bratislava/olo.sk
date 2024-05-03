import type { Meta, StoryObj } from '@storybook/react'

import Typography from '@/_components/common/Typography/Typography'

import AccordionComponent from './Accordion'

const meta: Meta<typeof AccordionComponent> = {
  component: AccordionComponent,
  title: 'Components/Accordion',
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
  args: {},
  render: (args) => (
    <div className="w-full max-w-[500px]">
      <AccordionComponent {...args} />
    </div>
  ),
}
