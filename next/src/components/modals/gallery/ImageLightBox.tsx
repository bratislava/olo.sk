import { useTranslation } from 'next-i18next'
import { useEffect, useRef } from 'react'

import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import StrapiImage from '@/src/components/common/Image/StrapiImage'
import Typography from '@/src/components/common/Typography/Typography'
import GalleryModal, { GalleryModalProps } from '@/src/components/modals/gallery/GalleryModal'
import GallerySlider from '@/src/components/modals/gallery/GallerySlider'
import { UploadImageEntityFragment } from '@/src/services/graphql/api'
import { isDefined } from '@/src/utils/isDefined'

export type ImageLightBoxProps = {
  images: UploadImageEntityFragment[]
  initialImageIndex: number
} & Omit<GalleryModalProps, 'children'>

// based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/Gallery/ImageLightBox.tsx

const ImageLightBox = (props: ImageLightBoxProps) => {
  const { images, initialImageIndex, ...rest } = props

  const { isOpen } = rest

  const { t } = useTranslation()

  const sliderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      sliderRef.current?.focus()
    }
  }, [isOpen])

  return (
    // TODO is this pointer-events-none/auto necessary
    <GalleryModal overlayClassName="w-full h-screen pointer-events-none" showCloseButton {...rest}>
      <GallerySlider
        ref={sliderRef}
        description={t('imageLightBox.aria.imageLightBoxDescription')}
        allowKeyboardNavigation={images.length > 1}
        initialPage={initialImageIndex}
        pages={images
          .map(({ id, attributes }) => {
            if (!attributes) return null

            return (
              <div
                key={id}
                className="container pointer-events-none m-auto flex size-full max-w-6xl flex-col items-center justify-center md:px-[88px]"
              >
                <StrapiImage
                  draggable="false"
                  image={attributes}
                  className="pointer-events-auto h-auto max-h-[86vh] w-full select-none object-contain"
                  sizes="100vw"
                />
                {attributes?.caption !== attributes?.name && attributes?.caption && (
                  <div className="mt-4 bg-white px-2.5 py-0.5">
                    <Typography>{attributes?.caption}</Typography>
                  </div>
                )}
              </div>
            )
          })
          // eslint-disable-next-line unicorn/no-array-callback-reference
          .filter(isDefined)}
        pagination={({ goToPrevious, goToNext }) => (
          <div className="container pointer-events-none absolute bottom-0 z-20 flex w-full max-w-6xl justify-between p-6 md:bottom-auto">
            {images.length > 1 && (
              <>
                <Button
                  variant="category-solid"
                  className="pointer-events-auto rounded-full"
                  aria-label={t('imageLightBox.aria.previousImage')}
                  onPress={goToPrevious}
                  icon={<Icon name="sipka-dolava" />}
                />

                <Button
                  variant="category-solid"
                  className="pointer-events-auto rounded-full"
                  aria-label={t('imageLightBox.aria.nextImage')}
                  onPress={goToNext}
                  icon={<Icon name="sipka-doprava" />}
                />
              </>
            )}
          </div>
        )}
      />
    </GalleryModal>
  )
}

export default ImageLightBox
