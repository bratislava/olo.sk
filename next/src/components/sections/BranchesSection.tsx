import React from 'react'

import BranchCard from '@/src/components/common/Card/BranchCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { BranchesSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: BranchesSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1205-14686&m=dev
 */

const BranchesSection = ({ section }: Props) => {
  // TODO implement showing all branches based on showAll prop
  const { title, text, branches } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-18">
      <div className="flex flex-col gap-6 lg:gap-12">
        <SectionHeader title={title} text={text} />
        <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:[&>*]:grow">
          {
            // eslint-disable-next-line unicorn/no-array-callback-reference
            branches?.data?.filter(isDefined).length
              ? branches.data.map((branch) => (
                  <li>
                    <BranchCard
                      title={branch.attributes?.title ?? ''}
                      address={branch.attributes?.address ?? ''}
                      linkHref={`/pobocky/${branch.attributes?.slug}`}
                    />
                  </li>
                ))
              : null
          }
        </ul>
      </div>
    </SectionContainer>
  )
}

export default BranchesSection
