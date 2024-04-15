'use client'

import cx from 'classnames'

import Typography from '@/app/_components/common/Typography/Typography'

type TagProps = {
  variant: 'without-bg' | 'small' | 'large'
  text: string
}

const Tag = ({ variant, text }: TagProps) => {
  return (
    // eslint-disable-next-line sonarjs/no-duplicate-string
    <div className={cx('', { 'bg-success px-2 py-0.5': variant !== 'without-bg' })}>
      <Typography
        variant="p-small-bold"
        className_onlyWhenNecessary={cx('uppercase tracking-wide', {
          'text-success': variant === 'without-bg',
          'text-white': variant !== 'without-bg',
        })}
      >
        {text}
      </Typography>
    </div>
  )
}

export default Tag
