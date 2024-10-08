import { ReactNode } from 'react'

import Divider from '@/src/components/common/Sidebar/Divider'
import cn from '@/src/utils/cn'

export type SidebarCareerProps = {
  children: ReactNode[]
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10874&m=dev
 */

const SidebarCareer = ({
  //
  children,
  className,
}: SidebarCareerProps) => {
  if (children.length === 0) return null

  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary px-4 lg:px-5',
        className,
      )}
    >
      {children.map((child, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            {index > 0 && <Divider />}
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default SidebarCareer
