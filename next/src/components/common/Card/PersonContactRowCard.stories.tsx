/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'

import PersonContactRowCardComponent from './PersonContactRowCard'

// <div className="flex flex-col gap-1">
//           <p className="text-[0.6rem]">variant: icon-value</p>
//           <BasicRowCardComponent
//             variant="icon-value"
//             value={args.value}
//             icon={<Icon name={args.iconName} />}
//           />
//         </div>

const meta: Meta<typeof PersonContactRowCardComponent> = {
  component: PersonContactRowCardComponent,
  title: 'Components/Cards/PersonContactRowCard',
  args: {
    name: 'Name',
    position: 'Position',
    fileLinkLabel: 'Zobraziť zmluvu o výkone funkcie člena spoločnosti',
  },
  argTypes: { fileLinkLabel: { control: { type: 'text' } } },
  parameters: { controls: { exclude: ['className', 'imgSrc', 'fileItem'] } },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PersonContactRowCardComponent>

export const PersonContactRowCard: Story = {
  render: (args) => (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <p className="text-[0.6rem]">Without file:</p>
        <PersonContactRowCardComponent name={args.name} position={args.position} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[0.6rem]">With file:</p>
        <PersonContactRowCardComponent
          name={args.name}
          position={args.position}
          fileLinkLabel={args.fileLinkLabel}
          fileItem={{
            media: {
              data: {
                attributes: {
                  name: 'dummy-file',
                  url: 'https://www.google.com',
                  size: 1200,
                  ext: 'pdf',
                },
              },
            },
          }}
        />
      </div>
    </div>
  ),
}
