import React, { PropsWithChildren } from 'react'

import FooterPlaceholder from '@/src/components/placeholder/FooterPlaceholder'
import NavBarPlaceholder from '@/src/components/placeholder/NavBarPlaceholder'

type PageLayoutProps = {
  className?: string
}

const PageLayoutPlaceholder = ({ className, children }: PropsWithChildren<PageLayoutProps>) => {
  return (
    // Z-indices are set to create stacking contexts for easier z-index management.
    <div className={className}>
      {/* <CookieConsent className="z-30" /> */}

      <header className="relative z-30">
        <NavBarPlaceholder />
      </header>

      <main className="relative z-0">{children}</main>

      <FooterPlaceholder />
    </div>
  )
}

export default PageLayoutPlaceholder
