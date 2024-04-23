import React from 'react'

import Typography from '@/_components/common/Typography/Typography'

type Props = {
  title?: string | null
  text?: string | null | undefined
}

const SectionHeader = ({ title, text }: Props) => {
  return (
    <div className="flex max-w-[600px] flex-col gap-4 empty:hidden">
      {title ? <Typography variant="h2">{title}</Typography> : null}
      {text ? <Typography variant="p-default">{text}</Typography> : null}
    </div>
  )
}

export default SectionHeader
