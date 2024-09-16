import { MapMarkerDefaultSvg, MapMarkerKoloSvg } from '@/src/assets/markers'

type OloMarkerProps = {
  mapIconName: string | null | undefined
  className?: string
}

const OloMarker = ({ mapIconName, className }: OloMarkerProps) => {
  return mapIconName === 'kolo' ? (
    <MapMarkerKoloSvg className={className} />
  ) : (
    <MapMarkerDefaultSvg className={className} />
  )
}

export default OloMarker
