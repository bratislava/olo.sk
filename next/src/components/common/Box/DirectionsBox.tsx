import { ReactNode } from 'react'

import { MapMarkerDefaultSvg, MapMarkerKoloSvg } from '@/src/assets/markers'
import BranchMap from '@/src/components/common/Box/BranchMap'
import cn from '@/src/utils/cn'

type DirectionsBoxProps = {
  latitude?: string | null
  longitude?: string | null
  mapIconName?: string | null
  children: ReactNode[]
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10975&m=dev
 */

const DirectionsBox = ({
  latitude,
  longitude,
  mapIconName,
  children,
  className,
}: DirectionsBoxProps) => {
  if (children.length === 0) return null

  // eslint-disable-next-line const-case/uppercase
  const markerClasses = 'size-[60px] text-action-background-default'
  const marker =
    mapIconName === 'kolo' ? (
      <MapMarkerKoloSvg className={markerClasses} />
    ) : (
      <MapMarkerDefaultSvg className={markerClasses} />
    )

  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary lg:flex-row',
        className,
      )}
    >
      <BranchMap
        latitude={latitude}
        longitude={longitude}
        mapMarker={marker}
        className="w-full lg:w-1/3"
      />
      <div className="flex flex-col justify-center divide-y divide-border-default px-4 lg:w-2/3 lg:px-6 lg:py-3">
        {children}
      </div>
    </div>
  )
}

export default DirectionsBox
