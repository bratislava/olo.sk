'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import CardBase from '@/app/_components/common/Card/CardBase'
import Icon from '@/app/_components/common/Icon/Icon'
import MLink from '@/app/_components/common/Link/Link'
import Tag from '@/app/_components/common/Tag/Tag'
import Typography from '@/app/_components/common/Typography/Typography'
import templateImage from '@/assets/images/olo-truck.jpg'

type ArticleCardProps = {
  title: string
  linkHref: string
  tagText: string
  className?: string
  imgSrc?: string
}

const ArticleCard = ({ title, className, linkHref, imgSrc, tagText }: ArticleCardProps) => {
  return (
    <CardBase className={twMerge('gap-4', className)}>
      <div className="aspect-article-card relative shrink-0 overflow-hidden rounded-lg">
        {imgSrc ? (
          <Image src={imgSrc} alt="" className="object-cover" />
        ) : (
          <Image src={templateImage} alt="" fill className="object-cover" />
        )}
      </div>
      <div className="flex grow flex-col justify-between gap-6">
        <div className="flex flex-col gap-2">
          <Tag variant="without-bg" text={tagText} />
          <Typography variant="h4" className_onlyWhenNecessary="line-clamp-3">
            {title}
          </Typography>
        </div>
        <div className="flex gap-1">
          <MLink href={linkHref} variant="underlined" className="group-hover/CardBase:underline">
            Čítať viac
          </MLink>
          {/* TODO Arrow icon should be implemented in button component */}
          <Icon name="sipka-doprava" className="size-5 self-center" />
        </div>
      </div>
    </CardBase>
  )
}

export default ArticleCard
