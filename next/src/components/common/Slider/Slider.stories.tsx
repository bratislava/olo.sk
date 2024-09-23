import type { Meta, StoryObj } from '@storybook/react'

import { OloTruckImage, ZevoIronHandImage } from '@/src/assets/images/index'

import SliderComponent from './Slider'

const createDummySlides = () => {
  const slideTitles = ['Nadpis slidu 1', 'Nadpis slidu 2', 'Nadpis slidu 3', 'Nadpis slidu 4']

  return slideTitles.map((title, index) => {
    return {
      title,
      text: 'Subtext',
      media: {
        data: {
          attributes: {
            name: '',
            url: index % 2 === 0 ? OloTruckImage.src : ZevoIronHandImage.src,
            alternativeText: '',
          },
        },
      },
      link: {
        url: '#',
        label: 'Zistiť viac',
      },
    }
  })
}

const meta: Meta<typeof SliderComponent> = {
  component: SliderComponent,
  title: 'Components/Slider',
  tags: ['autodocs'],
  args: {
    slides: createDummySlides(),
  },
  parameters: {
    controls: { exclude: ['slides'] },
  },
}

export default meta

type Story = StoryObj<typeof SliderComponent>

export const Slider: Story = {
  render: (args) => {
    return (
      // 798px = 49.875rem
      <div className="max-w-[49.875rem]">
        <SliderComponent {...args} />
      </div>
    )
  },
}

export const AllSliders: Story = {
  render: (args) => (
    <div className="flex max-w-[49.875rem] flex-col items-start gap-4">
      <div className="w-full">
        <p className="mb-1 text-[.7rem]">default</p>
        <SliderComponent {...args} />
      </div>
      <div className="w-full">
        <p className="mb-1 text-[.7rem]">with inverted colors</p>
        <SliderComponent {...args} backgroundColor="#1F5F0F" />
      </div>
    </div>
  ),
}
