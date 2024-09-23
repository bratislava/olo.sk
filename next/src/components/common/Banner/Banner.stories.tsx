import type { Meta, StoryObj } from '@storybook/react'

import * as ImageAssets from '@/src/assets/images'

import BannerComponent from './Banner'

const meta: Meta<typeof BannerComponent> = {
  component: BannerComponent,
  title: 'Components/Banner/Banner',
  args: {
    variant: 'background-grey',
    title: 'Banner title',
    subtext: 'Banner subtext',
    button1LinkHref: '#',
    button1Text: 'Button1',
    button2LinkHref: '#',
    button2Text: 'Button2',
    imgSrc: ImageAssets.OloTruckImage.src,
  },
  argTypes: {
    imgSrc: {
      options: Object.values(ImageAssets).map((image) => image.src),
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BannerComponent>

export const Banner: Story = {}
