import React from 'react'

import ContactRowCard, { ContactRowCardProps } from '@/src/components/common/Card/ContactRowCard'
import Typography from '@/src/components/common/Typography/Typography'

type Props = {
  title: string
  text?: string | null | undefined
  contacts: Pick<ContactRowCardProps, 'contact' | 'variant'>[]
}

const ContactBox = ({ title, text, contacts }: Props) => (
  <div className="flex flex-col divide-y divide-border-default rounded-lg border border-border-default">
    <div className="flex flex-col items-start gap-2 self-stretch px-6 py-5.5">
      <Typography variant="h5" as="h3">
        {title}
      </Typography>
      {text ? <Typography variant="p-default">{text}</Typography> : null}
    </div>

    <div className="flex flex-col divide-y divide-border-default px-6 py-2">
      {contacts.map((contact, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ContactRowCard key={index} {...contact} />
      ))}
    </div>
  </div>
)

export default ContactBox
