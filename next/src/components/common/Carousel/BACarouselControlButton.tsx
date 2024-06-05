import { useTranslation } from 'next-i18next'
import React from 'react'

import Button, { ButtonProps } from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import cn from '@/src/utils/cn'

/**
 * Based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/Carousel/CarouselControlButton.tsx
 */

type CarouselControlProps = {
  direction: 'left' | 'right'
} & Pick<ButtonProps, 'onPress'>

const CarouselControlButton = ({ direction, onPress }: CarouselControlProps) => {
  const { t } = useTranslation()

  return (
    <Button
      variant="category-solid"
      excludeFromTabOrder
      onPress={onPress}
      className={cn('absolute bottom-0 top-0 z-10 my-auto h-12 w-12 rounded-full', {
        'left-0 -translate-x-1/2 transform': direction === 'left',
        'right-0 translate-x-1/2 transform': direction === 'right',
      })}
      icon={direction === 'left' ? <Icon name="sipka-dolava" /> : <Icon name="sipka-doprava" />}
      aria-label={direction === 'left' ? t('carousel.aria.previous') : t('carousel.aria.next')}
    />
  )
}

export default CarouselControlButton
