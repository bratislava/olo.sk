'use client'

import cx from 'classnames'

import Typography from '@/app/_components/common/Typography/Typography'

type TagProps = {
  variant: 'without-bg'
  text: string
}

const Tag = ({ variant, text }: TagProps) => {
  return (
    <Typography
      variant="p-small-black"
      className_onlyWhenNecessary={cx('tracking-wide ', {
        'text-success': variant === 'without-bg',
      })}
    >
      {text}
    </Typography>
  )
}

export default Tag
