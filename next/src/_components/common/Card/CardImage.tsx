import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import ImagePlaceholder from '@/_components/common/ImagePlaceholder'
import { generateImageSizes } from '@/_utils/generateImageSizes'

type ArticleCardProps = {
  imgSrc?: string
  className?: string // usually used to set aspect-ratio and corner radius
}

const imageSizes = generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })

const ArticleCard = ({ imgSrc, className }: ArticleCardProps) => {
  return (
    <div className={twMerge('relative shrink-0 overflow-hidden', className)}>
      {imgSrc ? (
        <Image src={imgSrc} sizes={imageSizes} alt="" fill className="object-cover" />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  )
}

export default ArticleCard
