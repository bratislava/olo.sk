import React, { PropsWithChildren } from 'react'

import Footer from '@/src/components/common/Footer/Footer'
import NavBar from '@/src/components/common/NavBar/NavBar'

type PageLayoutProps = {
  className?: string
}

const PageLayout = ({ className, children }: PropsWithChildren<PageLayoutProps>) => {
  return (
    // Z-indices are set to create stacking contexts for easier z-index management.
    <div className={className}>
      {/* <CookieConsent className="z-30" /> */}
      <div>
        <NavBar />
      </div>

      <main className="relative z-0">{children}</main>

      <Footer />
    </div>
  )
}

export default PageLayout
