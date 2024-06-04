import Image from 'next/image'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import { SideImageHeaderSectionFragment } from '@/src/services/graphql/api'

type Props = {
  header: SideImageHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1192-12977&m=dev
 */

const PageHeaderSideImage = ({ header }: Props) => {
  const { title, text, media } = header

  const { url: imageUrl } = media.data?.attributes ?? {}

  return (
    <div className="relative flex flex-col">
      {/* TODO breadcrumbs will go here */}
      {/* Screen : desktop */}
      <div className="max-lg:hidden">
        {/* This container ensures that the text part of header scales correctly with window width  */}
        <SectionContainer background="secondary">
          <div className="grid grid-cols-2 gap-12">
            <HeaderTitleText title={title} text={text} className="col-[1] grow" />
          </div>
        </SectionContainer>
        {/* This div serves as an empty space for the image to overlap correctly */}
        <div aria-hidden className="h-18" />
        {/* This div overlaps the grid in SectionContainer and and allows the image to fill the whole right side */}
        <div className="absolute top-0 grid h-full w-full grid-cols-2 gap-12">
          <div className="relative col-[2] h-full w-full overflow-hidden rounded-bl-2xl">
            {imageUrl ? (
              <Image src={imageUrl} alt="" fill className="z-1 object-cover" />
            ) : (
              <ImagePlaceholder />
            )}
          </div>
        </div>
      </div>
      {/* Screen: mobile */}
      <div className="lg:hidden">
        <SectionContainer background="secondary">
          <div className="flex flex-col">
            <HeaderTitleText title={title} text={text} />
            <div className="relative aspect-[320/222] overflow-hidden max-lg:-mx-4">
              {imageUrl ? (
                <Image src={imageUrl} alt="" fill className="z-1 object-cover" />
              ) : (
                <ImagePlaceholder />
              )}
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  )
}

export default PageHeaderSideImage
