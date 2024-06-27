/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import TypographyComponent, { type TypographyProps } from './Typography'

const variantOptions: TypographyProps['variant'][] = [
  'h1-hero',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p-default',
  'p-large',
  'p-small',
  'p-default-bold',
  'p-large-bold',
  'p-small-bold',
  'p-default-black',
  'p-large-black',
  'p-small-black',
  'button-default',
  'button-large',
]

const meta: Meta<typeof TypographyComponent> = {
  component: TypographyComponent,
  title: 'Components/Typography',
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'text', type: 'string' },
  },
}

export default meta
type Story = StoryObj<typeof TypographyComponent>

export const Typography: Story = {
  args: {
    children: '',
  },
  render: (args) => {
    return (
      <div className="mx-auto flex max-w-[100ch] flex-col gap-4">
        {variantOptions.map((variant) => {
          return (
            <div>
              <p className="text-[8pt] opacity-50">{variant}</p>
              <TypographyComponent variant={variant}>
                {args.children ||
                  (variant?.startsWith('p')
                    ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    : 'Lorem ipsum dolor sit amet')}
              </TypographyComponent>
            </div>
          )
        })}
      </div>
    )
  },
}
