import { ReactNode } from 'react'

import StaticMap from '@/src/components/common/Box/StaticMap'
import cn from '@/src/utils/cn'

type DirectionsBoxProps = {
  latitude?: string | null
  longitude?: string | null
  children: ReactNode[]
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10975&m=dev
 */

const DirectionsBox = ({ latitude, longitude, children, className }: DirectionsBoxProps) => {
  if (children.length === 0) return null

  return (
    <div
      className={cn(
        'flex w-[18rem] flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary lg:h-[13.75rem] lg:w-full lg:flex-row',
        className,
      )}
    >
      <StaticMap latitude={latitude} longitude={longitude} />
      <div className="flex flex-col justify-center divide-y divide-border-default px-4 lg:px-6 lg:py-3">
        {children}
      </div>
    </div>
  )
}

export default DirectionsBox
