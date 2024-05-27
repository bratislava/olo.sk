import Image from 'next/image'
import React from 'react'

import Button from '@/_components/common/Button/Button'
import ImagePlaceholder from '@/_components/common/ImagePlaceholder'
import Typography from '@/_components/common/Typography/Typography'
import SectionContainer from '@/_components/layout/Section/SectionContainer'
import { generateImageSizes } from '@/_utils/generateImageSizes'
import { getLinkProps } from '@/_utils/getLinkProps'
import cn from '@/app/_utils/cn'
import {
  Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor as Enum_Backgroundcolor,
  Enum_Componentsectionsimageandtextoverlapped_Imageposition as Enum_Imageposition,
  ImageAndTextOverlappedSectionFragment,
} from '@/services/graphql/api'

type Props = {
  section: ImageAndTextOverlappedSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-14543&m=dev
 */

const ImageAndTextOverlappedSection = ({ section }: Props) => {
  const {
    title,
    text,
    imagePositionImageAndTextOverlapped: imagePosition,
    backgroundColorImageAndTextOverlapped: backgroundColor,
    image,
    link,
  } = section

  const isImageShifted =
    imagePosition === Enum_Imageposition.LeftShifted ||
    imagePosition === Enum_Imageposition.RightShifted

  const isImageLeft =
    imagePosition === Enum_Imageposition.Left || imagePosition === Enum_Imageposition.LeftShifted
  const isImageRight =
    imagePosition === Enum_Imageposition.Right || imagePosition === Enum_Imageposition.RightShifted

  const TextContent = (
    <div className="flex flex-col gap-4">
      <Typography variant="h2">{title}</Typography>
      <Typography>{text}</Typography>
      {link ? <Button variant="black-link" {...getLinkProps(link)} asLink /> : null}
    </div>
  )

  const DesktopTextContainer = (
    <div
      className={cn(
        'z-50 flex grow flex-col gap-6 self-start rounded-lg p-6 lg:rounded-2xl lg:p-18',
        {
          'bg-background-primary': backgroundColor !== Enum_Backgroundcolor.Primary,
          'bg-background-tertiary': backgroundColor === Enum_Backgroundcolor.Primary,
          'lg:-ml-18': isImageLeft,
          'lg:-mr-18': isImageRight,
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
      className={cn('z-50 flex grow flex-col gap-6 self-start rounded-lg p-6', {
        'bg-background-primary': backgroundColor !== Enum_Backgroundcolor.Primary,
        'bg-background-tertiary': backgroundColor === Enum_Backgroundcolor.Primary,
        '-mt-6': isImageLeft,
        '-mb-6': isImageRight,
      })}
    >
      {TextContent}
    </div>
  )

  const ImageContent = image.data?.attributes?.url ? (
    <Image
      src={image.data.attributes.url}
      alt={image.data.attributes.alternativeText ?? ''}
      fill
      sizes={generateImageSizes({ md: '50vw', default: '100vw' })}
      className="object-cover"
    />
  ) : (
    <ImagePlaceholder />
  )

  const DesktopImageContainer = (
    <div
      className={cn('relative shrink-0 overflow-hidden rounded-3xl', { 'mb-18': isImageShifted })}
    >
      {ImageContent}
    </div>
  )

  const MobileImageContainer = (
    <div
      className={cn('relative z-0 -mx-4 aspect-[320/246]', {
        '-mt-6': isImageLeft,
        '-mb-6': isImageRight,
      })}
    >
      {ImageContent}
    </div>
  )

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background={backgroundColor} className="py-6 lg:py-12">
      <div className="hidden lg:flex lg:flex-row lg:items-stretch lg:[&>*]:w-[50%]">
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
      <div className="flex flex-col lg:hidden ">
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
    </SectionContainer>
  )
}

export default ImageAndTextOverlappedSection
