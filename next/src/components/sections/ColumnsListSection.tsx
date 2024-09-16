import Image from 'next/image'
import React from 'react'

import Markdown from '@/src/components/formatting/Markdown'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { ColumnsListSectionFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: ColumnsListSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10486&m=dev
 */

const ColumnsListSection = ({ section }: Props) => {
  const {
    title,
    text,
    backgroundColorColumnList: backgroundColor,
    leftColumn,
    rightColumn,
  } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background={backgroundColor ?? 'primary'} className="w-full py-6 lg:py-18">
      <div className="flex flex-col gap-6 lg:gap-8">
        <SectionHeader title={title} text={text} />

        <div className="grid gap-3 lg:grid-cols-2 lg:gap-8">
          {[leftColumn, rightColumn]
            .filter((column) => column?.length)
            .map((column, columnIndex) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={columnIndex} className="flex flex-col gap-3 lg:gap-4">
                  {column
                    ?.map((columnItem, columnItemIndex) => {
                      if (!columnItem) {
                        return null
                      }

                      const iconSrc = columnItem.icon?.data?.attributes?.url

                      return (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={columnItemIndex} className="flex gap-4">
                          {iconSrc ? (
                            <div className="relative size-6 shrink-0">
                              <Image src={iconSrc} alt="" fill className="object-contain" />
                            </div>
                          ) : null}
                          {/* TODO discuss whether we want to use rich text here instead */}
                          <Markdown content={columnItem.content} />
                        </div>
                      )
                    })
                    // eslint-disable-next-line unicorn/no-array-callback-reference
                    .filter(isDefined)}
                </div>
              )
            })}
        </div>
      </div>
    </SectionContainer>
  )
}

export default ColumnsListSection
