import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import { SlideItemFragment } from '@/src/services/graphql/api'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

import Button from '../Button/Button'

type SliderProps = {
  slides: SlideItemFragment[]
  backgroundColor?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1058%3A10056
 */

const Slider = ({ slides, backgroundColor = '#FEFEFE' }: SliderProps) => {
  const { t } = useTranslation()
  const { getLinkProps } = useGetLinkProps()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const { title, text, link, media } = slides[currentSlideIndex]
  const { url, alternativeText } = media?.data?.attributes ?? {}

  const handleGoToNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  const handleGoToPrevious = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  // TODO: Handle animations between slides
  // TODO: Refactor CSS classes and composition

  return (
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl lg:col-span-2 lg:row-span-2 lg:h-[26.125rem]"
      style={{ background: backgroundColor }}
    >
      {/* Animated region */}
      <div key={title} className="flex flex-col">
        {url ? (
          // 20.125rem = 322px, 6rem = 96px
          <div className="relative flex aspect-heroSliderMedia lg:absolute lg:bottom-0 lg:right-0 lg:top-24 lg:h-[20.125rem]">
            <Image src={url} alt={alternativeText ?? ''} fill className="object-cover" />
          </div>
        ) : null}
        <div className="h-full px-4 py-6 lg:px-6 lg:py-8 lg:pb-0">
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
          </div>
        </div>
      </div>
      {/* Animated region */}

      {/* Controls and background should not animate */}
      <ul
        // Inspired by: https://inclusive-components.design/a-content-slider/#thebuttongroup
        aria-label={t('carousel.aria.controlButtons')}
        role="region"
        // Currently, controls are hidden for tablet and mobile devices
        className="hidden gap-3 px-4 pb-6 lg:flex lg:px-6 lg:pb-8"
      >
        <li>
          <Button
            variant="unstyled"
            icon={<Icon name="sipka-dolava" />}
            aria-label={t('carousel.aria.previous')}
            // excludeFromTabOrder
            onPress={handleGoToPrevious}
            className="rounded-full bg-background-primary p-2 hover:opacity-70"
          />
        </li>
        <li>
          <Button
            variant="unstyled"
            icon={<Icon name="sipka-doprava" />}
            aria-label={t('carousel.aria.next')}
            // excludeFromTabOrder
            onPress={handleGoToNext}
            className="rounded-full bg-background-primary p-2 hover:opacity-70"
          />
        </li>
      </ul>
    </div>
  )
}

export default Slider
