import Image from 'next/image'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { ImageHeaderSectionFragment } from '@/src/services/graphql/api'

type Props = {
  title: string
  perex?: string | null | undefined
  header: ImageHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13398&t=YDBwFkSBAz7ZvIPe-4
 */

const PageHeaderImage = ({ title, perex, header }: Props) => {
  const { media } = header

  const { url: imageUrl } = media.data?.attributes ?? {}

  return (
    <>
      <SectionContainer background="secondary">
        <HeaderTitleText title={title} text={perex} />
        <div className="relative aspect-[1216/440] overflow-hidden max-lg:-mx-4 lg:top-18 lg:-mt-18 lg:rounded-2xl">
          {imageUrl ? (
            <Image src={imageUrl} alt="" fill className="z-1 object-cover" />
          ) : (
            <ImagePlaceholder />
          )}
        </div>
      </SectionContainer>
      {/* This div serves as an empty space for the image to overlap correctly */}
      <div aria-hidden className="h-18 max-lg:hidden" />
    </>
  )
}

export default PageHeaderImage
