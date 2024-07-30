import React from 'react'

import Typography from '@/src/components/common/Typography/Typography'
import { LinkFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

import Button from '../../common/Button/Button'

type SectionHeaderProps = {
  title?: string | null | undefined
  text?: string | null | undefined
  isFullWidth?: boolean
  isCentered?: boolean
  className?: string
  showMoreLink?: LinkFragment | null | undefined
}

const SectionHeader = ({
  title,
  text,
  isFullWidth = false,
  isCentered = false,
  className,
  showMoreLink,
}: SectionHeaderProps) => {
  const { getLinkProps } = useGetLinkProps()

  return (
    <div className="flex justify-between gap-6 max-lg:flex-col">
      <div
        className={cn(
          'flex w-full flex-col items-start gap-4 empty:hidden',
          // 50rem = 800px
          {
            'items-center text-center': isCentered,
            'max-w-[50rem]': !isFullWidth,
          },
          className,
        )}
      >
        {title ? <Typography variant="h2">{title}</Typography> : null}
        {text ? <Typography variant="p-default">{text}</Typography> : null}
      </div>

      {showMoreLink ? (
        // Styling is a bit different from Figma, to make it more consistent. Adding mt-2 when title is used for better alignment to center of first line
        <div className={cn({ 'mt-2': title })}>
          <Button asLink variant="black-link" {...getLinkProps(showMoreLink)} />
        </div>
      ) : null}
    </div>
  )
}

export default SectionHeader
