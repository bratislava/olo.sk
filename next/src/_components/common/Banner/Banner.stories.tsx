import type { Meta, StoryObj } from '@storybook/react'

import * as ImageAssets from '@/assets/images'

import BannerComponent from './Banner'

const meta: Meta<typeof BannerComponent> = {
  component: BannerComponent,
  title: 'Components/Banner',
  args: {
    variant: 'background-grey',
    title: 'Banner title',
    subtext: 'Banner subtext',
    button1LinkHref: '#',
    button1Text: 'Button1',
    button2LinkHref: '#',
    button2Text: 'Button2',
    imgSrc: ImageAssets.AbstractBackgroundImage.src,
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
