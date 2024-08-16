import Image from 'next/image'
import React from 'react'

import Button from '@/src/components/common/Button/Button'
import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import {
  Enum_Componentsectionsimageandtext_Imageposition as Enum_Imageposition,
  ImageAndTextSectionFragment,
} from '@/src/services/graphql/api'
import { generateImageSizes } from '@/src/utils/generateImageSizes'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type Props = {
  section: ImageAndTextSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-14285&m=dev
 */

const ImageAndTextSection = ({ section }: Props) => {
  const {
    title,
    text,
    backgroundColorImageAndText: backgroundColor,
    imagePositionImageAndText: imagePosition,
    image,
    primaryButton,
    secondaryButton,
  } = section

  const { getLinkProps } = useGetLinkProps()

  const ImageContent = (
    <div className="relative aspect-square size-full shrink-0 overflow-hidden rounded-3xl lg:size-[540px]">
      {image.data?.attributes?.url ? (
        <Image
          src={image.data.attributes.url}
          alt={image.data.attributes.alternativeText ?? ''}
          fill
          sizes={generateImageSizes({ md: '50vw', default: '100vw' })}
          className="object-cover"
        />
      ) : (
        <ImagePlaceholder />
      )}
      <div />
    </div>
  )

  const TextContent = (
    <div className="flex grow flex-col gap-6">
      <SectionHeader title={title} text={text} />
      <div className="flex gap-4 empty:hidden">
        {primaryButton ? (
          <Button
            variant="category-solid"
            asLink
            hasLinkIcon={false}
            {...getLinkProps(primaryButton)}
          />
        ) : null}
        {secondaryButton ? (
          <Button
            variant="category-outline"
            asLink
            hasLinkIcon={false}
            {...getLinkProps(secondaryButton)}
          />
        ) : null}
      </div>
    </div>
  )

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background={backgroundColor} className="py-6 lg:py-12">
      {/* 8.5rem = 136px */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-[8.5rem]">
        {imagePosition === Enum_Imageposition.Left ? (
          <>
            {ImageContent}
            {TextContent}
          </>
        ) : null}
        {imagePosition === Enum_Imageposition.Right ? (
          <>
            {TextContent}
            {ImageContent}
          </>
        ) : null}
      </div>
    </SectionContainer>
  )
}

export default ImageAndTextSection
