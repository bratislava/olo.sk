import { useCopyToClipboard } from 'usehooks-ts'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'

type Props = {
  copyText: string
  children: React.ReactNode
  ariaLabel?: string
  className?: string
}

/**
 * Inspired by bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/CopyToClipboardButton/CopyToClipboardButton.tsx
 */

const CopyToClipboardButton = ({ copyText, children, ariaLabel, className }: Props) => {
  const [, copy] = useCopyToClipboard()

  return (
    <Button
      variant="category-outline"
      aria-label={ariaLabel}
      onPress={() => copy(copyText)}
      startIcon={<Icon name="kopirovat" />}
      className={className}
    >
      {children}
    </Button>
  )
}

export default CopyToClipboardButton
