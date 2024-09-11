export const getTailwindBreakpointValue = (breakpoint: string): number => {
  return Number(breakpoint.replace('px', '')) // Remove "px" from the end of the string
}
