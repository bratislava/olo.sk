import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import { SlideItemFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

import Button from '../Button/Button'

type SliderProps = {
  slides: SlideItemFragment[]
  backgroundColor?: string
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1058%3A10056
 */

const Slider = ({ slides, backgroundColor = '#FEFEFE', className }: SliderProps) => {
  const { t } = useTranslation()
  const { getLinkProps } = useGetLinkProps()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const { title, text, link, media } = slides[currentSlideIndex]
  const { url, alternativeText } = media?.data?.attributes ?? {}

  // TODO: Handle overshooting the indices
  const handleGoToNext = () => {
    setCurrentSlideIndex((prevState) => prevState + 1)
  }

  const handleGoToPrevious = () => {
    setCurrentSlideIndex((prevState) => prevState - 1)
  }

  // TODO: Handle animations between slides

  return (
    <div
      className={cn(
        'relative h-full overflow-hidden rounded-xl lg:col-span-2 lg:row-span-2 lg:overflow-visible',
        className,
      )}
      style={{ background: backgroundColor }}
    >
      <div key={title} className="flex h-full flex-col">
        {url ? (
          <div className="relative flex aspect-heroSliderMedia lg:absolute lg:bottom-0 lg:right-0 lg:top-[96px] lg:h-[20.125rem]">
            <Image
              src={url}
              alt={alternativeText ?? ''}
              fill
              className="pointer-events-none object-cover lg:object-contain"
            />
          </div>
        ) : null}
        <div className="h-full px-4 py-6 lg:px-6 lg:py-8">
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col gap-2 lg:gap-3">
                <Typography variant="h3">{title}</Typography>
                {text ? <Typography variant="p-default">{text}</Typography> : null}
              </div>
              {link ? (
                <Button variant="black-solid" asLink hasLinkIcon={false} {...getLinkProps(link)} />
              ) : null}
            </div>

            <ul
              // Inspired by: https://inclusive-components.design/a-content-slider/#thebuttongroup
              aria-label={t('carousel.aria.controlButtons')}
              // Currently, controls are hidden for tablet and mobile devices
              className="hidden gap-3 lg:flex"
            >
              <li>
                <Button
                  variant="unstyled"
                  icon={<Icon name="sipka-dolava" />}
                  aria-label={t('carousel.aria.previous')}
                  excludeFromTabOrder
                  onPress={handleGoToPrevious}
                  isDisabled={currentSlideIndex === 0}
                  className="rounded-full bg-background-primary p-2"
                />
              </li>
              <li>
                <Button
                  variant="unstyled"
                  icon={<Icon name="sipka-doprava" />}
                  aria-label={t('carousel.aria.next')}
                  excludeFromTabOrder
                  onPress={handleGoToNext}
                  isDisabled={currentSlideIndex === slides.length - 1}
                  className="rounded-full bg-background-primary p-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
