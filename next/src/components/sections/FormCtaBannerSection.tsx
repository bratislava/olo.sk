import React from 'react'

import FormCtaBanner from '@/src/components/common/FormCtaBanner/FormCtaBanner'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import { FormCtaBannerSectionFragment } from '@/src/services/graphql/api'

type Props = {
  section: FormCtaBannerSectionFragment
}

const FormCtaBannerSection = ({ section }: Props) => {
  if (!section) {
    return null
  }
  const { title, text, bannerTitle, bannerLink } = section ?? {}

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer className="py-6 lg:py-12">
      <div className="lg: flex max-w-[50rem] flex-col gap-4 lg:gap-6">
        {title ? <SectionHeader title={title} text={text} /> : null}
        <FormCtaBanner title={bannerTitle} link={bannerLink} />
      </div>
    </SectionContainer>
  )
}

export default FormCtaBannerSection
