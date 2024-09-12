import React from 'react'

import DirectionsBox from '@/src/components/common/Box/DirectionsBox'
import BasicRowCard from '@/src/components/common/Card/BasicRowCard'
import { BranchEntityFragment } from '@/src/services/graphql/api'

type Props = {
  branch: BranchEntityFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10975&m=dev
 */

const DirectionsBoxByBranch = ({ branch }: Props) => {
  const { latitude, longitude, address, parkingInfo, publicTransportInfo, barrierFreeInfo } =
    branch.attributes ?? {}

  const directionsBoxRows = [
    { iconName: 'place', value: address },
    { iconName: 'directions-bus', value: publicTransportInfo },
    { iconName: 'local-parking', value: parkingInfo },
    { iconName: 'accessible', value: barrierFreeInfo },
  ] as const

  return (
    <DirectionsBox latitude={latitude} longitude={longitude}>
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
    </DirectionsBox>
  )
}

export default DirectionsBoxByBranch
