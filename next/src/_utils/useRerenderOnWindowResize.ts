import { useEffect, useState } from 'react'

/**
 * Used to re-render components when the window size changes.
 * Based on https://stackoverflow.com/a/19014495
 */

export function useRerenderOnWindowResize() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_size, setSize] = useState([0, 0])
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])
}
