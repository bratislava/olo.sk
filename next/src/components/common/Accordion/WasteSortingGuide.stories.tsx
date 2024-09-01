import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import WasteSortingGuideComponent, {
  WasteSortingGuideProps,
} from '@/src/components/common/Accordion/WasteSortingGuide'

const wasteSortingGuideData: WasteSortingGuideProps = {
  leftColumn: {
    columnTitle: 'Patrí sem:',
    columnItems: ['Item 1', 'Item 2', 'Item 3'],
    columnAlertMessage: { text: null, title: null },
  },
  rightColumn: {
    columnTitle: 'Nepatrí sem:',
    columnItems: ['Item 1', 'Item 2', 'Item 3'],
    columnAlertMessage: { text: null, title: null },
  },
  bottomAlertMessage: {
    title: 'Pozor!',
    text: 'Oleje a tuky musia byť zbavené tuhých nečistôt a zvyškov jedál, preto je vhodné ich precediť cez sitko a uložené v uzatvorenej čistej plastovej fľaši. Olej nelejte priamo do zbernej nádoby.',
  },
}

const meta: Meta<typeof WasteSortingGuideComponent> = {
  component: WasteSortingGuideComponent,
  title: 'Components/Accordion/WasteSortingGuide',
  tags: ['autodocs'],
  args: {
    leftColumn: wasteSortingGuideData.leftColumn,
    rightColumn: wasteSortingGuideData.rightColumn,
    bottomAlertMessage: wasteSortingGuideData.bottomAlertMessage,
    className: 'rounded-lg border border-border-default bg-background-primary',
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
type Story = StoryObj<typeof WasteSortingGuideComponent>

export const WasteSortingGuide: Story = {
  render: (args) => (
    <div className="w-full min-w-[256px] max-w-[1136px]">
      <WasteSortingGuideComponent {...args} />
    </div>
  ),
}
