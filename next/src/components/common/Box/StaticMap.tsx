import Image from 'next/image'
import { useMemo } from 'react'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import cn from '@/src/utils/cn'

type StaticMapProps = {
  latitude: string | null | undefined
  longitude: string | null | undefined
  className?: string
}

/*
 * Component inspired by marianum.sk: https://github.com/bratislava/marianum.sk/blob/master/next/components/molecules/Footer/FooterMapStatic.tsx
 */

const StaticMap = ({ latitude, longitude, className }: StaticMapProps) => {
  // TODO: Mapbox limitation for static map image: 1280x1280
  // eslint-disable-next-line const-case/uppercase
  const width = 800
  // eslint-disable-next-line const-case/uppercase
  const height = 600

  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  const username = process.env.NEXT_PUBLIC_MAPBOX_USERNAME
  const styleId = process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID

  const markerUrl = encodeURIComponent(
    'https://cdn-api.bratislava.sk/olo-strapi/upload/pin_e623819d9f.png',
  )

  const staticMapboxUrl = useMemo(() => {
    if (!latitude || !longitude || !accessToken) return null

    return `https://api.mapbox.com/styles/v1/${username}/${styleId}/static/url-${markerUrl}(${longitude},${latitude})/${longitude},${latitude},14.5/${width}x${height}@2x?logo=false&access_token=${accessToken}`
  }, [latitude, longitude, accessToken, username, styleId, markerUrl, width, height])

  return (
    <div
      className={cn(
        'relative h-[14.45rem] w-full overflow-hidden rounded-t-[0.438rem] lg:w-[20.25rem] lg:rounded-l-[0.438rem] lg:rounded-tr-none',
        className,
      )}
    >
      {staticMapboxUrl ? (
        <Image
          src={staticMapboxUrl}
          // Empty alt on purpose
          alt=""
          fill
          className="object-cover"
        />
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  )
}

export default StaticMap
