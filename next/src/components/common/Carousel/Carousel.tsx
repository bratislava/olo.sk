import { useTranslation } from 'next-i18next'
import React, { ReactNode, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import cn from '@/src/utils/cn'

export type AllowedVisibleCount = 1 | 2 | 3 | 4

export type CarouselProps = {
  className?: string
  listClassName?: string
  itemClassName?: string
  items: ReactNode[]
  shiftVariant?: 'single' | 'byPage'
  controlsVariant?: 'bottom' | 'side'
  visibleCount?: AllowedVisibleCount
  hideControls?: boolean
  noYListSpacing?: boolean
  showControlsOnMobile?: boolean
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1183-12812&m=dev
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/Carousel/Carousel.tsx
 * which was inspired by MKB project and https://inclusive-components.design/a-content-slider/
 */

const Carousel = ({
  className,
  listClassName,
  itemClassName,
  items,
  shiftVariant = 'single',
  controlsVariant = 'bottom',
  visibleCount = 1,
  hideControls = false,
  noYListSpacing = true,
  showControlsOnMobile = false,
}: CarouselProps) => {
  const { t } = useTranslation()
  const scrollerRef = useRef<HTMLUListElement>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const totalCount = items.length
  const shiftCount = shiftVariant === 'single' ? 1 : visibleCount

  const scrollToItem = (index: number, instant = false) => {
    setCurrentIndex(index)
    if (!scrollerRef.current) return
    const offset = (scrollerRef.current.scrollWidth / totalCount) * index

    scrollerRef.current?.scroll({
      left: offset,
      behavior: instant ? 'auto' : 'smooth',
    })
  }

  const handleGoToNext = () => {
    scrollToItem(Math.min(currentIndex + shiftCount, totalCount - shiftCount))
  }

  const handleGoToPrevious = () => {
    scrollToItem(Math.max(currentIndex - shiftCount, 0))
  }

  const noControls = hideControls || totalCount <= visibleCount
  const isLeftControlHidden = noControls || currentIndex === 0
  const isRightControlHidden = noControls || currentIndex >= totalCount - visibleCount

  return (
    <div className={cn('relative ', className)}>
      <ul
        className={cn(
          // if gap is changed, also change card width calculation
          'max-md:negative-x-spacing flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-clip scrollbar-hide lg:gap-8 ',
          // show the whole focus ring
          '-my-2 py-2 lg:-mx-2 lg:px-2',
          { 'py-8 lg:py-8': !noYListSpacing },
          listClassName,
        )}
        ref={scrollerRef}
      >
        {items?.map((item) => {
          if (React.isValidElement(item)) {
            return (
              <li
                key={item.key}
                className={twMerge(
                  'shrink-0 transform transition-all duration-200 lg:scroll-mx-2 ',
                  cn({
                    // 1rem represents 1 gap-4, if gap is changed, also change card width
                    'w-[calc(100%-1rem)] snap-center ': visibleCount === 1,
                    'snap-start': visibleCount > 1,
                    'w-[calc((100%-2rem)/2)]': visibleCount === 2,
                    'w-[calc((100%-4rem)/3)]': visibleCount === 3,
                    'w-[calc((100%-6rem)/4)]': visibleCount === 4,
                  }),
                  itemClassName,
                )}
              >
                {item}
              </li>
            )
          }

          return null
        })}
      </ul>

      {noControls ? null : (
        <div className={cn({ 'max-md:hidden': !showControlsOnMobile })}>
          {controlsVariant === 'side' && (
            <>
              <Button
                variant="icon-wrapped"
                excludeFromTabOrder
                onPress={handleGoToPrevious}
                className={cn(
                  // figma says size-18, but then the button extends beyond page margin - therefore size-16
                  'absolute bottom-0 top-0 my-auto size-16 transform rounded-full bg-white',
                  'left-0 -translate-x-1/2 ',
                  { hidden: isLeftControlHidden },
                )}
                icon={<Icon name="sipka-dolava" />}
                aria-label={t('carousel.aria.previous')}
              />
              <Button
                variant="icon-wrapped"
                excludeFromTabOrder
                onPress={handleGoToNext}
                className={cn(
                  'absolute bottom-0 top-0 my-auto size-16 transform rounded-full bg-white',
                  'right-0 translate-x-1/2 ',
                  { hidden: isRightControlHidden },
                )}
                icon={<Icon name="sipka-doprava" />}
                aria-label={t('carousel.aria.next')}
              />
            </>
          )}

          {controlsVariant === 'bottom' && (
            // Inspired by https://inclusive-components.design/a-content-slider/#thebuttongroup
            <ul aria-label={t('aria.controlButtons')} className="mt-6 flex gap-2">
              <li>
                <Button
                  variant="category-outline"
                  onPress={handleGoToPrevious}
                  icon={<Icon name="sipka-dolava" />}
                  aria-label={t('aria.previous')}
                  isDisabled={isLeftControlHidden}
                />
              </li>
              <li>
                <Button
                  variant="category-outline"
                  onPress={handleGoToNext}
                  icon={<Icon name="sipka-doprava" />}
                  aria-label={t('aria.next')}
                  isDisabled={isRightControlHidden}
                />
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default Carousel
