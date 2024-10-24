import React, { ReactNode, useRef } from 'react'
import { Map, MapRef, Marker } from 'react-map-gl'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import { environment } from '@/src/environment'
import cn from '@/src/utils/cn'

type BranchMapProps = {
  latitude?: number | null
  longitude?: number | null
  mapMarker: ReactNode
  className?: string
}

const BranchMap = ({ latitude, longitude, mapMarker, className }: BranchMapProps) => {
  const mapRef = useRef<MapRef | null>(null)
  const mapStyle = `mapbox://styles/${environment.mapboxUsername}/${environment.mapboxStyleId}`
  const accessToken = environment.mapboxAccessToken

  return (
    // 12.25rem = 196px
    <div className={cn('relative min-h-[12.25rem] max-lg:h-[12.25rem]', className)}>
      {latitude && longitude && accessToken ? (
        <Map
          ref={mapRef}
          style={{ width: '100%', height: '100%' }}
          latitude={latitude!}
          longitude={longitude!}
          reuseMaps
          zoom={14}
          mapboxAccessToken={accessToken}
          mapStyle={mapStyle}
          attributionControl={false}
          interactive={false}
        >
          <Marker longitude={longitude!} latitude={latitude!} anchor="bottom">
            {mapMarker}
          </Marker>
        </Map>
      ) : (
        <ImagePlaceholder />
      )}
    </div>
  )
}

export default React.memo(BranchMap) // Optimize re-rendering
