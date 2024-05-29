import Image from 'next/image'

import oloTruckImage from '@/src/assets/images/olo-truck.jpg'
import { generateImageSizes } from '@/src/utils/generateImageSizes'

const imageSizes = generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })

const ImagePlaceholder = () => {
  return <Image src={oloTruckImage} sizes={imageSizes} alt="" fill className="object-cover" />
}

export default ImagePlaceholder
