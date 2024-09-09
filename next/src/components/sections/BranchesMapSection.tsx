import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { Fragment, useRef, useState } from 'react'
import { Map, MapRef, Marker } from 'react-map-gl'

import BranchCard from '@/src/components/common/Card/BranchCard'
import OloMarker from '@/src/components/common/Icon/OloMarker'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { KoloHomepageSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
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

  // TODO: For cards, iterate via the mainCards array returned from Strapi, not branches

  const { title: sectionTitle, text, branches } = section ?? {}
  const mapRef = useRef<MapRef | null>(null)
  // TODO: Correct env usage -> environment
  const mapStyle = `mapbox://styles/${process.env.NEXT_PUBLIC_MAPBOX_USERNAME}/${process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID}`

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredBranches = branches?.data.filter(isDefined) ?? []
  const [hoveredBranchSlug, setHoveredBranchSlug] = useState<string | null>(null)
  const initialBounds = getBoundsForBranches(filteredBranches)

  return (
    <SectionContainer
      background="secondary"
      classNameInner="px-0 pb-8 flex flex-col lg:gap-12 lg:pt-12" // TODO: pb-8 is there only for development, it will be deleted later
      className="items-center justify-center"
    >
      <SectionHeader title={sectionTitle} text={text} className="px-4 py-6 lg:p-0" />

      <div className="flex flex-col items-center justify-center bg-background-primary lg:overflow-hidden lg:rounded-lg">
        <ul className="flex w-full flex-col justify-center divide-x divide-border-default lg:flex-row">
          {filteredBranches
            .map((branch) => {
              if (!branch.attributes) return null
              const { title, slug, address } = branch.attributes

              return (
                <Fragment key={branch.id}>
                  <li className="grow lg:w-0">
                    <BranchCard
                      title={title}
                      linkHref={getFullPath(branch) ?? '#'} // TODO remove the fallback value
                      address={address ?? ''} // TODO remove the fallback value
                      variant="unstyled"
                      className={cn('size-full p-4 lg:p-8', {
                        // TODO: Revisit padding - <ul> should take py-4 lg:py-8
                        'bg-action-softBackground-pressed': hoveredBranchSlug === slug,
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
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            mapStyle={mapStyle}
            attributionControl={false}
            cooperativeGestures
          >
            {filteredBranches.map((branch) => {
              const { title, slug, latitude, longitude } = branch.attributes ?? {}
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
                      <OloMarker
                        hasKoloStyle={!!title?.includes('KOLO')}
                        className="text-action-background-default hover:text-action-background-hover"
                      />
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
