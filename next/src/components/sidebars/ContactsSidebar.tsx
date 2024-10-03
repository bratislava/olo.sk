import { useTranslation } from 'next-i18next'
import React from 'react'

import Button from '@/src/components/common/Button/Button'
import BasicRowCard from '@/src/components/common/Card/BasicRowCard'
import ContactRowCard from '@/src/components/common/Card/ContactRowCard'
import Icon from '@/src/components/common/Icon/Icon'
import OloIcon from '@/src/components/common/Icon/OloIcon'
import SidebarContacts from '@/src/components/common/Sidebar/SidebarContacts'
import { ContactsSidebarFragment } from '@/src/services/graphql/api'

type Props = {
  sidebar: ContactsSidebarFragment
}

const ContactsSidebar = ({ sidebar }: Props) => {
  const { t } = useTranslation()

  const { contact, branch } = sidebar ?? {}

  const { primaryEmail, primaryPhone } = contact?.data?.attributes ?? {}
  const { address, navigateToLink } = branch?.data?.attributes ?? {}

  // TODO Do we need both `ContactsSidebar` and `SidebarContacts` components?
  return (
    <SidebarContacts className="[&>*]:px-3 [&>*]:py-4 lg:[&>*]:p-4">
      {primaryPhone ? <ContactRowCard variant="phone" contact={primaryPhone} /> : null}

      {primaryEmail ? <ContactRowCard variant="mail" contact={primaryEmail} /> : null}

      {address ? (
        <BasicRowCard
          variant="icon-value"
          iconName="place"
          value={address}
          // BasicRowCard has its own padding that we need to remove
          innerClassName="py-0 lg:py-0"
        />
      ) : null}

      {primaryEmail || address ? (
        <div className="flex flex-col gap-3">
          {navigateToLink ? (
            <Button
              variant="category-solid"
              startIcon={<OloIcon name="directions" />}
              fullWidth
              asLink
              href={navigateToLink}
              hasLinkIcon={false}
            >
              {t('contactsSidebar.navigate')}
            </Button>
          ) : null}
          {primaryEmail ? (
            <Button
              variant="category-outline"
              startIcon={<Icon name="mail" />}
              fullWidth
              asLink
              href={`mailto:${primaryEmail}`}
              hasLinkIcon={false}
            >
              {t('contactsSidebar.writeUs')}
            </Button>
          ) : null}
        </div>
      ) : null}
    </SidebarContacts>
  )
}

export default ContactsSidebar
