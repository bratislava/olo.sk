import React from 'react'

import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type SectionHeaderProps = {
  title: string
  text?: string | null
  isFullWidth?: boolean
  isCentered?: boolean
  className?: string
}

const SectionHeader = ({
  title,
  text,
  isFullWidth = false,
  isCentered = false,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-start gap-4 empty:hidden',
        // 50rem = 800px
        { 'items-center text-center': isCentered, 'max-w-[50rem]': !isFullWidth },
        className,
      )}
    >
      <Typography variant="h2">{title}</Typography>
      {text ? <Typography variant="p-default">{text}</Typography> : null}
    </div>
  )
}

export default SectionHeader
