import React from 'react'

import ContactRowCard, { ContactRowCardProps } from '@/src/components/common/Card/ContactRowCard'
import Typography from '@/src/components/common/Typography/Typography'

type Props = {
  title: string
  text: string
  contacts: Pick<ContactRowCardProps, 'contact' | 'variant'>[]
}

const ContactBox = ({ title, text, contacts }: Props) => (
  <div className="flex flex-col items-start rounded-lg border border-border-default">
    <div className="flex flex-col items-start gap-2 self-stretch border-b border-b-[#d5d4d4] px-6 pb-[1.375rem] pt-[1.375rem]">
      <Typography variant="h5" as="h3">
        {title}
      </Typography>
      {text ? (
        <Typography variant="h5" as="h3">
          {text}
        </Typography>
      ) : null}
    </div>

    <div className="flex flex-col items-start px-6 py-2">
      {contacts.map((contact, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ContactRowCard key={index} {...contact} />
      ))}
    </div>
  </div>
)

export default ContactBox
