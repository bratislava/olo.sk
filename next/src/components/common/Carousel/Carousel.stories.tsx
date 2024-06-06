import type { Meta, StoryObj } from '@storybook/react'

import ArticleCard from '@/src/components/common/Card/ArticleCard'

import CarouselComponent from './Carousel'
import ResponsiveCarouselComponent from './ResponsiveCarousel'

const meta: Meta<typeof CarouselComponent> = {
  component: CarouselComponent,
  title: 'Components/Carousel',
  tags: ['autodocs'],
  args: {
    hasVerticalPadding: true,
    visibleCount: 4,
    controlsVariant: 'bottom',
    shiftVariant: 'single',
  },
  argTypes: {
    hasVerticalPadding: {
      control: {
        type: 'boolean',
      },
    },
    visibleCount: {
      options: [1, 2, 3, 4],
    },
    controlsVariant: {
      options: ['bottom', 'side'],
    },
    shiftVariant: {
      options: ['single', 'byPage'],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof CarouselComponent>

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
  <ArticleCard title={`Card ${index}`} tagText="category" linkHref="#" />
))

export const Carousel: Story = {
  render: (args) => (
    <div className="w-full">
      <CarouselComponent {...args} items={items} />
    </div>
  ),
}
export const ResponsiveCarousel: Story = {
  render: (args) => (
    <div className="w-full">
      <ResponsiveCarouselComponent
        items={items}
        shiftVariant={args.shiftVariant}
        controlsVariant={args.controlsVariant}
        hasVerticalPadding={args.hasVerticalPadding}
      />
    </div>
  ),
}
