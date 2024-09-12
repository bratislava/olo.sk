import BranchMap from '@/src/components/common/Box/BranchMap'
import BasicRowCard from '@/src/components/common/Card/BasicRowCard'
import OloMarker from '@/src/components/common/Icon/OloMarker'
import { BranchEntityFragment } from '@/src/services/graphql/api'

type DirectionsBox1Props = {
  branch: BranchEntityFragment
}

// TODO: Check whether the map centers correctly, sometimes we see the ocean

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10975&m=dev
 */

const DirectionsBox1 = ({ branch }: DirectionsBox1Props) => {
  const {
    latitude,
    longitude,
    mapIconName,
    address,
    parkingInfo,
    publicTransportInfo,
    barrierFreeInfo,
  } = branch?.attributes ?? {}

  const directionsBoxRows = [
    { iconName: 'place', value: address },
    { iconName: 'directions-bus', value: publicTransportInfo },
    { iconName: 'local-parking', value: parkingInfo },
    { iconName: 'accessible', value: barrierFreeInfo },
  ] as const

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary lg:flex-row">
      <BranchMap
        latitude={latitude}
        longitude={longitude}
        mapMarker={
          <OloMarker
            mapIconName={mapIconName}
            className="size-[3.75rem] text-action-background-default" // 3.75rem = 60px
          />
        }
        className="w-full lg:w-1/3"
      />
      <div className="flex flex-col justify-center divide-y divide-border-default px-4 lg:w-2/3 lg:px-6 lg:py-3">
        {directionsBoxRows
          .filter((row) => row.value)
          .map((row) => {
            return (
              <BasicRowCard
                key={row.iconName}
                variant="icon-value"
                value={row.value!}
                iconName={row.iconName}
              />
            )
          })}
      </div>
    </div>
  )
}

export default DirectionsBox1
