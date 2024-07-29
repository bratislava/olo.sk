import Image from 'next/image'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import cn from '@/src/utils/cn'
import { generateImageSizes } from '@/src/utils/generateImageSizes'

type CardImageProps = {
  imgSrc?: string
  className?: string // usually used to set aspect-ratio and corner radius
}

const imageSizes = generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })

const CardImage = ({ imgSrc, className }: CardImageProps) => {
  return (
    <div className={cn('relative shrink-0 overflow-hidden', className)}>
      {imgSrc ? (
        <Image src={imgSrc} sizes={imageSizes} alt="" fill className="object-cover" />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  )
}

export default CardImage
