import { useTranslation } from 'next-i18next'

import ImageAndTextOverlapped from '@/src/components/common/Image/ImageAndTextOverlapped'
import Typography from '@/src/components/common/Typography/Typography'
import Video from '@/src/components/common/Video/Video'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import {
  CareersHeaderSectionFragment,
  Enum_Componentsectionsimageandtextoverlapped_Backgroundcolor as Enum_Backgroundcolor,
  Enum_Componentsectionsimageandtextoverlapped_Imageposition as Enum_Imageposition,
} from '@/src/services/graphql/api'

type CareersPageHeaderProps = {
  section: CareersHeaderSectionFragment
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=952-7340&t=G8gUCwznUtpSprDI-1
 */

const CareersPageHeader = ({ section }: CareersPageHeaderProps) => {
  const { t } = useTranslation()
  const { title: sectionTitle, text, videoUrl, imageWithText } = section ?? {}
  const { title, image } = imageWithText ?? {}

  return (
    <SectionContainer background="secondary" classNameInner="py-6 lg:pb-[4.5rem] lg:pt-12">
      <div className="flex flex-col gap-6 lg:gap-12">
        <div className="flex flex-col gap-4 pb-6 lg:gap-6 lg:py-0">
          <Typography variant="h1">{sectionTitle ?? ''}</Typography>
          <Typography variant="p-default">{text ?? ''}</Typography>
        </div>

        <div className="flex flex-col gap-6 lg:gap-18">
          <ImageAndTextOverlapped
            title={title}
            imagePosition={Enum_Imageposition.Left}
            backgroundColor={Enum_Backgroundcolor.Secondary} // White background
            image={image}
          />

          <Video url={videoUrl} ariaLabel={t('pageHeaderCareers.aria.videoTitle')} />
        </div>
      </div>
    </SectionContainer>
  )
}

export default CareersPageHeader
