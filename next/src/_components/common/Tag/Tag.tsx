'use client'

import cx from 'classnames'

import Typography from '../Typography/Typography'

type TagProps = {
  variant: 'without-bg' | 'small' | 'large'
  text: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=42-2980&mode=dev
 */

const Tag = ({ variant, text }: TagProps) => {
  return variant === 'without-bg' ? (
    <Typography
      variant="p-small-black"
      className_onlyWhenNecessary="uppercase tracking-wide text-success"
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
