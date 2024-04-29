import type { Meta, StoryObj } from '@storybook/react'

import IconComponent, { iconNameMap } from './Icon'

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
  title: 'Components/Icon',
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof IconComponent>

export const Icon: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-2">
        {Object.keys(iconNameMap).map((name) => {
          return (
            <div className="flex w-[8rem] items-center gap-2 bg-white p-2 shadow-sm">
              <IconComponent key={name} name={name as keyof typeof iconNameMap} />{' '}
              <p className="text-[0.6rem]">{name}</p>
            </div>
          )
        })}
      </div>
    )
  },
}
