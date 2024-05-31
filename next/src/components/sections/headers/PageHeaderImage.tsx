import Image from 'next/image'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import BasicHeader from '@/src/components/sections/headers/BasicHeader'
import { ImageHeaderSectionFragment } from '@/src/services/graphql/api'

type Props = {
  header: ImageHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13398&t=YDBwFkSBAz7ZvIPe-4
 */

const PageHeaderImage = ({ header }: Props) => {
  const { title, text, media } = header

  const {
    url: imageUrl,
    width: imageWidth,
    height: imageHeight,
    alternativeText: imageAlternativeText,
    name: imageName,
  } = media.data?.attributes ?? {}

  const imageAspectRatio = imageWidth && imageHeight ? imageWidth / imageHeight : 16 / 9

  return (
    <>
      <SectionContainer background="secondary">
        <BasicHeader title={title} text={text} />
        <div
          style={{ aspectRatio: imageAspectRatio }}
          className="relative overflow-hidden max-lg:-mx-4 lg:top-18 lg:-mt-18 lg:rounded-2xl"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlternativeText ?? imageName ?? ''}
              fill
              className="z-50 object-cover"
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>
      </SectionContainer>
      <div className="h-18 bg-background-primary max-lg:hidden" />
    </>
  )
}

export default PageHeaderImage
