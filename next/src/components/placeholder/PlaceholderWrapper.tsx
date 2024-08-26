import React from 'react'

import cn from '@/src/utils/cn'

type PlaceholderWrapperProps = {
  children: React.ReactNode
  className?: string
}

const PlaceholderWrapper = ({ children, className }: PlaceholderWrapperProps) => {
  return (
    <div className={cn('border-2 border-dashed border-white opacity-25', className)}>
      {children}
    </div>
  )
}

export default PlaceholderWrapper
