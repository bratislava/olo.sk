'use client'

import Image from 'next/image'

import { generateImageSizes } from '@/_utils/generateImageSizes'
import templateImage from '@/assets/images/olo-truck.jpg'

const imageSizes = generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })

const ImagePlaceholder = () => {
  return <Image src={templateImage} sizes={imageSizes} alt="" fill className="object-cover" />
}

export default ImagePlaceholder
