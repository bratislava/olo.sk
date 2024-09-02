import last from 'lodash/last'
import Image from 'next/image'
import { useMemo } from 'react'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import cn from '@/src/utils/cn'

type StaticMapProps = {
  latitude: string | null | undefined
  longitude: string | null | undefined
  className?: string
}

const StaticMap = ({ latitude, longitude, className }: StaticMapProps) => {
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  const styleId = last(process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID?.split('/'))
  const markerUrl = encodeURIComponent(
    'https://cdn-api.bratislava.sk/olo-strapi/upload/pin_e623819d9f.png',
  )

  // eslint-disable @typescript-eslint/naming-convention
  const imageStyles = 'rounded-t-[0.438rem] lg:rounded-l-[0.438rem] lg:rounded-tr-none'

  const staticMapboxUrl = useMemo(() => {
    if (!latitude || !longitude || !accessToken) return null

    // TODO: Remove fixed width and height of the map
    // TODO: Access `bratislava01` via NEXT_PUBLIC_MAPBOX_STYLE_ID
    return `https://api.mapbox.com/styles/v1/bratislava01/${styleId}/static/url-${markerUrl}(${longitude},${latitude})/${longitude},${latitude},14.5/324x196@2x?logo=false&access_token=${accessToken}`
  }, [latitude, longitude, accessToken, styleId, markerUrl])

  return (
    <div className={cn('relative h-[14.45rem] w-[20.25rem]', className)}>
      {staticMapboxUrl ? (
        <Image
          src={staticMapboxUrl}
          // Empty alt on purpose
          alt=""
          fill
          className={cn('object-cover', imageStyles)}
        />
      ) : (
        <ImagePlaceholder className={imageStyles} />
      )}
    </div>
  )
}

export default StaticMap
