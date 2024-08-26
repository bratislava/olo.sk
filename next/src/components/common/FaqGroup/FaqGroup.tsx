import React from 'react'

import AccordionGroup from '@/src/components/common/Accordion/AccordionGroup'
import Markdown from '@/src/components/formatting/Markdown'
import { FaqEntityFragment } from '@/src/services/graphql/api'
import cn from '@/src/utils/cn'
import { isDefined } from '@/src/utils/isDefined'

type Props = {
  faqs: FaqEntityFragment[]
  className?: string
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199-13877&t=welewzgz8FI2CbQy-4
 */

const FaqGroup = ({ faqs, className }: Props) => {
  // eslint-disable-next-line unicorn/no-array-callback-reference

  return (
    <AccordionGroup
      className={cn('px-5 py-2', className)}
      accordionData={faqs
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
  )
}

export default FaqGroup
