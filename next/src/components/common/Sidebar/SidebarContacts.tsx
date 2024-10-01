import { ReactNode } from 'react'

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
  if (children.length === 0) return null

  return (
    <div
      className={cn(
        'flex flex-col divide-y divide-border-default overflow-hidden rounded-lg border border-border-default bg-background-primary',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default SidebarContacts
