'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import CardBase from '@/app/_components/common/Card/CardBase'
import Icon from '@/app/_components/common/Icon/Icon'
import MLink from '@/app/_components/common/Link/Link'
import Tag from '@/app/_components/common/Tag/Tag'
import Typography from '@/app/_components/common/Typography/Typography'
import { generateImageSizes } from '@/app/_utils/generateImageSizes'
import templateImage from '@/assets/images/olo-truck.jpg'

type ArticleCardProps = {
  title: string
  linkHref: string
  tagText: string
  className?: string
  imgSrc?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=8-4117&mode=dev
 */

const imageSizes = generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })

const ArticleCard = ({ title, className, linkHref, imgSrc, tagText }: ArticleCardProps) => {
  return (
    <CardBase className={twMerge('gap-4', className)}>
      <div className="relative aspect-article-card shrink-0 overflow-hidden rounded-lg">
        {imgSrc ? (
          <Image src={imgSrc} sizes={imageSizes} alt="" className="object-cover" />
        ) : (
          <Image src={templateImage} sizes={imageSizes} alt="" fill className="object-cover" />
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
