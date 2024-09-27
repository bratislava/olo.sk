import React from 'react'

import ContactRowCard, { ContactRowCardProps } from '@/src/components/common/Card/ContactRowCard'

type Props = {
  contacts: Pick<ContactRowCardProps, 'contact' | 'variant'>[]
}

const ContactBox = ({ contacts }: Props) => (
  <div className="flex flex-col divide-y divide-border-default rounded-lg border border-border-default">
    <div className="flex flex-col divide-y divide-border-default px-6 py-2">
      {contacts.map((contact, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ContactRowCard key={index} {...contact} />
      ))}
    </div>
  </div>
)

export default ContactBox
