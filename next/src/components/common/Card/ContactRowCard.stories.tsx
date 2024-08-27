/* eslint-disable pii/no-email,i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'

import ContactRowCardComponent from './ContactRowCard'

type Props = {
  phoneLink: string
  mailLink: string
}

const meta: Meta<Props> = {
  title: 'Components/Cards/ContactRowCard',
  args: {
    phoneLink: '+421 2 50 110 111',
    mailLink: 'zakazka@olo.sk',
  },
  parameters: { controls: { exclude: ['className', 'variant'] } },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<Props>

export const ContactRowCard: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-[0.6rem]">variant: phone</p>
          <ContactRowCardComponent
            {...{
              ...args,
              variant: 'phone',
              contact: args.phoneLink,
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[0.6rem]">variant: mail</p>
          <ContactRowCardComponent
            {...{
              ...args,
              variant: 'mail',
              contact: args.mailLink,
            }}
          />
        </div>
      </div>
    )
  },
}
