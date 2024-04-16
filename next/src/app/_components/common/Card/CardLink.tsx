'use client'

import Icon from '@/app/_components/common/Icon/Icon'
import MLink from '@/app/_components/common/Link/Link'

type CardLinkProps = {
  linkHref: string
  customText?: string
}

const CardLink = ({ linkHref, customText }: CardLinkProps) => {
  return (
    <div className="flex gap-1">
      <MLink href={linkHref} variant="underlined" className="group-hover/CardBase:underline">
        {/* TODO Add translation */}
        {customText ?? 'Čítať viac'}
      </MLink>
      {/* TODO Arrow icon should be implemented in button component */}
      <Icon name="sipka-doprava" className="size-5 self-center" />
    </div>
  )
}

export default CardLink
