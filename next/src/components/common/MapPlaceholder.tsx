import Image from 'next/image'

import mapImage from '@/src/assets/images/olo-placeholder-map.jpg'

const MapPlaceholder = () => {
  return (
    <div className="relative h-[12.25rem] w-[20.25rem]">
      <Image
        src={mapImage}
        alt=""
        className="rounded-t-lg object-cover lg:rounded-l-lg lg:rounded-t-none"
        fill
      />
    </div>
  )
}

export default MapPlaceholder
