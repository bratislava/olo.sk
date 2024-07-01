import React from 'react'

type PlaceholderWrapperProps = {
  children: React.ReactNode
}

const PlaceholderWrapper = ({ children }: PlaceholderWrapperProps) => {
  return <div className="border-1 border-dashed border-action-background-default">{children}</div>
}

export default PlaceholderWrapper
