import React from 'react'

import ImageAndTextOverlapped from '@/src/components/common/Image/ImageAndTextOverlapped'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { ImageAndTextOverlappedSectionFragment } from '@/src/services/graphql/api'

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
    readMoreLink,
  } = section

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background={backgroundColor} className="py-6 lg:py-12">
      <ImageAndTextOverlapped
        title={title}
        text={text}
        imagePosition={imagePosition}
        backgroundColor={backgroundColor}
        image={image}
        readMoreLink={readMoreLink}
      />
    </SectionContainer>
  )
}

export default ImageAndTextOverlappedSection
