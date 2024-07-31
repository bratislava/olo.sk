import React from 'react'

import AccordionGroup from '@/src/components/common/Accordion/AccordionGroup'
import Markdown from '@/src/components/formatting/Markdown'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import SectionHeader from '@/src/components/layout/Section/SectionHeader'
import {
  Enum_Componentsectionsfaq_Backgroundcolor,
  FaqSectionFragment,
} from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  section: FaqSectionFragment | null | undefined
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13877&t=welewzgz8FI2CbQy-4
 */

const FaqSection = ({ section }: Props) => {
  const { title, backgroundColorFaq, faqs, showMoreLink } = section ?? {}

  // eslint-disable-next-line unicorn/no-array-callback-reference
  const filteredFaqs = faqs?.data.filter(isDefined) ?? []

  return (
    // TODO padding-y should probably be managed by the SectionContainer
    <SectionContainer background={backgroundColorFaq} className="py-6 lg:py-18">
      <div className="flex flex-col gap-6">
        <SectionHeader title={title} showMoreLink={showMoreLink} />
        <AccordionGroup
          className={cn('px-5 py-2', {
            'border-none': backgroundColorFaq !== Enum_Componentsectionsfaq_Backgroundcolor.Primary,
          })}
          accordionData={filteredFaqs
            .map((faq) => {
              if (!faq.attributes) return null

              return {
                title: faq.attributes.title,
                children: <Markdown content={faq.attributes.content} />,
              }
            })
            // eslint-disable-next-line unicorn/no-array-callback-reference
            .filter(isDefined)}
        />
      </div>
    </SectionContainer>
  )
}

export default FaqSection
