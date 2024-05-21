import Image from 'next/image'
import React from 'react'

import Button from '@/_components/common/Button/Button'
import ImagePlaceholder from '@/_components/common/ImagePlaceholder'
import Typography from '@/_components/common/Typography/Typography'
import SectionContainer, {
  SectionContainerProps,
} from '@/_components/layout/Section/SectionContainer'
import { generateImageSizes } from '@/_utils/generateImageSizes'
import { isDefined } from '@/_utils/isDefined'
import {
  Enum_Componentsectionsimageandtext_Imageposition,
  ImageAndTextSectionFragment,
} from '@/services/graphql/api'

type Props = {
  section: ImageAndTextSectionFragment
}

const backgroundValueMap: Record<
  ImageAndTextSectionFragment['backgroundColor'],
  SectionContainerProps['background']
> = {
  white: 'primary',
  yellow: 'secondary',
  gray: 'tertiary',
}

const ImageAndTextSection = ({ section }: Props) => {
  const { title, text, imagePosition, backgroundColor, image, primaryButton, secondaryButton } =
    section

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
      <div className="flex flex-col gap-4">
        <Typography variant="h2">{title}</Typography>
        <Typography>{`${image.data?.attributes?.url}  ${text}`}</Typography>
      </div>
      <div className="flex gap-4">
        {isDefined(primaryButton) ? (
          <Button variant="category-solid" href={primaryButton.url} asLink hasLinkIcon={false}>
            {primaryButton.title}
          </Button>
        ) : null}
        {isDefined(secondaryButton) ? (
          <Button variant="category-outline" href={secondaryButton.url} asLink hasLinkIcon={false}>
            {secondaryButton.title}
          </Button>
        ) : null}
      </div>
    </div>
  )

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background={backgroundValueMap[backgroundColor]} className="py-6 lg:py-12">
      {/* 8.5rem = 136px */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-[8.5rem]">
        {imagePosition === Enum_Componentsectionsimageandtext_Imageposition.Left ? (
          <>
            {ImageContent}
            {TextContent}
          </>
        ) : null}
        {imagePosition === Enum_Componentsectionsimageandtext_Imageposition.Right ? (
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
