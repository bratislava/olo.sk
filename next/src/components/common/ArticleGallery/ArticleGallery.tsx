import { useTranslation } from 'next-i18next'
import { useCallback, useState } from 'react'
import { useOverlayTriggerState } from 'react-stately'
import screens from 'tailwind.config.screens'
import { useWindowSize } from 'usehooks-ts'

import StrapiImage from '@/src/components/common/Image/StrapiImage'
import Typography from '@/src/components/common/Typography/Typography'
import ImageLightBox from '@/src/components/modals/gallery/ImageLightBox'
import { UploadImageEntityFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'
import { onEnterOrSpaceKeyDown } from '@/src/utils/onEnterOrSpaceKeyDown'

// based on bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/common/ArticleGallery/ArticleGallery.tsx

export type ArticleGalleryProps = {
  images: UploadImageEntityFragment[]
}

const ArticleGallery = ({ images = [] }: ArticleGalleryProps) => {
  const { t } = useTranslation()

  const { width: windowWidth } = useWindowSize()
  // TODO refactor to use som custom hook
  const isMobile = windowWidth < parseInt(screens.md.slice(0, -2), 10)

  const thumbnailCount = isMobile ? 5 : 7

  // number of not displayed images
  const moreImagesCount = Math.max(images.length - thumbnailCount + 1, 0)

  // if less than number of thumbnail tiles, show all, else show "more" button as last tile
  const displayedImages = images.slice(
    0,
    moreImagesCount > 1 ? thumbnailCount - 1 : thumbnailCount + 1,
  )

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
      <div className="relative flex w-full flex-col">
        <div
          role="button"
          tabIndex={0}
          aria-label={t('articleGallery.aria.openArticleGallery')}
          onKeyUp={onEnterOrSpaceKeyDown(() => openAtImageIndex(0))}
          className={cn('outline-primary cursor-default outline-offset-2 focus:outline-4')}
        >
          {displayedImages.length > 0 && (
            <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
              {displayedImages
                .map((image, index) => {
                  if (!image.attributes) return null

                  return (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                    <div
                      onClick={() => openAtImageIndex(index)}
                      key={image.id}
                      className={cn(
                        'relative w-full cursor-pointer overflow-hidden rounded-lg md:rounded-xl',
                        {
                          'h-[100%] pt-[100%]': index > 0,
                          'col-span-full aspect-[800/480]': index === 0,
                        },
                      )}
                    >
                      <StrapiImage
                        image={image.attributes}
                        fill
                        className="absolute top-0 object-cover"
                      />
                    </div>
                  )
                })
                // eslint-disable-next-line unicorn/no-array-callback-reference
                .filter(isDefined)}

              {/* more images button */}
              {moreImagesCount > 1 && (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                  onClick={() => openAtImageIndex(0)}
                  className="relative w-full cursor-pointer overflow-hidden rounded-lg pt-[100%] md:rounded-xl"
                >
                  <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-0.5 bg-background-secondary p-2 text-center">
                    <Typography variant="p-default-bold">+{moreImagesCount}</Typography>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <ImageLightBox
        onClose={() => overlayState.close()}
        isOpen={overlayState.isOpen}
        images={images}
        initialImageIndex={initialImageIndex}
        isDismissable
      />
    </>
  )
}

export default ArticleGallery
