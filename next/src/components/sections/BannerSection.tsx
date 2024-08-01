import React from 'react'

import Banner from '@/src/components/common/Banner/Banner'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import {
  BannerSectionFragment,
  Enum_Componentsectionsbanner_Variant,
} from '@/src/services/graphql/api'
import { useGetLinkProps } from '@/src/utils/useGetLinkProps'

type Props = {
  section: BannerSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=1932-17987&mode=design&t=e6RDJ09bFVN8VTqn-0
 */

const BannerSection = ({ section }: Props) => {
  const { getLinkProps } = useGetLinkProps()
  if (!section) {
    return null
  }
  const { title, variant, text, image, primaryButtonLink, secondaryButtonLink } = section ?? {}

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer className="py-6 lg:py-18">
      <Banner
        variant={
          variant === Enum_Componentsectionsbanner_Variant.BackgroundGrey
            ? 'background-grey'
            : 'background-black'
        }
        title={title ?? ''}
        subtext={text}
        button1LinkHref={getLinkProps(primaryButtonLink).href}
        button1Text={getLinkProps(primaryButtonLink).children}
        button2LinkHref={getLinkProps(secondaryButtonLink).href}
        button2Text={getLinkProps(secondaryButtonLink).children}
        imgSrc={image.data?.attributes?.url}
      />
    </SectionContainer>
  )
}

export default BannerSection
