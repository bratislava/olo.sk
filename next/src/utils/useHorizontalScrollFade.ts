import { RefObject, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import { useEventListener } from 'usehooks-ts'

import cn from '@/src/utils/cn'

// copied from Marianum: https://github.com/bratislava/marianum.sk/blob/master/next/utils/useHorizontalScrollFade.ts
export const useHorizontalScrollFade = ({
  ref,
  classNameLeft = 'scroll-fade-left',
  classNameLeftOpaque = 'scroll-fade-left-opaque',
  classNameRight = 'scroll-fade-right',
  classNameRightOpaque = 'scroll-fade-right-opaque',
}: {
  ref: RefObject<HTMLElement>
  classNameLeft?: string
  classNameLeftOpaque?: string
  classNameRight?: string
  classNameRightOpaque?: string
}) => {
  const [isScrolledLeft, setIsScrolledLeft] = useState(true)
  const [isScrolledRight, setIsScrolledRight] = useState(true)

  const handleScrollOrResize = () => {
    if (!ref.current) {
      return
    }
    const scrollableWidth = ref.current.scrollWidth
    const viewportWidth = ref.current.clientWidth

    setIsScrolledLeft(ref.current.scrollLeft === 0)
    setIsScrolledRight(
      ref.current.scrollLeft >= scrollableWidth - viewportWidth - 2 /* Can be off few pixels */,
    )
  }

  // Also triggers the function on the mount, so no need for useEffect.
  useResizeDetector({ targetRef: ref, onResize: () => handleScrollOrResize() })
  useEventListener('scroll', handleScrollOrResize, ref)

  return {
    scrollFadeClassNames: cn(classNameLeft, classNameRight, {
      [classNameRightOpaque]: !isScrolledRight,
      [classNameLeftOpaque]: !isScrolledLeft,
    }),
  }
}
