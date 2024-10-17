import { useTranslation } from 'next-i18next'
import React from 'react'

import { FileRowCardProps } from '@/src/components/common/Card/FileRowCard'
import FileRowGroup from '@/src/components/common/Card/FileRowGroup'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import DocumentsAllSection from '@/src/components/sections/DocumentsAllSection'
import { DocumentsSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { formatFileExtension } from '@/src/utils/formatFileExtension'
import { formatFileSize } from '@/src/utils/formatFileSize'
import { isDefined } from '@/src/utils/isDefined'
import { useGetDownloadAriaLabel } from '@/src/utils/useGetDownloadAriaLabel'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type Props = {
  section: DocumentsSectionFragment | null | undefined
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1932-18019&m=dev
 */

const DocumentsSection = ({ section, className }: Props) => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language

  const { title, text, showAll, documents } = section ?? {}
  const { getFullPath } = useGetFullPath()
  const { getDownloadAriaLabel } = useGetDownloadAriaLabel()

  if (showAll) {
    return <DocumentsAllSection section={section} className={className} />
  }

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredDocuments = documents?.data.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer className={cn('py-6 lg:py-18', className)}>
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} text={text} />

        <FileRowGroup
          fileRowCardData={filteredDocuments
            .map((document): FileRowCardProps | null => {
              if (!document.attributes) return null

              const { title: documentTitle, files, documentCategory } = document.attributes

              // eslint-disable-next-line unicorn/no-array-callback-reference
              const filteredFiles =
                files?.filter((file) => isDefined(file?.media.data?.attributes)) ?? []

              // if document contains only one file, we want to download it directly
              if (filteredFiles.length === 1) {
                if (!filteredFiles[0]) return null

                const { size, url, ext } = filteredFiles[0].media.data?.attributes ?? {}

                return {
                  variant: 'single-file',
                  title: documentTitle,
                  linkHref: url ?? '#',
                  ariaLabel: getDownloadAriaLabel(filteredFiles[0]),
                  metaData: [
                    documentCategory?.data?.attributes?.title,
                    formatFileExtension(ext ?? ''),
                    formatFileSize(size, locale),
                  ].filter(
                    // eslint-disable-next-line unicorn/no-array-callback-reference
                    isDefined,
                  ),
                }
              }

              // if document contains more files, we want to open its detail page
              return {
                variant: 'multiple-files',
                title: documentTitle,
                linkHref: getFullPath(document),
                ariaLabel: t('documentsSection.openDocumentPage', { title: documentTitle }),
                // TODO replace with better icon
                iconName: 'dokument',
                metaData: [
                  documentCategory?.data?.attributes?.title,
                  t('documentsSection.numberOfFiles', { count: filteredFiles.length }),
                ].filter(
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

export default DocumentsSection
