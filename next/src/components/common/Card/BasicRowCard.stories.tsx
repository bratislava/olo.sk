import type { Meta, StoryObj } from '@storybook/react'

import KalendarIconUrl from '@/src/assets/icons/kalendar.svg?url'

import BasicRowCardComponent from './BasicRowCard'

const meta: Meta<typeof BasicRowCardComponent> = {
  component: BasicRowCardComponent,
  title: 'Components/Cards/BasicRowCard',
  args: {
    value: 'value',
    variant: 'icon-label-value-vertical',
    label: 'label',
    iconSrc: KalendarIconUrl,
    hasBottomBorder: true,
    toolTipText: 'tooltip text',
  },
  parameters: { controls: { exclude: ['className'] } },
  argTypes: { variant: { control: { type: 'inline-radio' } } },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BasicRowCardComponent>

export const BasicRowCard: Story = {
  render: (args) => <BasicRowCardComponent {...args} />,
}

export const BasicRowCardRows: Story = {
  render: (args) => (
    <div className="flex flex-col">
      <BasicRowCardComponent {...args} />
      <BasicRowCardComponent {...args} />
      <BasicRowCardComponent {...args} />
      <BasicRowCardComponent {...args} hasBottomBorder={false} />
    </div>
  ),
}
