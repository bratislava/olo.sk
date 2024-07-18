import React, { ReactNode } from 'react'

import AnimateHeight from '@/src/components/common/Accordion/AnimateHeight'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

export type AccordionProps = {
  title: string
  variant: 'default' | 'waste'
  hasBottomBorder?: boolean
  children?: ReactNode
  className?: string
}

type AccordionWasteProps = Omit<AccordionProps, 'variant'>
type AccordionDefaultProps = Omit<AccordionProps, 'variant'>

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=39-2172&mode=dev
 *
 * Component inspired by bratislava.sk: https://github.com/bratislava/bratislava.sk/blob/master/next/components/ui/Accordion/Accordion.tsx
 *
 */

const AccordionWaste = ({ title, hasBottomBorder = true, children }: AccordionWasteProps) => {
  return (
    <div className="bg-background-primary">
      <details className="group flex w-full flex-col">
        <summary
          className={cn(
            'flex cursor-pointer items-center gap-4 p-4 text-left ring-offset-2 after:absolute after:inset-0 focus:outline-none focus:ring lg:p-8',
            { 'border-b border-border-default': hasBottomBorder },
          )}
        >
          <div className="flex h-[3rem] w-[3rem] items-center justify-center self-center rounded-2xl bg-waste-paper p-3 text-white">
            <Icon name="kos" />
          </div>
          <Typography variant="h5" className_onlyWhenNecessary="grow min-w-0 break-words">
            {title}
          </Typography>

          <div aria-hidden>
            <Icon
              name="chevron-dole"
              className="size-6 transform fill-content-secondary transition-transform group-open:rotate-180"
            />
          </div>
        </summary>
        <div className="flex items-start justify-center border-b border-border-default">
          {children}
        </div>
      </details>
    </div>
  )
}

const AccordionDefault = ({ title, hasBottomBorder, children }: AccordionDefaultProps) => {
  return (
    <div className="bg-background-primary px-4 lg:px-5">
      <details
        className={cn('group flex w-full flex-col py-5', {
          'border-b border-border-default ': hasBottomBorder,
        })}
      >
        <summary
          className={cn(
            'flex cursor-pointer items-center gap-4 text-left after:absolute after:inset-0',
            'ring-offset-2 focus:outline-none focus:ring',
          )}
        >
          <Typography variant="h5" className_onlyWhenNecessary="grow min-w-0 break-words">
            {title}
          </Typography>

          <div aria-hidden>
            <Icon
              name="chevron-dole"
              className="size-6 transform fill-content-secondary transition-transform group-open:rotate-180"
            />
          </div>
        </summary>
        <div className="group-open:pt-3 group-open:lg:pt-4">{children}</div>
      </details>
    </div>
  )
}

const Accordion = ({ title, variant, hasBottomBorder = true, children }: AccordionProps) => {
  return (
    <AnimateHeight isVisible className="relative">
      {variant === 'default' ? (
        <AccordionDefault title={title} hasBottomBorder={hasBottomBorder}>
          {children}
        </AccordionDefault>
      ) : (
        <AccordionWaste title={title}>{children}</AccordionWaste>
      )}
    </AnimateHeight>
  )
}

export default Accordion
