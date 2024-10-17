import { useTranslation } from 'next-i18next'
import { Fragment } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { DocumentEntityFragment } from '@/src/services/graphql/api'
import { formatDate } from '@/src/utils/formatDate'
import { formatFileExtension } from '@/src/utils/formatFileExtension'
import { formatFileSize } from '@/src/utils/formatFileSize'
import { isDefined } from '@/src/utils/isDefined'
import { useGetDownloadAriaLabel } from '@/src/utils/useGetDownloadAriaLabel'

type Props = {
  document: DocumentEntityFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1946-18524&m=dev
 */

const DocumentPageHeader = ({ document }: Props) => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language
  const { getDownloadAriaLabel } = useGetDownloadAriaLabel()

  if (!document.attributes) return null

  const { title, files, publishedAt } = document.attributes

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredFiles = files.filter(isDefined) ?? []

  const publishedAtString = `${t('documentPageContent.publishedAt')}: ${formatDate(publishedAt)}`
  const fileExtensionString = formatFileExtension(
    filteredFiles[0]?.media.data?.attributes?.ext ?? '',
  )
  const fileSizeString = formatFileSize(filteredFiles[0]?.media.data?.attributes?.size, locale)

  const metadata = (
    filteredFiles.length === 1
      ? [publishedAtString, fileExtensionString, fileSizeString]
      : [publishedAtString, t('documentPageContent.numberOfFiles', { count: filteredFiles.length })]
  )
    // eslint-disable-next-line unicorn/no-array-callback-reference
    .filter(isDefined)

  return (
    <SectionContainer background="secondary">
      <div className="py-6 lg:py-8">
        <div className="flex flex-col items-start gap-4 lg:gap-6">
          <div className="rounded-2xl bg-background-primary p-4">
            <Icon name="dokument" className="size-6" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <Typography variant="h1">{title}</Typography>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                {metadata.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={index}>
                    {index > 0 ? (
                      <div
                        className="size-1 rounded-full bg-content-secondary max-sm:hidden"
                        aria-hidden
                      />
                    ) : null}
                    <Typography>{item}</Typography>
                  </Fragment>
                ))}
              </div>
            </div>
            {filteredFiles.length === 1 ? (
              <Button
                variant="category-solid"
                asLink
                href={filteredFiles[0].media.data?.attributes?.url ?? '#'}
                hasLinkIcon={false}
                startIcon={<Icon name="stiahnut" />}
                aria-label={getDownloadAriaLabel(filteredFiles[0])}
              >
                {t('documentPageContent.downloadButtonLabel')}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default DocumentPageHeader
