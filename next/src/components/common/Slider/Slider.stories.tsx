import type { Meta, StoryObj } from '@storybook/react'

import imagePlaceholderKarate from '@/src/assets/images/olo-placeholder-karate.png'
import imagePlaceholderTruck from '@/src/assets/images/olo-truck.jpg'

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
            url: index % 2 === 0 ? imagePlaceholderTruck.src : imagePlaceholderKarate.src,
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
    return <SliderComponent {...props} />
  },
}
