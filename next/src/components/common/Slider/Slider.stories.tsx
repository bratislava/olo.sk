import type { Meta, StoryObj } from '@storybook/react'

import imagePlaceholder from '@/src/assets/images/olo-truck.jpg'

import SliderComponent from './Slider'

const createDummySlides = () => {
  const dummySlide = {
    text: 'Subtext',
    media: {
      data: {
        attributes: {
          name: '', // TODO: Do we wish to fetch this field onto frontend? It's now a required field
          url: imagePlaceholder.src,
          alternativeText: 'OLO truck',
        },
      },
    },
    link: {
      url: '#',
      label: 'Zistiť viac',
    },
  }

  return [
    { title: 'Nadpis slidu 1', ...dummySlide },
    { title: 'Nadpis slidu 2', ...dummySlide },
    { title: 'Nadpis slidu 3', ...dummySlide },
    { title: 'Nadpis slidu 4', ...dummySlide },
  ]
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
    return <SliderComponent {...props} className="p-4" />
  },
}
