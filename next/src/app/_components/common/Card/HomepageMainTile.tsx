'use client'

import cx from 'classnames'

import Button from '@/app/_components/common/Button/Button'
import CardBase, { CardBaseProps } from '@/app/_components/common/Card/CardBase'
import Typography from '@/app/_components/common/Typography/Typography'

type HomepageMainTileProps = {
  variant: 'background-white' | 'background-yellow'
  title: string
  text?: string
  linkHref?: string
  className?: string
}

const cardBaseVariantMap: Record<HomepageMainTileProps['variant'], CardBaseProps['variant']> = {
  'background-white': 'plain-white',
  'background-yellow': 'plain-brand',
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1202-14657&mode=dev
 */

const HomepageMainTile = ({ variant, title, text, className, linkHref }: HomepageMainTileProps) => {
  return (
    <CardBase variant={cardBaseVariantMap[variant]} className={className}>
      <div className="flex flex-col items-start gap-8 p-4 lg:gap-12 lg:p-6">
        {text ? <Typography variant="p-default">{text}</Typography> : null}
        <div className="flex flex-col gap-4">
          <Typography
            variant="h6"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          {/* TODO Probably needs aria label because link button has no text */}
          <Button
            variant="black-link"
            href={linkHref}
            stretched
            className={cx('size-[40px] rounded-lg p-4', {
              'bg-background-secondary': variant === 'background-white',
              'bg-background-primary': variant === 'background-yellow',
            })}
            asLink
          >
            {' '}
          </Button>
        </div>
      </div>
    </CardBase>
  )
}

export default HomepageMainTile
