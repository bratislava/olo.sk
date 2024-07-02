import type { Meta, StoryObj } from '@storybook/react'

import PictogramComponent, { pictogramNameMap } from './Pictogram'

const meta: Meta<typeof PictogramComponent> = {
  component: PictogramComponent,
  title: 'Components/Pictogram',
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
type Story = StoryObj<typeof PictogramComponent>

export const Pictogram: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-2">
        {Object.keys(pictogramNameMap).map((name) => {
          return (
            <div className="flex w-[10rem] flex-col items-center justify-end gap-4 bg-white p-2 shadow-sm">
              <div className="flex h-full items-center">
                <PictogramComponent key={name} name={name as keyof typeof pictogramNameMap} />
              </div>
              <p className="text-[0.8rem]">{name}</p>
            </div>
          )
        })}
      </div>
    )
  },
}
