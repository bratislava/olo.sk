import React, { ReactNode } from 'react'

import AccordionDefault from '@/src/components/common/Accordion/AccordionDefault'
import AccordionWaste from '@/src/components/common/Accordion/AccordionWaste'
import AnimateHeight from '@/src/components/common/Accordion/AnimateHeight'

export type AccordionProps = {
  title: string
  variant: 'default' | 'waste'
  hasBottomBorder?: boolean
  children?: ReactNode
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=39-2172&mode=dev
 *
 * Component inspired by bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/ui/Accordion/Accordion.tsx
 *
 */

const Accordion = ({
  title,
  variant,
  hasBottomBorder = true,
  children,
  className,
}: AccordionProps) => {
  return (
    <AnimateHeight isVisible className="relative">
      {variant === 'default' ? (
        <AccordionDefault title={title} hasBottomBorder={hasBottomBorder} className={className}>
          {children}
        </AccordionDefault>
      ) : (
        <AccordionWaste title={title} hasBottomBorder={hasBottomBorder} className={className}>
          {children}
        </AccordionWaste>
      )}
    </AnimateHeight>
  )
}

export default Accordion
