'use client'

import Image from 'next/image'

import CardBase from '@/app/_components/common/Card/CardBase'
import CardLink from '@/app/_components/common/Card/CardLink'
import ImagePlaceholder from '@/app/_components/common/ImagePlaceholder'
import Typography from '@/app/_components/common/Typography/Typography'
import { generateImageSizes } from '@/app/_utils/generateImageSizes'

type CategoryCardProps = {
  title: string
  linkHref: string
  linkText?: string
  className?: string
  imgSrc?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1199-13816&mode=dev
 */

const CategoryCardTitle = ({ text }: { text: string }) => (
  <Typography variant="h5" className_onlyWhenNecessary="line-clamp-3">
    {text}
  </Typography>
)

const CategoryCardImage = ({ imgSrc }: { imgSrc?: string }) => {
  const imageSizes = generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })

  return (
    <div className="relative aspect-square shrink-0 overflow-hidden rounded-lg">
      {imgSrc ? (
        <Image src={imgSrc} sizes={imageSizes} alt="" className="object-cover" />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  )
}

const CategoryCard = ({ title, className, linkHref, linkText, imgSrc }: CategoryCardProps) => {
  return (
    <CardBase background="white" className={className}>
      <div className="flex flex-col gap-4">
        <CategoryCardImage imgSrc={imgSrc} />
        <div className="flex flex-col gap-2 ">
          <CategoryCardTitle text={title} />
          {/* TODO Replace CardLink with button when ready */}
          <CardLink linkHref={linkHref} customText={linkText} />
        </div>
      </div>
    </CardBase>
  )
}

export default CategoryCard
