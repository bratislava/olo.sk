import React from 'react'

import ContactBox from '@/src/components/common/ContactBox'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { ContactsSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: ContactsSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1932-17987&mode=design&t=e6RDJ09bFVN8VTqn-0
 */

const ContactsSection = ({ section }: Props) => {
  const { title, text, contacts } = section ?? {}

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />
        {contacts?.data
          .map((contact) => {
            if (!contact.attributes) return null

            const {
              label,
              text: contactText,
              primaryEmail,
              secondaryEmail,
              primaryPhone,
              secondaryPhone,
            } = contact.attributes

            const contactsList = [
              primaryEmail ? ({ variant: 'mail', contact: primaryEmail } as const) : undefined,
              secondaryEmail ? ({ variant: 'mail', contact: secondaryEmail } as const) : undefined,
              primaryPhone ? ({ variant: 'phone', contact: primaryPhone } as const) : undefined,
              secondaryPhone ? ({ variant: 'phone', contact: secondaryPhone } as const) : undefined,
              // eslint-disable-next-line unicorn/no-array-callback-reference
            ].filter(isDefined)

            return <ContactBox title={label} text={contactText} contacts={contactsList} />
          })
          // eslint-disable-next-line unicorn/no-array-callback-reference
          .filter(isDefined)}
      </div>
    </SectionContainer>
  )
}

export default ContactsSection
