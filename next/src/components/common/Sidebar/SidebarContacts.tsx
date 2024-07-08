import { ReactNode } from 'react'

import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import cn from '@/src/utils/cn'

export type SidebarContactsProps = {
  children: ReactNode[]
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1341-10874&m=dev
 */

const SidebarContacts = ({
  //
  children,
  className,
}: SidebarContactsProps) => {
  if (!children?.length) return null

  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary',
        className,
      )}
    >
      {children.map((child, index) => {
        return (
          <div className="px-3 lg:px-5">
            {child}
            {index < children.length - 1 && <SidebarDivider />}
          </div>
        )
      })}
    </div>
  )
}

export default SidebarContacts
