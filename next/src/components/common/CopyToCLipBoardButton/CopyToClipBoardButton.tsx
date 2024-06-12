import { useTranslation } from 'next-i18next'
import { useCopyToClipboard } from 'usehooks-ts'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'

type Props = {
  copyText: string
  children: React.ReactNode
  className?: string
}

/**
 * Inspired by bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/CopyToClipboardButton/CopyToClipboardButton.tsx
 */

const CopyToClipboardButton = ({ copyText, children, className }: Props) => {
  const [, copy] = useCopyToClipboard()
  const { t } = useTranslation()

  return (
    <Button
      variant="category-outline"
      aria-label={t('shareModal.copy')}
      onPress={() => copy(copyText)}
      startIcon={<Icon name="kopirovat" />}
      className={className}
    >
      {children}
    </Button>
  )
}

export default CopyToClipboardButton
