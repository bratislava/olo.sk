import { AnimatePresence, motion } from 'framer-motion'
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
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1058%3A10056
 */

const Slider = ({ slides, backgroundColor = '#FEFEFE' }: SliderProps) => {
  const { t } = useTranslation()
  const { getLinkProps } = useGetLinkProps()

  const slideRight = {
    initial: -90,
    exit: 90,
  }

  const slideLeft = {
    initial: 90,
    exit: -90,
  }

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [slidingDirection, setSlidingDirection] = useState(slideRight)

  const { title, text, link, media } = slides[currentSlideIndex]
  const { url, alternativeText } = media?.data?.attributes ?? {}

  // TODO: Refactor, using marianum.sk as an example
  const handleGoToNextSlide = () => {
    setSlidingDirection(
      (prevDirection) =>
        prevDirection.initial === slideRight.initial ? prevDirection : slideRight,
      // TODO: Immediate switch to the other direction breaks the code
      // First set direction, then move onto the next slide
    )
    setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  const handleGoToPreviousSlide = () => {
    setSlidingDirection((prevTransition) =>
      prevTransition.initial === slideLeft.initial ? prevTransition : slideLeft,
    )
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  const controlsClassNames = cn(
    'rounded-full bg-background-primary p-2',
    `hover:text-[${backgroundColor}]`,
  )

  return (
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl lg:col-span-2 lg:row-span-2 lg:h-[26.125rem]"
      style={{ background: backgroundColor }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={title}
          initial={{ x: slidingDirection.initial, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: slidingDirection.exit, opacity: 0 }}
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
            onPress={handleGoToPreviousSlide}
            className={controlsClassNames}
          />
        </li>
        <li>
          <Button
            variant="unstyled"
            icon={<Icon name="sipka-doprava" />}
            aria-label={t('carousel.aria.next')}
            onPress={handleGoToNextSlide}
            className={controlsClassNames}
          />
        </li>
      </ul>
    </div>
  )
}

export default Slider
