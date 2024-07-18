/* eslint-disable pii/no-email */
import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/src/components/common/Button/Button'
import BasicRowCard from '@/src/components/common/Card/BasicRowCard'
import ContactRowCard from '@/src/components/common/Card/ContactRowCard'
import Icon from '@/src/components/common/Icon/Icon'
import OloIcon from '@/src/components/common/Icon/OloIcon'

import SidebarContactsComponent from './SidebarContacts'

type Props = {
  openingTime: string
  phone: string
  mail: string
  address: string
  button1Text: string
  button2Text: string
}

const meta: Meta<Props> = {
  title: 'Components/Sidebar/SidebarContacts',
  args: {
    openingTime: 'Otvorené (do 17:00)',
    phone: '+421 987 654 321',
    mail: 'zevo@olo.sk',
    address: 'Vlčie hrdlo 72, 821 07 Bratislava',
    button1Text: 'Navigovať',
    button2Text: 'Poslať e-mail',
  },
  argTypes: {},
}

export default meta
type Story = StoryObj<Props>

export const SidebarContacts: Story = {
  render: (args) => {
    return (
      <div className="mx-auto max-w-[288px] lg:max-w-[384px]">
        <SidebarContactsComponent>
          <BasicRowCard variant="icon-value" iconName="hodiny" value={args.openingTime} />
          <ContactRowCard variant="phone" contact={args.phone} />
          <ContactRowCard variant="mail" contact={args.mail} />
          <BasicRowCard variant="icon-value" iconName="place" value={args.address} />
          <div className="flex flex-col gap-3 py-4 lg:py-5">
            <Button variant="category-solid" startIcon={<OloIcon name="directions" />} fullWidth>
              {args.button1Text}
            </Button>
            <Button variant="category-outline" startIcon={<Icon name="mail" />} fullWidth>
              {args.button2Text}
            </Button>
          </div>
        </SidebarContactsComponent>
      </div>
    )
  },
}
