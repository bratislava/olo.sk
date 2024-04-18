'use client'

import Image from 'next/image'

import CardBase from '@/app/_components/common/Card/CardBase'
import CardLink from '@/app/_components/common/Card/CardLink'
import ImagePlaceholder from '@/app/_components/common/ImagePlaceholder'
import Typography from '@/app/_components/common/Typography/Typography'
import { generateImageSizes } from '@/app/_utils/generateImageSizes'

type BasicCardProps = {
  title: string
  subtext: string
  linkHref: string
  showBorder?: boolean
  linkText?: string
  className?: string
  imgSrc?: string
}

/*
 * FIGMA: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1199-13816&mode=dev
 */

const BasicCardTitle = ({ text }: { text: string }) => (
  <Typography variant="h5" className_onlyWhenNecessary="line-clamp-3">
    {text}
  </Typography>
)

const BasicCardSubtitle = ({ text }: { text: string }) => (
  <Typography variant="p-default" className_onlyWhenNecessary="line-clamp-3">
    {text}
  </Typography>
)

const BasicCardImage = ({ imgSrc }: { imgSrc?: string }) => {
  const imageSizes = generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })

  return (
    <div className="relative aspect-[384/204] shrink-0 overflow-hidden rounded-t-lg">
      {imgSrc ? (
        <Image src={imgSrc} sizes={imageSizes} alt="" className="object-cover" />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  )
}

const BasicCard = ({
  title,
  subtext,
  className,
  linkHref,
  linkText,
  imgSrc,
  showBorder = true,
}: BasicCardProps) => {
  return (
    <CardBase variant={showBorder ? 'solid' : 'plain'} background="white" className={className}>
      <BasicCardImage imgSrc={imgSrc} />
      <div className="flex flex-col gap-5 px-4 py-4 lg:px-5">
        <div className="flex flex-col gap-3">
          <BasicCardTitle text={title} />
          <BasicCardSubtitle text={subtext} />
        </div>
        {/* TODO Replace CardLink with button when ready */}
        <CardLink linkHref={linkHref} customText={linkText} />
      </div>
    </CardBase>
  )
}

export default BasicCard
