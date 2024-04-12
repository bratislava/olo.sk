'use client'

import cx from 'classnames'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import CardBase from '@/app/_components/common/Card/CardBase'
import Icon from '@/app/_components/common/Icon/Icon'
import MLink from '@/app/_components/common/Link/Link'
import Typography from '@/app/_components/common/Typography/Typography'
import templateImage from '@/assets/images/olo-truck.jpg'

type ArticleCardProps = {
  size: 'small' | 'medium' | 'large'
  title: string
  className?: string
}

const ArticleCard = ({ size, title = '', className }: ArticleCardProps) => {
  return (
    <CardBase
      className={twMerge(
        cx(`gap-4`, {
          'w-[288px] sm:w-[17.5rem]': size === 'small', // 17.5rem = 280px
          'w-[288px] sm:w-[24rem]': size === 'medium', // 24rem = 384px
          'w-[288px] sm:w-[37rem]': size === 'large', // 37rem = 592px
        }),
        className,
      )}
    >
      <div className="aspect-39/70">
        <Image src={templateImage} alt="template image" />
      </div>
      <div className="flex grow flex-col justify-between gap-8">
        <div className="flex flex-col gap-2">
          <Typography variant="p-small-black" className_onlyWhenNecessary="tracking-wide">
            {'category'.toUpperCase()}
          </Typography>
          <Typography variant="h4" className_onlyWhenNecessary="line-clamp-3">
            {title}
          </Typography>
        </div>
        <div className="flex gap-1">
          <MLink
            href="/test"
            variant="underlined-medium"
            className="group-hover/CardBase:underline"
          >
            Čítať viac
          </MLink>
          <Icon name="sipka-doprava" className="size-5 self-center" />
        </div>
      </div>
    </CardBase>
  )
}

export default ArticleCard
