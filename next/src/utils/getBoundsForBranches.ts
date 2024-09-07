import { BranchEntityFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

/**
 * This function calculates the bounding box based on the coordinates of individual branches and returns the bounding coordinates as an array
 * Inspired by marianum.sk: https://github.com/bratislava/marianum.sk/blob/master/next/components/sections/MapSection.tsx
 */
export const getBoundsForBranches = (branches: (BranchEntityFragment | null | undefined)[]) => {
  // eslint-disable-next-line unicorn/no-array-callback-reference
  const latitudes = branches.map((branch) => branch?.attributes?.latitude).filter(isDefined) ?? []
  // eslint-disable-next-line unicorn/no-array-callback-reference
  const longitudes = branches.map((branch) => branch?.attributes?.longitude).filter(isDefined) ?? []

  return [
    Math.min(...longitudes),
    Math.max(...latitudes),
    Math.max(...longitudes),
    Math.min(...latitudes),
  ] as [number, number, number, number]
}
