import type { Meta, StoryObj } from '@storybook/react'

import OloIconComponent, { OloIconName, oloIconNameMap } from './OloIcon'

const meta: Meta<typeof OloIconComponent> = {
  component: OloIconComponent,
  title: 'Components/Icon (OLO)',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof OloIconComponent>

export const OloIcon: Story = {
  name: 'Icon (OLO)',
  render: () => {
    return (
      <div className="flex flex-wrap gap-2">
        {Object.keys(oloIconNameMap).map((name) => {
          return (
            <div className="flex w-[8rem] items-center gap-2 bg-white p-2 shadow-sm">
              <OloIconComponent key={name} name={name as OloIconName} />
              <p className="text-[0.6rem]">{name}</p>
            </div>
          )
        })}
      </div>
    )
  },
}
