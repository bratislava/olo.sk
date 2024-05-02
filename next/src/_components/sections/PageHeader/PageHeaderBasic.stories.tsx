/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'

import PageHeaderBasicComponent from './PageHeaderBasic'

const meta: Meta<typeof PageHeaderBasicComponent> = {
  component: PageHeaderBasicComponent,
  title: 'Components/Sections/PageHeaderBasic',
  args: {
    title: 'PageHeaderBasic title',
    text: 'Lorem ipsum dolor sit amet consectetur. Nisi non integer fringilla vel arcu vitae iaculis lorem. Semper at vestibulum massa ut nulla quisque tortor a aliquam. Enim vitae rhoncus sed dictum viverra pellentesque tincidunt convallis nulla. Aliquam diam ultrices aliquam diam venenatis.',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PageHeaderBasicComponent>

export const PageHeaderBasic: Story = {
  render: (args) => <PageHeaderBasicComponent {...args} />,
}
