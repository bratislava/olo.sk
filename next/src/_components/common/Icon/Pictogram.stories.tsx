import type { Meta, StoryObj } from '@storybook/react'

import PictogramComponent, { pictogramNameMap } from './Pictogram'

const meta: Meta<typeof PictogramComponent> = {
  component: PictogramComponent,
  title: 'Components/Pictogram',
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof PictogramComponent>

export const Pictogram: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-2">
        {Object.keys(pictogramNameMap).map((name) => {
          return (
            <div className="flex w-[10rem] flex-col items-center gap-4 bg-white p-2 shadow-sm">
              <PictogramComponent key={name} name={name as keyof typeof pictogramNameMap} />
              <p className="text-[0.8rem]">{name}</p>
            </div>
          )
        })}
      </div>
    )
  },
}
