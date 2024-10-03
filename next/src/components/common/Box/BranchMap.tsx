import React, { ReactNode, useRef } from 'react'
import { Map, MapRef, Marker } from 'react-map-gl'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import { environment } from '@/src/environment'
import cn from '@/src/utils/cn'

type BranchMapProps = {
  latitude: number | null | undefined
  longitude: number | null | undefined
  mapMarker: ReactNode
  className?: string
}

const BranchMap = ({ latitude, longitude, mapMarker, className }: BranchMapProps) => {
  const mapRef = useRef<MapRef | null>(null)
  const mapStyle = `mapbox://styles/${environment.mapboxUsername}/${environment.mapboxStyleId}`
  const accessToken = environment.mapboxAccessToken
  const showPlaceholder = !latitude || !longitude || !accessToken

  return (
    // 12.25rem = 196px
    <div className={cn('relative min-h-[12.25rem] max-lg:h-[12.25rem]', className)}>
      {showPlaceholder ? (
        <ImagePlaceholder />
      ) : (
        <Map
          ref={mapRef}
          style={{ width: '100%', height: '100%' }}
          initialViewState={{
            bounds: [longitude, latitude, longitude, latitude],
            fitBoundsOptions: {
              padding: 100,
              offset: [0, 10],
            },
          }}
          reuseMaps
          zoom={14}
          mapboxAccessToken={accessToken}
          mapStyle={mapStyle}
          attributionControl={false}
        >
          <Marker longitude={longitude} latitude={latitude} anchor="bottom">
            {mapMarker}
          </Marker>
        </Map>
      )}
    </div>
  )
}

export default React.memo(BranchMap) // Optimize re-rendering
