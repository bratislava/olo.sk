import React, { createContext, PropsWithChildren, useContext, useState } from 'react'

type NavMenuContextType = {
  menuValue: string
  setMenuValue: (value: string) => void
  isMobileMenuOpen: boolean
  setMobileMenuOpen: (value: boolean) => void
}

const NavMenuContext = createContext<NavMenuContextType>({
  menuValue: '',
  setMenuValue: () => {},
  isMobileMenuOpen: false,
  setMobileMenuOpen: () => {},
})

/**
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/NavBar/NavMenu/navMenuContext.tsx
 */

export const NavMenuContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [menuValue, setMenuValue] = useState('')
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <NavMenuContext.Provider
      value={{
        menuValue,
        setMenuValue,
        isMobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {children}
    </NavMenuContext.Provider>
  )
}

export const useNavMenuContext = () => {
  const context = useContext(NavMenuContext)
  if (!context) {
    throw new Error('NavMenuContext is not initialized.')
  }

  return context
}
