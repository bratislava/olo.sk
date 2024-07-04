import type { Meta, StoryObj } from '@storybook/react'

import Icon, { iconNameMap } from '@/src/components/common/Icon/Icon'

import BasicRowCardComponent, { BasicRowCardProps } from './BasicRowCard'

type Props = BasicRowCardProps & {
  iconName: keyof typeof iconNameMap
}

const meta: Meta<Props> = {
  component: BasicRowCardComponent,
  title: 'Components/Cards/BasicRowCard',
  args: {
    label: 'Label',
    value: 'Value',
    iconName: 'hodiny',
  },
  parameters: { controls: { exclude: ['className', 'variant', 'icon'] } },
  argTypes: {
    variant: { control: { type: 'inline-radio' } },
    iconName: {
      name: 'icon (name)',
      options: Object.keys(iconNameMap),
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<Props>

export const BasicRowCard: Story = {
  render: (args: any) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-[0.6rem]">variant: icon-value</p>
          <BasicRowCardComponent
            variant="icon-value"
            value={args.value}
            icon={<Icon name={args.iconName} />}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[0.6rem]">variant: label-value-vertical</p>
          <BasicRowCardComponent
            variant="label-value-vertical"
            label={args.label ?? ''}
            value={args.value}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[0.6rem]">variant: label-value-horizontal</p>
          <BasicRowCardComponent
            variant="label-value-horizontal"
            label={args.label ?? ''}
            value={args.value}
          />
        </div>
      </div>
    )
  },
}
