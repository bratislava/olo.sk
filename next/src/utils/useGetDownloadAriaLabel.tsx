// import { useLocale } from '@/utils/useLocale'
import { useTranslation } from 'next-i18next'

import { FileItemFragment } from '@/src/services/graphql/api'
import { formatFileExtension } from '@/src/utils/formatFileExtension'
import { formatFileSize } from '@/src/utils/formatFileSize'

// Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/utils/useGetDownloadAriaLabel.tsx

export const useGetDownloadAriaLabel = () => {
  const { t } = useTranslation()

  const getDownloadAriaLabel = (file: FileItemFragment): string => {
    if (!file) return `${t('fileItem.aria.downloadFile')}`

    const formattedFileFormat = formatFileExtension(file.media.data?.attributes?.ext)
    const formattedFileSize = formatFileSize(file.media.data?.attributes?.size, 'sk')

    return `${t('fileItem.aria.downloadFileAriaLabel', {
      title: file.title ?? file.media.data?.attributes?.name,
      format: formattedFileFormat,
      size: formattedFileSize,
    })}`
  }

  return { getDownloadAriaLabel }
}
