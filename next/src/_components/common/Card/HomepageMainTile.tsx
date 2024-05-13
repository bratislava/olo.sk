import cx from 'classnames'

import CardBase, { CardBaseProps } from '@/_components/common/Card/CardBase'
import Icon from '@/_components/common/Icon/Icon'
import Link from '@/_components/common/Link/Link'
import Typography from '@/_components/common/Typography/Typography'

type HomepageMainTileProps = {
  variant: 'background-white' | 'background-yellow'
  title: string
  text: string
  linkHref: string
  className?: string
}

const cardBaseVariantMap: Record<HomepageMainTileProps['variant'], CardBaseProps['variant']> = {
  'background-white': 'plain-white',
  'background-yellow': 'plain-brand',
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1202-14657&mode=dev
 */

const HomepageMainTile = ({ variant, title, text, className, linkHref }: HomepageMainTileProps) => {
  return (
    <CardBase variant={cardBaseVariantMap[variant]} className={className}>
      <div className="flex h-full flex-col items-start justify-between p-4 lg:p-6">
        <Typography variant="p-default">{text}</Typography>
        <div className="flex flex-col gap-4 self-stretch">
          <Typography
            variant="h6"
            className_onlyWhenNecessary="line-clamp-3 group-hover/CardBase:underline"
          >
            {title}
          </Typography>
          {/* TODO Add aria label */}
          <Link
            variant="unstyled"
            href={linkHref}
            stretched
            aria-label=""
            /* 2.5rem = 40px */
            className={cx('flex size-[2.5rem] items-center justify-center rounded-lg', {
              'bg-background-secondary': variant === 'background-white',
              'bg-background-primary': variant === 'background-yellow',
            })}
          >
            {/* 1.5rem  = 24px */}
            <Icon name="sipka-doprava" className="size-[1.5rem]" />
          </Link>
        </div>
      </div>
    </CardBase>
  )
}

export default HomepageMainTile
