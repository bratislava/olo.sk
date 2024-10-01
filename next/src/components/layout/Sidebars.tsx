import React from 'react'

import ContactsSidebar from '@/src/components/sidebars/ContactsSidebar'
import { PageSidebarsFragment } from '@/src/services/graphql/api'

type Props = {
  sidebar: PageSidebarsFragment | null | undefined
}

const SidebarContent = ({ sidebar }: Props) => {
  switch (sidebar?.__typename) {
    case 'ComponentSidebarsEmptySidebar':
      return null

    case 'ComponentSidebarsContactsSidebar':
      return <ContactsSidebar sidebar={sidebar} />

    default:
      return null
  }
}

const Sidebars = ({ sidebar }: Props) => {
  return (
    <div className="py-6 lg:py-18">
      <SidebarContent sidebar={sidebar} />
    </div>
  )
}

export default Sidebars
