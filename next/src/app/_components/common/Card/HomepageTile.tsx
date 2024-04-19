'use client'

import cx from 'classnames'

import Button from '@/app/_components/common/Button/Button'
import CardBase, { CardBaseProps } from '@/app/_components/common/Card/CardBase'
import Icon, { iconNameMap } from '@/app/_components/common/Icon/Icon'
import Typography from '@/app/_components/common/Typography/Typography'

type HomepageTileProps = {
  variant: 'small' | 'main-white' | 'main-yellow'
  title: string
  iconName: keyof typeof iconNameMap
  text?: string
  linkHref?: string
  className?: string
}

const cardBaseVariantMap: Record<HomepageTileProps['variant'], CardBaseProps['variant']> = {
  small: 'solid',
  'main-white': 'plain-white',
  'main-yellow': 'plain-brand',
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1202-14657&mode=dev
 */

const HomepageTile = ({
  variant,
  title,
  text,
  className,
  linkHref,
  iconName,
}: HomepageTileProps) => {
  return (
    <CardBase variant={cardBaseVariantMap[variant]} className={className}>
      <div
        className={cx('flex flex-col', {
          'items-center gap-6 px-4 py-5': variant === 'small',
          'items-start gap-8 p-4 lg:gap-12 lg:p-6': variant !== 'small',
        })}
      >
        {variant === 'small' ? (
          <div className="rounded-[20px] bg-background-secondary p-4">
            {iconName ? <Icon name={iconName} className="size-6" /> : <div className="size-6" />}
          </div>
        ) : text ? (
          <Typography variant="p-default">{text}</Typography>
        ) : null}
        <div className="flex flex-col gap-4">
          <Typography variant="h6" className_onlyWhenNecessary="line-clamp-3">
            {title}
          </Typography>
          {/* TODO Probably needs aria label because link button has no text */}
          {variant === 'small' ? null : (
            <Button
              variant="black-link"
              href={linkHref}
              stretched
              className={cx('size-[40px] rounded-lg p-4', {
                'bg-background-secondary': variant === 'main-white',
                'bg-background-primary': variant === 'main-yellow',
              })}
              asLink
            >
              {' '}
            </Button>
          )}
        </div>
      </div>
    </CardBase>
  )
}

/*

<Button variant="black-link" href={linkHref} asLink>
Čítať viac
</Button>

*/

export default HomepageTile
