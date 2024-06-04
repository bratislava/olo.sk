import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import Button from '@/src/components/common/Button/Button'
import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { GalleryHeaderSectionFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  header: GalleryHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1183-12889&m=dev
 */

const PageHeaderGallery = ({ header }: Props) => {
  const { t } = useTranslation()

  const { title, text, medias } = header

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredImages = medias.data.filter(isDefined) ?? []
  const imageCount = filteredImages.length

  return (
    <>
      <SectionContainer background="secondary">
        <HeaderTitleText title={title} text={text} />
        {/* Screen: desktop */}
        <div className="max-lg:hidden">
          <div className="relative lg:top-14 lg:-mt-14">
            <ul
              className={cn('grid', {
                'gap-6': imageCount > 1,
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
                        'aspect-[1218/441]': imageCount === 1,
                        'aspect-[384/208]': imageCount === 2,
                        'col-span-2 row-span-2 aspect-[808/440]': imageCount > 2 && index === 0,
                        'col-[3] row-[1]': index === 1 && imageCount > 2,
                        'col-[3] row-[2]': index === 2,
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
                .filter(isDefined)}
              <div className="absolute bottom-4 right-4 z-1">
                {/* TODO add button functionality */}
                <Button variant="category-plain" className="bg-white">
                  {t('pageHeaderGallery.buttonText')}
                </Button>
              </div>
            </ul>
          </div>
        </div>
        {/* Screen: mobile */}
        <div className="lg:hidden">
          <div className="relative -mx-4 aspect-[320/174] overflow-hidden lg:rounded-lg">
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
            {/* TODO add button functionality */}
            <Button variant="category-plain" className="bg-white">
              {t('pageHeaderGallery.buttonText')}
            </Button>
          </div>
        </div>
      </SectionContainer>
      {/* This div serves as an empty space for the image to overlap correctly */}
      <div className="h-14 max-lg:hidden" />
    </>
  )
}

export default PageHeaderGallery
