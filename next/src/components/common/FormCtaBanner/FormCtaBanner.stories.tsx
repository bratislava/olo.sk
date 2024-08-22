import type { Meta, StoryObj } from '@storybook/react'

import FormCtaBannerComponent from './FormCtaBanner'

const meta: Meta<typeof FormCtaBannerComponent> = {
  component: FormCtaBannerComponent,
  title: 'Components/Banner/FormCtaBanner',
  args: {
    title: 'Headline',
    link: { label: 'button', url: '#' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormCtaBannerComponent>

export const FormCtaBanner: Story = {}
