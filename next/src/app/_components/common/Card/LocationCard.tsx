'use client'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import CardBase from '@/app/_components/common/Card/CardBase'
import CardLink from '@/app/_components/common/Card/CardLink'
import ImagePlaceholder from '@/app/_components/common/ImagePlaceholder'
import Typography from '@/app/_components/common/Typography/Typography'
import { generateImageSizes } from '@/app/_utils/generateImageSizes'

type LocationCardProps = {
  title: string
  linkHref: string
  address: string
  className?: string
  imgSrc?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1205-14699&mode=dev
 */

const LocationCardTitle = ({ text }: { text: string }) => (
  <Typography variant="h4" className_onlyWhenNecessary="line-clamp-3">
    {text}
  </Typography>
)

const LocationCardSubtitle = ({ text }: { text: string }) => (
  <Typography variant="p-default" className_onlyWhenNecessary="line-clamp-3">
    {text}
  </Typography>
)

const LocationCardImage = ({ imgSrc }: { imgSrc?: string }) => {
  const imageSizes = generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })

  return (
    <div className="relative aspect-article-card size-[64px] shrink-0 overflow-hidden rounded-lg lg:size-[128px]">
      {imgSrc ? (
        <Image src={imgSrc} sizes={imageSizes} alt="" className="object-cover" />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  )
}

const LocationCard = ({ title, address, className, linkHref, imgSrc }: LocationCardProps) => {
  return (
    <CardBase className={twMerge('gap-6 border border-border p-4 lg:flex-row lg:p-6 ', className)}>
      <LocationCardImage imgSrc={imgSrc} />
      <div className="flex flex-col gap-6 lg:justify-between lg:gap-0">
        <div className="flex flex-col gap-2">
          <LocationCardTitle text={title} />
          <LocationCardSubtitle text={address} />
        </div>
        <CardLink linkHref={linkHref} />
      </div>
    </CardBase>
  )
}

export default LocationCard
