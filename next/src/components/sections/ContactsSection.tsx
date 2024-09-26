import { useTranslation } from 'next-i18next'
import React, { ReactNode } from 'react'

import DirectionsBox from '@/src/components/common/Box/DirectionsBox'
import ContactBox from '@/src/components/common/ContactBox'
import Icon from '@/src/components/common/Icon/Icon'
import Pictogram from '@/src/components/common/Icon/Pictogram'
import OpeningHoursBox from '@/src/components/common/OpeningHoursBox'
import OpeningTimesChangeAlert from '@/src/components/common/OpeningTimesChangeAlert'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { ContactsSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: ContactsSectionFragment | null | undefined
}

const BlockTitleText = ({
  title,
  text,
}: {
  title?: string | null | undefined
  text?: string | null | undefined
}) => {
  return title || text ? (
    <div className="flex flex-col gap-2">
      {title ? <Typography variant="h6">{title}</Typography> : null}
      {text ? <Typography variant="p-default">{text}</Typography> : null}
    </div>
  ) : null
}

const ContactsBlock = ({
  icon,
  title,
  content,
}: {
  icon: ReactNode
  title: string
  content: ReactNode[] | ReactNode | undefined
}) => (
  <div className="flex items-start gap-4">
    <div className="rounded-full bg-background-secondary p-3">
      <div className="flex size-6 items-center justify-center">{icon}</div>
    </div>
    <div className="flex grow flex-col gap-4">
      {/* We force height to h-12 to make sure the title is vertically centered to the icon */}
      <div className="flex h-12 items-center">
        <Typography variant="h5">{title}</Typography>
      </div>
      <div className="flex flex-col gap-6">{content}</div>
    </div>
  </div>
)

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=7616-10947&m=dev
 */

const ContactsSection = ({ section }: Props) => {
  const { t } = useTranslation()
  const {
    title,
    contacts,
    openingTimesContacts: openingTimes,
    branchesContacts: branches,
  } = section ?? {}

  const contactsContent = contacts
    ?.map((contact, index) => {
      if (!contact?.contact?.data?.attributes) return null

      const { text, label, primaryEmail, secondaryEmail, primaryPhone, secondaryPhone } =
        contact.contact.data.attributes

      const contactsList = [
        primaryEmail ? ({ variant: 'mail', contact: primaryEmail } as const) : undefined,
        secondaryEmail ? ({ variant: 'mail', contact: secondaryEmail } as const) : undefined,
        primaryPhone ? ({ variant: 'phone', contact: primaryPhone } as const) : undefined,
        secondaryPhone ? ({ variant: 'phone', contact: secondaryPhone } as const) : undefined,
        // eslint-disable-next-line unicorn/no-array-callback-reference
      ].filter(isDefined)

      return (
        // eslint-disable-next-line react/no-array-index-key
        <div className="flex flex-col gap-4" key={index}>
          <BlockTitleText title={contact.title ?? label} text={contact.text ?? text} />
          <ContactBox contacts={contactsList} />
        </div>
      )
    })
    // eslint-disable-next-line unicorn/no-array-callback-reference
    .filter(isDefined)

  const openingTimesContent = (
    <div className="flex flex-col gap-6">
      <OpeningTimesChangeAlert />
      {openingTimes
        ?.map((openingTime, index) => {
          if (!openingTime?.openingTime?.data?.attributes) return null

          const { openingHours } = openingTime.openingTime.data.attributes

          const filteredOpeningHours = openingHours?.filter(isDefined) ?? []

          return (
            // eslint-disable-next-line react/no-array-index-key
            <div className="flex flex-col gap-4" key={index}>
              <BlockTitleText title={openingTime.title} text={openingTime.text} />
              <OpeningHoursBox openingHours={filteredOpeningHours} />
            </div>
          )
        })
        // eslint-disable-next-line unicorn/no-array-callback-reference
        .filter(isDefined)}
    </div>
  )

  const branchesContent = branches
    ?.map((branch, index) => {
      if (!branch?.branch?.data?.attributes) return null

      return (
        // eslint-disable-next-line react/no-array-index-key
        <div className="flex flex-col gap-4" key={index}>
          <BlockTitleText title={branch.title} text={branch.text} />
          <DirectionsBox branch={branch.branch.data} />
        </div>
      )
    })
    // eslint-disable-next-line unicorn/no-array-callback-reference
    .filter(isDefined)

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div className="flex flex-col divide-y divide-border-default overflow-hidden rounded-lg border border-border-default">
        <div className="flex flex-col gap-6 p-6">
          <Typography variant="h4">{title}</Typography>
        </div>
        <div className="flex flex-col gap-8 p-6">
          {contacts?.length ? (
            <ContactsBlock
              icon={<Icon name="telefon" />}
              title={t('contactsSection.contacts')}
              content={contactsContent}
            />
          ) : null}
          {openingTimes?.length ? (
            <ContactsBlock
              icon={<Icon name="hodiny" />}
              title={t('contactsSection.openingTimes')}
              content={openingTimesContent}
            />
          ) : null}
          {branches?.length ? (
            <ContactsBlock
              // TODO change to proper icon instead of pictogram
              icon={<Pictogram name="doprava-a-mapy" />}
              title={t('contactsSection.branch')}
              content={branchesContent}
            />
          ) : null}
        </div>
      </div>
    </SectionContainer>
  )
}

export default ContactsSection
