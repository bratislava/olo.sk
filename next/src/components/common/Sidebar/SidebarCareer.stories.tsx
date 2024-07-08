import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/src/components/common/Button/Button'
import BasicRowCard from '@/src/components/common/Card/BasicRowCard'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'

import SidebarCareerComponent from './SidebarCareer'

type Props = {
  rowsContent: {
    label: string
    value: string
  }[]
  buttonLabel: string
  buttonText: string
}

const meta: Meta<Props> = {
  title: 'Components/Sidebar/SidebarCareer',
  args: {
    buttonLabel: 'Máte záujem o pozíciu?',
    buttonText: 'Odoslať životopis',
    rowsContent: [
      {
        label: 'Pracovný čas',
        value: '06:30 – 14:30',
      },
      {
        label: 'Pracovný pomer',
        value:
          'na dobu určitú 6 mesiacov, možnosť predĺženia pracovného pomeru na dobu určitú a po osvedčení možnosť zmeny pracovného pomeru na neurčitý čas',
      },
      {
        label: 'Kontakt',
        value: `Silvia Pačutová\npacutova@olo.sk`,
      },
    ],
  },
  argTypes: {},
}

export default meta
type Story = StoryObj<Props>

export const SidebarCareer: Story = {
  render: (args) => {
    return (
      <div className="mx-auto max-w-[288px] lg:max-w-[384px]">
        <SidebarCareerComponent>
          <BasicRowCard
            variant="label-value-vertical"
            label={args.rowsContent[0].label}
            value={args.rowsContent[0].value}
          />
          <BasicRowCard
            variant="label-value-vertical"
            label={args.rowsContent[1].label}
            value={args.rowsContent[1].value}
          />
          <BasicRowCard
            variant="label-value-vertical"
            label={args.rowsContent[2].label}
            value={args.rowsContent[2].value}
          />
          <div className="flex flex-col gap-3 py-4 lg:py-5">
            <Typography variant="h6">{args.buttonLabel}</Typography>
            <Button variant="category-solid" startIcon={<Icon name="karty-a-preukazy" />} fullWidth>
              {args.buttonText}
            </Button>
          </div>
        </SidebarCareerComponent>
      </div>
    )
  },
}
