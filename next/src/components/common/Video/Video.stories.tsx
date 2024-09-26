import type { Meta, StoryObj } from '@storybook/react'

import VideoComponent, { VideoProps } from './Video'

type Props = VideoProps

const meta: Meta<Props> = {
  title: 'Components/Video',
  tags: ['autodocs'],
  args: {
    url: 'https://www.youtube.com/embed/8QBjTTCj2JA',
    alternativeText:
      'Videopríbeh o pracovných príležitostiach a firemných hodnotách spoločnosti OLO',
  },
}

type Story = StoryObj<Props>

export const Video: Story = {
  render: (args) => (
    <div className="h-[42.75rem] max-w-[76rem]">
      <VideoComponent {...args} />
    </div>
  ),
}

export default meta
