import type { Meta, StoryObj } from '@storybook/react'

import { OloTruckImage, ZevoIronHandImage } from '@/src/assets/images/index'

import SliderComponent from './Slider'

const createDummySlides = () => {
  const slideTitles = ['Nadpis slidu 1', 'Nadpis slidu 2', 'Nadpis slidu 3', 'Nadpis slidu 4']

  return slideTitles.map((title, index) => {
    return {
      title,
      text: 'Subtext',
      backgroundColor: index % 2 === 0 ? '#F1B434' : '#1F5F0F',
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
      // 798px = 49.875rem, 28.125rem = 450px
      <div className="max-w-[49.875rem] lg:h-[28.125rem]">
        <SliderComponent {...args} />
      </div>
    )
  },
}
