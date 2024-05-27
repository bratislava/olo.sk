import React from 'react'

import BranchCard from '@/_components/common/Card/BranchCard'
import SectionContainer from '@/_components/layout/Section/SectionContainer'
import SectionHeader from '@/_components/layout/Section/SectionHeader'
import { isDefined } from '@/_utils/isDefined'
import { BranchesSectionFragment } from '@/services/graphql/api'

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
        <div className="flex flex-col flex-wrap gap-4 lg:flex-row lg:gap-8 lg:[&>*]:w-1/3 lg:[&>*]:grow">
          {branches?.data?.length
            ? branches.data
                // eslint-disable-next-line unicorn/no-array-callback-reference
                .filter(isDefined)
                .map((branch) => (
                  <BranchCard
                    title={branch.attributes?.title ?? ''}
                    address={branch.attributes?.address ?? ''}
                    linkHref={`/pobocky/${branch.attributes?.slug}`}
                  />
                ))
            : null}
        </div>
      </div>
    </SectionContainer>
  )
}

export default BranchesSection
