import React from 'react'

import { BoardMemberRowCardProps } from '@/src/components/common/Card/BoardMemberRowCard'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { BoardMembersSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import BoardMemberRowGroup from '@/src/components/common/BoardMemberRowGroup/BoardMemberRowGroup'

type Props = {
  section: BoardMembersSectionFragment | null | undefined
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=6518-24959&t=GS5LOvt0zHZ1kXjq-4
 */

const BoardMembersSection = ({ section, className }: Props) => {
  const { title, text, boardMembers } = section ?? {}

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredBoardMembers = boardMembers?.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer className={cn('py-6 lg:py-12', className)}>
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />

        <BoardMemberRowGroup
          BoardMemberRowCardData={filteredBoardMembers
            .map((boardMember): BoardMemberRowCardProps | null => {
              const { name, position, image, links } = boardMember ?? {}

              return {
                name,
                position,
                imgSrc: image?.data?.attributes?.url,
                links: links?.filter(isDefined) ?? [],
              }
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        />
      </div>
    </SectionContainer>
  )
}

export default BoardMembersSection
