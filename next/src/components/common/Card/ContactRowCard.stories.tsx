/* eslint-disable pii/no-email */
import type { Meta, StoryObj } from '@storybook/react'

import mailIconUrl from '@/src/assets/icons/mail-outline.svg?url'
import phoneIconUrl from '@/src/assets/icons/telefon.svg?url'

import ContactRowCardComponent from './ContactRowCard'

type Props = {
  hasBottomBorder: boolean
  phoneText: string
  phoneHref: string
  mailText: string
  mailHref: string
}

const meta: Meta<Props> = {
  title: 'Components/Cards/ContactRowCard',
  args: {
    phoneText: '+421 2 50 110 111',
    phoneHref: 'tel:+421250110111',
    mailText: 'zakazka@olo.sk',
    mailHref: 'mailto:zakazka@olo.sk',
    hasBottomBorder: true,
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
              iconSrc: phoneIconUrl,
              linkText: args.phoneText,
              linkHref: args.phoneHref,
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[0.6rem]">variant: mail</p>
          <ContactRowCardComponent
            {...{
              ...args,
              variant: 'mail',
              iconSrc: mailIconUrl,
              linkText: args.mailText,
              linkHref: args.mailHref,
            }}
          />
        </div>
      </div>
    )
  },
}
