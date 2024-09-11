import React, { ReactNode, useRef } from 'react'
import { Map, MapRef, Marker } from 'react-map-gl'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import { environment } from '@/src/environment'
import cn from '@/src/utils/cn'

type BranchMapProps = {
  latitude?: string | null
  longitude?: string | null
  mapMarker?: ReactNode
  className?: string
}

const BranchMap = ({ latitude, longitude, mapMarker, className }: BranchMapProps) => {
  const mapRef = useRef<MapRef | null>(null)
  const mapStyle = `mapbox://styles/${environment.mapboxUsername}/${environment.mapboxStyleId}`
  const accessToken = environment.mapboxAccessToken
  const showPlaceholder = !latitude || !longitude || !accessToken

  return (
    <div className={cn('h-[12.25rem] lg:h-[13.75rem]', { relative: showPlaceholder }, className)}>
      {showPlaceholder ? (
        <ImagePlaceholder />
      ) : (
        <Map
          ref={mapRef}
          style={{ width: '100%', height: '100%' }}
          initialViewState={{
            bounds: [Number(longitude), Number(latitude), Number(longitude), Number(latitude)],
            fitBoundsOptions: {
              padding: 100,
              offset: [0, 10],
            },
          }}
          reuseMaps
          interactive={false}
          zoom={14}
          mapboxAccessToken={accessToken}
          mapStyle={mapStyle}
          attributionControl={false}
        >
          <Marker longitude={Number(longitude)} latitude={Number(latitude)} anchor="bottom">
            {mapMarker}
          </Marker>
        </Map>
      )}
    </div>
  )
}

export default React.memo(BranchMap) // Optimize re-rendering
