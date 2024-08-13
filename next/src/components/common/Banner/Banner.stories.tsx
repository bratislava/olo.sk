import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import * as ImageAssets from '@/src/assets/images'

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
    variant: {
      options: ['background-grey', 'background-black'],
      control: { type: 'radio' },
    },
    imgSrc: {
      options: Object.values(ImageAssets).map((image) => image.src),
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BannerComponent>

export const Banner: Story = {}

export const HalfBanner: Story = {
  args: {
    variant: 'background-yellow',
    title: 'Banner title',
    button1LinkHref: '#',
    button1Text: 'Button',
    button2LinkHref: undefined,
    button2Text: undefined,
  },
  parameters: {
    controls: { exclude: ['variant', 'subtext', 'button2LinkHref', 'button2Text', 'imgSrc'] },
  },
  tags: ['autodocs'],
  render: (args) => <BannerComponent {...args} />,
}
