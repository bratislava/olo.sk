import type { Meta, StoryObj } from '@storybook/react'

import HalfBannerComponent from './HalfBanner'

const meta: Meta<typeof HalfBannerComponent> = {
  component: HalfBannerComponent,
  title: 'Components/Banner/HalfBanner',
  args: {
    title: 'Banner title',
    buttonLinkHref: '#',
    buttonText: 'Button',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HalfBannerComponent>

export const HalfBanner: Story = {}
