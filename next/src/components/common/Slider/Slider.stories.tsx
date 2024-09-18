import type { Meta, StoryObj } from '@storybook/react'

import SliderPlaceholderKarate from '@/src/assets/images/olo-placeholder-karate.png'
import OloTruckImage from '@/src/assets/images/olo-truck.jpg'

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
            name: '', // TODO: Do we wish to fetch this field onto frontend? It's now a required field
            url: index % 2 === 0 ? OloTruckImage.src : SliderPlaceholderKarate.src,
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
  title: 'Components/Slider/Slider',
  tags: ['autodocs'],
  args: {
    slides: createDummySlides(),
    backgroundColor: '#F1B434',
  },
  parameters: {
    controls: { exclude: ['slides'] },
  },
}

export default meta

type Story = StoryObj<typeof SliderComponent>

export const Slider: Story = {
  render: (props) => {
    return (
      // 798px = 49.875rem
      <div className="max-w-[49.875rem]">
        <SliderComponent {...props} />
      </div>
    )
  },
}
