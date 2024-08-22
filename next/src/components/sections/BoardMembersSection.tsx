import React from 'react'

import PersonContactRowCard from '@/src/components/common/Card/PersonContactRowCard'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { BoardMembersSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: BoardMembersSectionFragment
}

/**
 * Figma (temporary link): https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=616-8377&m=dev
 */

const BoardMembersSection = ({ section }: Props) => {
  const { title, text, contacts } = section

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredContacts = contacts?.data.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-6 lg:gap-8">
        <SectionHeader title={title} text={text} />
        <ul className=" flex flex-col gap-4">
          {filteredContacts
            .map((contact, index) => {
              if (!contact?.attributes) return null

              const { label, text: contactText, image, link } = contact.attributes ?? {}

              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  {index > 0 && <SidebarDivider className="mb-4" />}
                  <PersonContactRowCard
                    name={label}
                    position={contactText}
                    // TODO Consider adding avatar image placeholder
                    imgSrc={image?.data?.attributes?.url}
                    link={link}
                  />
                </li>
              )
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default BoardMembersSection
