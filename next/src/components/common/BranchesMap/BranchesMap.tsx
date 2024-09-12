import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { Fragment, useRef, useState } from 'react'
import { Map, MapRef, Marker } from 'react-map-gl'

import { MapMarkerDefaultSvg, MapMarkerKoloSvg } from '@/src/assets/markers'
import BranchCard from '@/src/components/common/Card/BranchCard'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import { environment } from '@/src/environment'
import { BranchEntityFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { getBoundsForBranches } from '@/src/utils/getBoundsForBranches'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type Props = {
  branches: BranchEntityFragment[]
}

const BranchesMap = ({ branches }: Props) => {
  const { getFullPath } = useGetFullPath()

  const [hoveredBranchId, setHoveredBranchId] = useState<string | null>(null)
  const initialBounds = getBoundsForBranches(branches)

  const mapRef = useRef<MapRef | null>(null)
  const mapStyle = `mapbox://styles/${environment.mapboxUsername}/${environment.mapboxStyleId}`
  // eslint-disable-next-line const-case/uppercase
  const markerClasses = 'text-action-background-default hover:text-action-background-hover'

  return (
    <div className="flex flex-col items-center justify-center bg-background-primary lg:overflow-hidden lg:rounded-lg">
      <ul className="flex w-full flex-col justify-center gap-4 p-4 lg:flex-row lg:gap-8 lg:p-8">
        {branches
          .map((branch, index) => {
            if (!branch.attributes) return null
            const { title, address } = branch.attributes

            return (
              <Fragment key={branch.id}>
                {index > 0 ? <SidebarDivider className="lg:w-0 lg:border-b-0 lg:border-l" /> : null}
                <li className="grow lg:w-0">
                  <BranchCard
                    title={title}
                    linkHref={getFullPath(branch)}
                    address={address}
                    variant="unstyled"
                    className="size-full"
                    typographyClassName={cn({
                      underline: hoveredBranchId === branch.id, // Underline card title when hovering over its map marker
                    })}
                  />
                </li>
              </Fragment>
            )
          })
          // eslint-disable-next-line unicorn/no-array-callback-reference
          .filter(isDefined)}
      </ul>

      <div className="h-[30rem] w-full overflow-hidden">
        <Map
          ref={mapRef}
          style={{ width: '100%', height: '100%' }}
          initialViewState={{
            bounds: initialBounds,
            fitBoundsOptions: {
              padding: 100,
              offset: [0, 10],
            },
          }}
          mapboxAccessToken={environment.mapboxAccessToken}
          mapStyle={mapStyle}
          attributionControl={false}
          cooperativeGestures
        >
          {branches.map((branch) => {
            const { latitude, longitude, mapIconName } = branch.attributes ?? {}
            if (!latitude || !longitude) return null

            return (
              <Marker key={branch.id} longitude={longitude} latitude={latitude} anchor="bottom">
                <motion.button
                  style={{ originY: 1 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredBranchId === branch.id ? 1 : 0.75 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    href={getFullPath(branch) ?? ''}
                    onMouseEnter={() => setHoveredBranchId(branch.id ?? null)}
                    onMouseLeave={() => setHoveredBranchId(null)}
                  >
                    {mapIconName === 'kolo' ? (
                      <MapMarkerKoloSvg className={markerClasses} />
                    ) : (
                      <MapMarkerDefaultSvg className={markerClasses} />
                    )}
                  </Link>
                </motion.button>
              </Marker>
            )
          })}
        </Map>
      </div>
    </div>
  )
}

export default BranchesMap
