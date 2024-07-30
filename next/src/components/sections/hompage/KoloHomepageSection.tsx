import React from 'react'

import BranchCard from '@/src/components/common/Card/BranchCard'
import HomepageMainTile from '@/src/components/common/Card/HomepageMainTile'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { KoloHomepageSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type Props = {
  section: KoloHomepageSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1058-10545&m=dev
 */

const KoloHomepageSection = ({ section }: Props) => {
  const { getLinkProps } = useGetLinkProps()
  const { getFullPath } = useGetFullPath()

  const { title, text, mainCards, branchesTitle, branches, showMoreLink } = section ?? {}

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredBranches = branches?.data.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background="primary" className="py-6 lg:py-12">
      <div className="flex flex-col gap-6 lg:gap-12">
        <SectionHeader title={title} text={text} showMoreLink={showMoreLink} />

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          {mainCards?.filter(isDefined).map((card) => {
            const { children: label, href } = getLinkProps(card)

            // TODO proper component
            return <HomepageMainTile title={label} linkHref={href} />
          })}
        </div>

        <SidebarDivider />

        {branchesTitle ? <Typography variant="h3">{branchesTitle}</Typography> : null}

        <div className="grid gap-4 lg:auto-cols-fr lg:grid-flow-col lg:gap-8">
          {filteredBranches
            .map((branch) => {
              if (!branch.attributes) return null

              return (
                <BranchCard
                  title={branch?.attributes.title}
                  linkHref={getFullPath(branch) ?? '#'} // TODO remove the fallback value
                  address={branch?.attributes.address ?? ''} // TODO remove the fallback value
                  className="grow"
                />
              )
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        </div>
      </div>
    </SectionContainer>
  )
}

export default KoloHomepageSection
