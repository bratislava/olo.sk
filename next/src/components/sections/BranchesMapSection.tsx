import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { Fragment, useMemo, useRef, useState } from 'react'
import { Map, MapRef, Marker } from 'react-map-gl'

import { MapMarkerKoloSvg } from '@/src/assets/pictograms'
import BranchCard from '@/src/components/common/Card/BranchCard'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { KoloHomepageSectionFragment } from '@/src/services/graphql/api'
import { getBoundsForBranches } from '@/src/utils/getBoundsForBranches'
import { isDefined } from '@/src/utils/isDefined'
import { useGetFullPath } from '@/src/utils/useGetFullPath'

type Props = {
  section: KoloHomepageSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1183-12850&t=D7txO1bXf5wrvIOv-1
 */
const BranchesMapSection = ({ section }: Props) => {
  const { getFullPath } = useGetFullPath() // TODO: Implementation for branches needs to be written

  const { title: sectionTitle, text, branches } = section ?? {}
  const mapRef = useRef<MapRef | null>(null)
  const mapStyle = `mapbox://styles/${process.env.NEXT_PUBLIC_MAPBOX_USERNAME}/${process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID}`

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredBranches = useMemo(() => branches?.data.filter(isDefined) ?? [], [branches])
  const [hoveredBranchSlug, setHoveredBranchSlug] = useState<string | null>(null)
  const initialBounds = useMemo(() => getBoundsForBranches(filteredBranches), [filteredBranches])

  return (
    <SectionContainer
      background="secondary"
      classNameInner="px-0 pb-8" // TODO: pb-8 is there only for development, it will be deleted later
      className="items-center justify-center"
    >
      <SectionHeader
        title={sectionTitle}
        text={text}
        className="p-4 lg:py-12"
        // TODO: Revisit the styling of the section - paddings etc.
      />

      <div className="flex flex-col items-center justify-center bg-background-primary lg:overflow-hidden lg:rounded-lg">
        <ul className="flex w-full flex-col justify-center gap-4 p-4 lg:flex-row lg:gap-8 lg:p-8">
          {filteredBranches
            .map((branch, index) => {
              if (!branch.attributes) return null
              const { title, address } = branch.attributes

              return (
                <Fragment key={branch.id}>
                  {index > 0 ? (
                    <SidebarDivider className="lg:w-0 lg:border-b-0 lg:border-l" />
                  ) : null}
                  <li className="grow lg:w-0">
                    <BranchCard
                      title={title}
                      linkHref={getFullPath(branch) ?? '#'} // TODO remove the fallback value
                      // TODO: The cards should display "Zobraziť detaily" not “Čítať viac”  in the link
                      address={address ?? ''} // TODO remove the fallback value
                      variant="unstyled"
                      className="size-full"
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
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            mapStyle={mapStyle}
            attributionControl={false}
            cooperativeGestures
          >
            {filteredBranches.map((branch) => {
              const { latitude, longitude, slug } = branch.attributes ?? {}
              if (!latitude || !longitude) return null

              return (
                <Marker key={branch.id} longitude={longitude} latitude={latitude} anchor="bottom">
                  <motion.button
                    style={{ originY: 1 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredBranchSlug === slug ? 1 : 0.75 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link
                      href={getFullPath(branch) ?? ''}
                      onMouseEnter={() => setHoveredBranchSlug(slug ?? null)}
                      onMouseLeave={() => setHoveredBranchSlug(null)}
                    >
                      <MapMarkerKoloSvg className="text-action-background-default hover:text-action-background-hover" />
                    </Link>
                  </motion.button>
                </Marker>
              )
            })}
          </Map>
        </div>
      </div>
    </SectionContainer>
  )
}

export default BranchesMapSection
