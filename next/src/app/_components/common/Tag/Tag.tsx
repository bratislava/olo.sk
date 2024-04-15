'use client'

import cx from 'classnames'

import Typography from '@/app/_components/common/Typography/Typography'

type TagProps = {
  variant: 'without-bg' | 'small' | 'large'
  text: string
}

const Tag = ({ variant, text }: TagProps) => {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  return variant === 'without-bg' ? (
    <Typography
      variant="p-small-black"
      className_onlyWhenNecessary={cx('uppercase tracking-wide', {
        'text-success': variant === 'without-bg',
        'text-white': variant !== 'without-bg',
      })}
    >
      {text}
    </Typography>
  ) : (
    <div className="rounded-4 bg-success text-white">
      <Typography
        variant="p-small-bold"
        className_onlyWhenNecessary={cx('uppercase tracking-[0.07rem]', {
          'px-2 py-0.5': variant === 'small',
          'px-2 py-0.5 lg:px-3 lg:py-1.5': variant === 'large',
        })}
      >
        {text}
      </Typography>
    </div>
  )
}

export default Tag
