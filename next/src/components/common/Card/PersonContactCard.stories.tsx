import type { Meta, StoryObj } from '@storybook/react'

import PersonContactRowCardComponent from './PersonContactRowCard'

const meta: Meta<typeof PersonContactRowCardComponent> = {
  component: PersonContactRowCardComponent,
  title: 'Components/Cards/PersonContactRowCard',
  args: {
    name: 'Name',
    position: 'Position',
    linkText: 'Zobraziť zmluvu o výkone funkcie člena spoločnosti',
    linkHref: '#',
    imgSrc: '',
  },
  parameters: { controls: { exclude: ['className'] } },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PersonContactRowCardComponent>

export const PersonContactRowCard: Story = {
  render: (args) => <PersonContactRowCardComponent {...args} />,
}
