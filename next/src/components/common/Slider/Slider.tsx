import { AnimatePresence, motion, Variant } from 'framer-motion'
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

  const [[slideIndex, transitionDirection], setSlideIndex] = useState([0, 0])

  const { title, text, link, media } = slides[slideIndex]
  const { url, alternativeText } = media?.data?.attributes ?? {}

  const handleGoToNext = () => {
    const upcomingSlide = slideIndex === slides.length - 1 ? 0 : slideIndex + 1
    setSlideIndex([upcomingSlide, 0])
  }

  const handleGoToPrevious = () => {
    const upcomingSlide = slideIndex === 0 ? slides.length - 1 : slideIndex - 1
    setSlideIndex([upcomingSlide, 1])
  }

  // Inspired by marianum.sk: https://github.com/bratislava/marianum.sk/blob/master/next/components/molecules/Slider.tsx
  const transitionVariants: Record<string, Variant> = {
    initial: (direction: number) => {
      return {
        x: direction === 0 ? 100 : -100,
        opacity: 0,
      }
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction === 0 ? -100 : 100,
        opacity: 0,
      }
    },
  }

  return (
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl lg:col-span-2 lg:row-span-2 lg:h-[26.125rem]"
      style={{ background: backgroundColor }}
    >
      <AnimatePresence initial={false} custom={transitionDirection} mode="wait">
        <motion.div
          key={title}
          custom={transitionDirection}
          variants={transitionVariants}
          initial="initial"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="flex flex-col lg:h-full"
        >
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
                  <Button
                    variant="black-solid"
                    asLink
                    hasLinkIcon={false}
                    {...getLinkProps(link)}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

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
            onPress={handleGoToPrevious}
            className="rounded-full bg-background-primary p-2"
          />
        </li>
        <li>
          <Button
            variant="unstyled"
            icon={<Icon name="sipka-doprava" />}
            aria-label={t('carousel.aria.next')}
            onPress={handleGoToNext}
            className="rounded-full bg-background-primary p-2"
          />
        </li>
      </ul>
    </div>
  )
}

export default Slider
