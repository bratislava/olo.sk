import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useCallback, useState } from 'react'
import { useOverlayTriggerState } from 'react-stately'

import Button from '@/src/components/common/Button/Button'
import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import ImageLightBox from '@/src/components/modals/gallery/ImageLightBox'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { GalleryHeaderSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  title: string
  perex?: string | null | undefined

  header: GalleryHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1183-12889&m=dev
 */

const PageHeaderGallery = ({ title, perex, header }: Props) => {
  const { t } = useTranslation()

  const { medias } = header

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredImages = medias.data.filter(isDefined) ?? []
  const imageCount = filteredImages.length

  const overlayState = useOverlayTriggerState({ defaultOpen: false })
  const [initialImageIndex, setInitialImageIndex] = useState(0)

  const openAtImageIndex = useCallback(
    (index: number) => {
      setInitialImageIndex(index)
      overlayState.open()
    },
    [overlayState],
  )

  return (
    <>
      <SectionContainer background="secondary">
        <HeaderTitleText title={title} text={perex} />
        {/* Screen: desktop */}
        <div className="max-lg:hidden">
          <div className="relative lg:top-14 lg:-mt-14">
            <ul
              className={cn('grid gap-6', {
                'grid-cols-2': imageCount === 2,
                'grid-cols-3': imageCount > 2,
              })}
            >
              {filteredImages
                .map((image, index) => {
                  if (!image.attributes) return null

                  const { url: imageUrl, alternativeText: imageAlternativeText } = image.attributes

                  return (
                    <li
                      className={cn('relative overflow-hidden lg:rounded-lg', {
                        // keep the aspect-ratio of whole gallery consistent
                        'aspect-[1216/440]': imageCount === 1,
                        'aspect-[596/440] ': imageCount === 2,
                        'aspect-[808/440] ': imageCount > 2 && index === 0,
                        // first image is larger when displaying 3 images
                        'col-[1/3] row-[1/3]': imageCount > 2 && index === 0,
                        'col-[3/4] row-[1/2]': imageCount > 2 && index === 1,
                        'col-[3/4] row-[2/3]': imageCount > 2 && index === 2,
                      })}
                    >
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={imageAlternativeText ?? ''}
                          fill
                          className="z-1 object-cover"
                        />
                      ) : (
                        <ImagePlaceholder />
                      )}
                    </li>
                  )
                })
                // eslint-disable-next-line unicorn/no-array-callback-reference
                .filter(isDefined)
                .slice(0, 3)}
              <div className="absolute bottom-4 right-4 z-1">
                <Button
                  variant="category-plain"
                  className="border border-dashed border-action-background-default bg-white"
                  onPress={() => openAtImageIndex(0)}
                >
                  {t('pageHeaderGallery.buttonText')}
                </Button>
              </div>
            </ul>
          </div>
        </div>
        {/* Screen: mobile */}
        <div className="lg:hidden">
          <div className="relative -mx-4 aspect-[320/174]">
            {filteredImages[0].attributes ? (
              <Image
                src={filteredImages[0].attributes.url}
                alt={filteredImages[0].attributes.alternativeText ?? ''}
                fill
                className="z-1 object-cover"
              />
            ) : (
              <ImagePlaceholder />
            )}
          </div>
          <div className="absolute bottom-3 right-3 z-1">
            <Button
              variant="category-plain"
              className="bg-white"
              onPress={() => openAtImageIndex(0)}
            >
              {t('pageHeaderGallery.buttonText')}
            </Button>
          </div>
        </div>
      </SectionContainer>
      {/* This div serves as an empty space for the image to overlap correctly */}
      <div aria-hidden className="h-14 bg-background-primary max-lg:hidden" />
      <ImageLightBox
        onClose={() => overlayState.close()}
        isOpen={overlayState.isOpen}
        images={filteredImages}
        initialImageIndex={initialImageIndex}
        isDismissable
      />
    </>
  )
}

export default PageHeaderGallery
