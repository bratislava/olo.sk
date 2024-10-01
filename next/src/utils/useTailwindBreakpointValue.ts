import { useWindowSize } from 'usehooks-ts'

import screens from '@/tailwind.config.screens'

// TODO: Refactor this so that it is more generic
export const useTailwindBreakpointValue = () => {
  const { width } = useWindowSize()
  const isMobileBreakpoint = width < parseInt(screens.md.slice(0, -2), 10)
  // Number(breakpoint.replace('px', '')) // Remove "px" from the end of the string

  return {
    isMobileBreakpoint,
  }
}
