import Image from 'next/image'

import oloTruckImage from '@/src/assets/images/olo-truck.jpg'
import cn from '@/src/utils/cn'
import { generateImageSizes } from '@/src/utils/generateImageSizes'

const imageSizes = generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })

type ImagePlaceholderProps = {
  className?: string
}

const ImagePlaceholder = ({ className }: ImagePlaceholderProps) => {
  return (
    <Image
      src={oloTruckImage}
      sizes={imageSizes}
      alt=""
      fill
      className={cn('object-cover', className)}
    />
  )
}

export default ImagePlaceholder
