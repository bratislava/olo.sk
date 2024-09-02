import { Fragment, ReactNode } from 'react'

import StaticMap from '@/src/components/common/Box/StaticMap'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import cn from '@/src/utils/cn'

type AddressAndDirectionsBoxProps = {
  latitude?: string | null
  longitude?: string | null
  children: ReactNode[]
  className?: string
}

const AddressAndDirectionsBox = ({
  latitude,
  longitude,
  children,
  className,
}: AddressAndDirectionsBoxProps) => {
  if (children.length === 0) return null

  // TODO: Formatting of the text that comes as children - some words are bold

  return (
    <div
      className={cn(
        'flex flex-col rounded-lg border border-border-default bg-background-primary lg:flex-row',
        className,
      )}
    >
      <StaticMap latitude={latitude} longitude={longitude} />
      <div className="flex flex-col px-4 lg:px-6 lg:py-3">
        {children.map((child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={index}>
            {index > 0 && <SidebarDivider />}
            {child}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default AddressAndDirectionsBox
