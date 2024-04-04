import type { Meta, StoryObj } from '@storybook/react'

import BAButtonComponent from './BAButton'

const meta: Meta<typeof BAButtonComponent> = {
  component: BAButtonComponent,
  title: 'Components/BAButton',
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'text' },
    variant: {
      control: { type: 'select' },
      options: [
        'unstyled',
        'icon-wrapped',
        'icon-wrapped-negative-margin',
        'category-solid',
        'category-outline',
        'category-plain',
        'black-solid',
        'black-outline',
        'black-plain',
        'negative-solid',
        'negative-plain',
        'black-link',
        'category-link',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof BAButtonComponent>

export const BAButton: Story = {
  args: {
    variant: 'category-solid',
    children: 'Hello World',
  },
  // render: (args) => (
  //   <BAButtonComponent {...args} onPress={() => {}}>
  //     Hello World
  //   </BAButtonComponent>
  // ),
}
