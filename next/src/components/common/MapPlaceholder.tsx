import Image from 'next/image'

import mapImage from '@/src/assets/images/olo-placeholder-map.jpg'

const MapPlaceholder = () => {
  return (
    <div className="relative w-[324px]">
      <Image
        src={mapImage}
        alt="Mapa"
        className="rounded-t-lg object-cover lg:rounded-l-lg lg:rounded-t-none"
        fill
      />
    </div>
  )
}

export default MapPlaceholder
