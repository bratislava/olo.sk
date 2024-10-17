import { useTranslation } from 'next-i18next'
import React from 'react'

import { FileRowCardProps } from '@/src/components/common/Card/FileRowCard'
import FileRowGroup from '@/src/components/common/Card/FileRowGroup'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { FilesSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { formatFileExtension } from '@/src/utils/formatFileExtension'
import { formatFileSize } from '@/src/utils/formatFileSize'
import { isDefined } from '@/src/utils/isDefined'
import { useGetDownloadAriaLabel } from '@/src/utils/useGetDownloadAriaLabel'

type Props = {
  section: FilesSectionFragment | null | undefined
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13877&t=welewzgz8FI2CbQy-4
 */

// TODO remove this component, use DocumentsSection

const FilesSection = ({ section, className }: Props) => {
  const { title, text, files } = section ?? {}

  const { i18n } = useTranslation()
  const locale = i18n.language

  const { getDownloadAriaLabel } = useGetDownloadAriaLabel()

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredFiles = files?.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer className={cn('py-6 lg:py-18', className)}>
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />

        <FileRowGroup
          fileRowCardData={filteredFiles
            .map((file): FileRowCardProps | null => {
              if (!file.media.data?.attributes) return null

              const { name, size, url, ext } = file.media.data?.attributes ?? {}

              return {
                variant: 'single-file',
                title: file.title ?? name,
                linkHref: url,
                // TODO handle locale
                ariaLabel: getDownloadAriaLabel(filteredFiles[0]),
                metaData: [formatFileExtension(ext ?? ''), formatFileSize(size, locale)].filter(
                  // eslint-disable-next-line unicorn/no-array-callback-reference
                  isDefined,
                ),
              }
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        />
      </div>
    </SectionContainer>
  )
}

export default FilesSection
