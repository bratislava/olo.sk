import Image from 'next/image'

import ImagePlaceholder from '@/src/components/common/ImagePlaceholder'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import BasicHeader from '@/src/components/sections/headers/BasicHeader'
import { SideImageHeaderSectionFragment } from '@/src/services/graphql/api'

type Props = {
  header: SideImageHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1192-12977&m=dev
 */

const PageHeaderSideImage = ({ header }: Props) => {
  const { title, text, media } = header

  const {
    url: imageUrl,
    alternativeText: imageAlternativeText,
    name: imageName,
  } = media.data?.attributes ?? {}

  return (
    <div className="relative flex flex-col">
      {/* TODO breadcrumbs will go here */}
      {/* Screen: desktop */}
      <div className="max-lg:hidden">
        <SectionContainer background="secondary">
          <div className="flex flex-row justify-center gap-12">
            <BasicHeader title={title} text={text} className="w-1/2 grow" />
            <div className="w-1/2 grow" />
          </div>
        </SectionContainer>
        <div className="h-18" />
        <div className="absolute top-0 flex h-full w-full flex-row justify-between gap-12">
          <div className="w-full" />
          <div className="relative h-full w-full overflow-hidden rounded-bl-2xl">
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
        </div>
      </div>
      {/* Screen: mobile */}
      <div className="lg:hidden">
        <SectionContainer background="secondary">
          <div className="flex flex-col">
            <BasicHeader title={title} text={text} />
            <div className="relative aspect-[320/222] overflow-hidden max-lg:-mx-4">
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
          </div>
        </SectionContainer>
      </div>
    </div>
  )
}

export default PageHeaderSideImage
