import React, { ReactNode } from 'react'

import Button from '@/src/components/common/Button/Button'
import Typography from '@/src/components/common/Typography/Typography'
import Markdown from '@/src/components/formatting/Markdown'
import { LinkFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type SectionHeaderProps = {
  title?: string | null | undefined
  text?: string | null | undefined
  asRichtext?: boolean
  isFullWidth?: boolean
  isCentered?: boolean
  showMoreLink?: LinkFragment | null | undefined
  className?: string
  additionalComponent?: ReactNode
}

const SectionHeader = ({
  title,
  text,
  asRichtext = false,
  isFullWidth = false,
  isCentered = false,
  showMoreLink,
  className,
  additionalComponent = null,
}: SectionHeaderProps) => {
  const { getLinkProps } = useGetLinkProps()

  if (!title && !text && !showMoreLink) {
    return null
  }

  return (
    <div
      className={cn('flex items-center lg:justify-end', {
        'flex items-start gap-y-6 max-lg:flex-col lg:justify-between': title,
        'lg:justify-start': !showMoreLink,
      })}
    >
      {title || text || additionalComponent ? (
        <div
          className={cn(
            'flex w-full flex-col items-start gap-4',
            // 50rem = 800px
            {
              'items-center text-center': isCentered,
              'max-w-[50rem]': !isFullWidth,
            },
            className,
          )}
        >
          {title ? <Typography variant="h2">{title}</Typography> : null}
          {text ? (
            asRichtext ? (
              <Markdown content={text} />
            ) : (
              <Typography variant="p-default">{text}</Typography>
            )
          ) : null}
          {additionalComponent}
        </div>
      ) : null}

      {showMoreLink ? (
        // Styling is a bit different from Figma, to make it more consistent. Adding mt-2 when title is used for better alignment to center of first line
        <div className={cn({ 'lg:mt-2': title })}>
          <Button asLink variant="black-link" {...getLinkProps(showMoreLink)} />
        </div>
      ) : null}
    </div>
  )
}

export default SectionHeader
