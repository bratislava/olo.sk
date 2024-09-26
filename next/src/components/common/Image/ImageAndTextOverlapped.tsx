import Image from 'next/image'
import React from 'react'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import {
  Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor as Enum_Backgroundcolor,
  Enum_Componentsectionsimageandtextoverlapped_Imageposition as Enum_Imageposition,
  LinkFragment,
  UploadImageEntityFragment,
} from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { generateImageSizes } from '@/src/utils/generateImageSizes'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

import Button from '../Button/Button'

export type ImageAndTextOverlappedProps = {
  title?: string | null | undefined
  text?: string | null | undefined
  imagePosition: Enum_Imageposition
  backgroundColor: Enum_Backgroundcolor
  image?: UploadImageEntityFragment | null | undefined
  readMoreLink?: LinkFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-14543&m=dev
 */

const ImageAndTextOverlapped = ({
  title,
  text,
  imagePosition,
  backgroundColor,
  image,
  readMoreLink,
}: ImageAndTextOverlappedProps) => {
  const { getLinkProps } = useGetLinkProps()

  const isImageShifted =
    imagePosition === Enum_Imageposition.LeftShifted ||
    imagePosition === Enum_Imageposition.RightShifted

  const isImageLeft =
    imagePosition === Enum_Imageposition.Left || imagePosition === Enum_Imageposition.LeftShifted
  const isImageRight =
    imagePosition === Enum_Imageposition.Right || imagePosition === Enum_Imageposition.RightShifted

  const TextContent = (
    <div className="flex flex-col gap-6">
      <SectionHeader title={title} text={text} />
      {readMoreLink ? (
        <Button variant="black-link" asLink hasLinkIcon {...getLinkProps(readMoreLink)} />
      ) : null}
    </div>
  )

  const DesktopTextContainer = (
    <div
      className={cn(
        'z-1 flex grow flex-col gap-6 self-start rounded-lg p-6 lg:rounded-2xl lg:p-18',
        {
          'bg-background-primary': backgroundColor !== Enum_Backgroundcolor.Primary,
          'bg-background-tertiary': backgroundColor === Enum_Backgroundcolor.Primary,
          'lg:-ml-9': isImageLeft,
          'lg:-mr-9': isImageRight,
          'my-18': !isImageShifted,
          'mt-18': isImageShifted,
        },
      )}
    >
      {TextContent}
    </div>
  )

  const MobileTextContainer = (
    <div
      className={cn('z-1 flex w-full grow flex-col gap-6 self-start rounded-lg p-6', {
        'bg-background-primary': backgroundColor !== Enum_Backgroundcolor.Primary,
        'bg-background-tertiary': backgroundColor === Enum_Backgroundcolor.Primary,
        '-mt-6': isImageLeft,
        '-mb-6': isImageRight,
      })}
    >
      {TextContent}
    </div>
  )

  const ImageContent = image?.attributes?.url ? (
    <Image
      src={image.attributes.url}
      // @ts-ignore
      alt={image.attributes?.alternativeText ?? ''}
      fill
      sizes={generateImageSizes({ md: '50vw', default: '100vw' })}
      className="object-cover"
    />
  ) : (
    <ImagePlaceholder />
  )

  const DesktopImageContainer = (
    <div
      className={cn('relative shrink-0 overflow-hidden rounded-3xl', {
        'lg:-mr-9': isImageLeft,
        'lg:-ml-9': isImageRight,
        'mb-18': isImageShifted,
      })}
    >
      {ImageContent}
    </div>
  )

  const MobileImageContainer = (
    <div
      className={cn('relative -mx-4 aspect-[320/246]', {
        '-mt-6': isImageLeft,
        '-mb-6': isImageRight,
      })}
    >
      {ImageContent}
    </div>
  )

  return (
    <div>
      <div className="hidden lg:grid lg:grid-cols-2">
        {isImageLeft ? (
          <>
            {DesktopImageContainer}
            {DesktopTextContainer}
          </>
        ) : (
          <>
            {DesktopTextContainer}
            {DesktopImageContainer}
          </>
        )}
      </div>
      <div className="flex flex-col justify-center lg:hidden">
        {isImageLeft ? (
          <>
            {MobileImageContainer}
            {MobileTextContainer}
          </>
        ) : (
          <>
            {MobileTextContainer}
            {MobileImageContainer}
          </>
        )}
      </div>
    </div>
  )
}

export default ImageAndTextOverlapped
