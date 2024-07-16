import { ReactNode } from 'react'

import MapPlaceholder from '@/src/components/common/MapPlaceholder'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import cn from '@/src/utils/cn'

type MapProps = {
  children: ReactNode[]
  className?: string
}

/**
 *   Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10975&m=dev
 */

const Map = ({ children, className }: MapProps) => {
  if (!children?.length) return null

  return (
    <div
      className={cn(
        'flex flex-col rounded-lg border border-border-default bg-background-primary lg:flex-row',
        className,
      )}
    >
      <MapPlaceholder />

      <div className="flex flex-col px-4 lg:px-6 lg:py-3">
        {children.map((child: ReactNode, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              {index > 0 && <SidebarDivider />}
              {child}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Map
