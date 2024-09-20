import BranchesMap from '@/src/components/common/BranchesMap/BranchesMap'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { BranchMapHeaderSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

export type PageHeaderBranchMapProps = {
  title: string
  perex?: string | null | undefined
  header: BranchMapHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13398&t=YDBwFkSBAz7ZvIPe-4
 */

const PageHeaderBranchMap = ({ title, perex, header }: PageHeaderBranchMapProps) => {
  const { branches } = header

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredBranches = branches?.data.filter(isDefined) ?? []

  return (
    <>
      <SectionContainer background="secondary">
        <HeaderTitleText title={title} text={perex} />
        <div className="relative overflow-hidden max-lg:-mx-4 lg:top-18 lg:-mt-18">
          <BranchesMap branches={filteredBranches} />
        </div>
      </SectionContainer>
      {/* This div serves as an empty space for the image to overlap correctly */}
      <div aria-hidden className="h-18 max-lg:hidden" />
    </>
  )
}

export default PageHeaderBranchMap
