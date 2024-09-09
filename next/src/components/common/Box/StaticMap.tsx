import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import { environment } from '@/src/environment'
import cn from '@/src/utils/cn'
import { getTailwindBreakpointValue } from '@/src/utils/getTailwindBreakpointValue'
import screens from '@/tailwind.config.screens'

type StaticMapProps = {
  latitude: string | null | undefined
  longitude: string | null | undefined
  className?: string
}

/*
 * Component inspired by marianum.sk: https://github.com/bratislava/marianum.sk/blob/master/next/components/molecules/Footer/FooterMapStatic.tsx
 */

const StaticMap = ({ latitude, longitude, className }: StaticMapProps) => {
  const { width } = useWindowSize()
  // TODO: Edit breakpoints based on the changes in dimensions
  const desktopMapDimensions = { width: 265, height: 190 } // Based on the design, with slight adjustments for the Mapbox logo to be visible
  const mobileMapDimensions = { width: 648, height: 440 }
  const [mapDimensions, setMapDimensions] = useState(desktopMapDimensions)

  /**
   * Inspired by marianum.sk: https://github.com/bratislava/marianum.sk/blob/master/next/utils/useTailwindBreakpoint.ts
   */
  useEffect(() => {
    setMapDimensions(
      width <= getTailwindBreakpointValue(screens.lg) ? mobileMapDimensions : desktopMapDimensions,
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]) // No need to include desktopMapDimensions and mobileMapDimensions since they are constants

  const accessToken = environment.mapboxAccessToken
  const username = environment.mapboxUsername
  const styleId = environment.mapboxStyleId

  const markerUrl = encodeURIComponent(
    'https://cdn-api.bratislava.sk/olo-strapi/upload/pin_e623819d9f.png',
  )

  const staticMapboxUrl = useMemo(() => {
    if (!latitude || !longitude || !accessToken) return null

    return `https://api.mapbox.com/styles/v1/${username}/${styleId}/static/url-${markerUrl}(${longitude},${latitude})/${longitude},${latitude},14/${mapDimensions.width}x${mapDimensions.height}@2x?logo=false&access_token=${accessToken}`
  }, [latitude, longitude, accessToken, username, styleId, markerUrl, mapDimensions])

  return (
    <div className={cn('relative h-[12.25rem] w-full lg:h-full lg:w-[20.25rem]', className)}>
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
