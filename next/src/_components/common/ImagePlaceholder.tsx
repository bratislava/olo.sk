import Image from 'next/image'

import { generateImageSizes } from '@/_utils/generateImageSizes'
import oloTruckImage from '@/assets/images/olo-truck.jpg'

const imageSizes = generateImageSizes({ default: '100vw', md: '50vw', lg: '33vw' })

const ImagePlaceholder = () => {
  return <Image src={oloTruckImage} sizes={imageSizes} alt="" fill className="object-cover" />
}

export default ImagePlaceholder
