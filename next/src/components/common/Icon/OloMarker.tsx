import React from 'react'

import { MapMarkerDefaultSvg, MapMarkerKoloSvg } from '@/src/assets/markers'
import cn from '@/src/utils/cn'

type OloMarkerProps = {
  hasKoloStyle: boolean
  className?: string
}

const OloMarker = ({ hasKoloStyle, className }: OloMarkerProps) => {
  return hasKoloStyle ? (
    <MapMarkerKoloSvg className={cn(className)} />
  ) : (
    <MapMarkerDefaultSvg className={cn(className)} />
  )
}

export default OloMarker
