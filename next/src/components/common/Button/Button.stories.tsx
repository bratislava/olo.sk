/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import Icon from '@/src/components/common/Icon/Icon'

import ButtonComponent from './Button'

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'Components/Button',
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
type Story = StoryObj<typeof ButtonComponent>

export const Button: Story = {
  args: {
    variant: 'category-solid',
    asLink: true,
    href: '#',
    children: 'Button',
    hasLinkIcon: true,
  },
}

export const AllButtons: Story = {
  args: {},
  name: 'All button variants',
  render: () => {
    const variantsToRender = [
      ['unstyled'],
      ['icon-wrapped', 'icon-wrapped-negative-margin'],
      ['category-solid', 'category-outline', 'category-plain'],
      ['black-solid', 'black-outline', 'black-plain'],
      // ['negative-solid', 'negative-plain'],
      ['black-link'],
    ]

    return (
      <div className="flex flex-col flex-nowrap divide-y divide-[rgb(200,200,200)]">
        {variantsToRender.map((variantGroup, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="grid grid-cols-3 items-center gap-2 py-4">
            {variantGroup.map((variant) => (
              <ButtonComponent
                key={variant}
                variant={variant as any}
                fullWidth
                fullWidthMobile
                endIcon={variant.includes('icon') ? <Icon name="domcek" /> : undefined}
              >
                {variant.includes('icon') ? undefined : variant}
              </ButtonComponent>
            ))}
          </div>
        ))}
      </div>
    )
  },
}
