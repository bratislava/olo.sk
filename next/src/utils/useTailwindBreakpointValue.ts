import { useWindowSize } from 'usehooks-ts'

import screens from '@/tailwind.config.screens'

// TODO: Refactor this hook to be more generic
export const useTailwindBreakpointValue = () => {
  const { width } = useWindowSize()

  return {
    isMobileBreakpoint: width < parseInt(screens.md.slice(0, -2), 10),
    isDesktopBreakpoint: width >= parseInt(screens.lg.slice(0, -2), 10),
  }
}
