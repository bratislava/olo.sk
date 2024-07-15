import Image from 'next/image'

import mapImage from '@/src/assets/images/olo-placeholder-map.jpg'

const MapPlaceholder = () => {
  return (
    <Image
      src={mapImage}
      alt="Mapa"
      width={324}
      height={220}
      className="rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
    />
  )
}

export default MapPlaceholder
