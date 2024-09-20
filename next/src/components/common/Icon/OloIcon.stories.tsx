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
        {Object.keys(oloIconNameMap).map((name, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="flex w-32 items-center gap-2 bg-white p-2 shadow-sm">
              <OloIconComponent key={name} name={name as OloIconName} />
              <p className="text-[0.6rem]">{name}</p>
            </div>
          )
        })}
      </div>
    )
  },
}
