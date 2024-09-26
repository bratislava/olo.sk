import ImageAndTextOverlapped from '@/src/components/common/Image/ImageAndTextOverlapped'
import Video from '@/src/components/common/Video/Video'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import HeaderTitleText from '@/src/components/sections/headers/HeaderTitleText'
import {
  CareersHeaderSectionFragment,
  Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor as Enum_Backgroundcolor,
  Enum_Componentsectionsimageandtextoverlapped_Imageposition as Enum_Imageposition,
} from '@/src/services/graphql/api'

export type CareersPageHeaderProps = {
  title: string
  perex?: string | null | undefined
  header: CareersHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=952-7340&t=G8gUCwznUtpSprDI-1
 */

const CareersPageHeader = ({ title, perex, header }: CareersPageHeaderProps) => {
  const { videoUrl, alternativeTextVideo, imageQuote, image } = header ?? {}

  return (
    <SectionContainer background="secondary" classNameInner="py-6 lg:pb-[4.5rem] lg:pt-12">
      <div className="flex flex-col gap-6 lg:gap-12">
        <HeaderTitleText title={title ?? ''} text={perex} />

        <div className="flex flex-col gap-6 lg:gap-18">
          <ImageAndTextOverlapped
            title={imageQuote}
            imagePosition={Enum_Imageposition.Left}
            backgroundColor={Enum_Backgroundcolor.Secondary} // White background
            image={image?.data}
          />
          <Video url={videoUrl} alternativeText={alternativeTextVideo ?? ''} />
        </div>
      </div>
    </SectionContainer>
  )
}

export default CareersPageHeader
