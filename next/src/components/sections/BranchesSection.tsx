import { useTranslation } from 'next-i18next'
import React from 'react'

import BranchCard from '@/src/components/common/Card/BranchCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { BranchesSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type Props = {
  section: BranchesSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1205-14686&m=dev
 */

const BranchesSection = ({ section }: Props) => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { title, text, branches } = section

  const { getFullPath } = useGetFullPath()

  const filteredBranches = branches?.data.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div className="flex flex-col items-start gap-6 lg:gap-12">
        <SectionHeader title={title} text={text} />
        <ul className="flex flex-col gap-4 self-stretch lg:grid lg:grid-cols-3 lg:items-start lg:gap-8">
          {filteredBranches
            .map((branch, index) => {
              if (!branch.attributes) return null

              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index} className="h-full [&>*]:h-full">
                  <BranchCard
                    title={branch.attributes.title}
                    address={branch.attributes.address}
                    linkHref={getFullPath(branch)}
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

export default BranchesSection
