import { Fragment } from 'react'

import Accordion, { AccordionProps } from '@/src/components/common/Accordion/Accordion'
import cn from '@/src/utils/cn'

import Divider from '../Sidebar/Divider'

export type AccordionGroupProps = {
  accordionData: AccordionProps[]
  className?: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?type=design&node-id=39-2172&mode=dev
 */

const AccordionGroup = ({ accordionData, className }: AccordionGroupProps) => {
  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary',
        className,
      )}
    >
      {accordionData.length > 0
        ? accordionData.map((accordion, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                {index > 0 && <Divider />}
                <Accordion innerClassName="border-none" {...accordion} />
              </Fragment>
            )
          })
        : null}
    </div>
  )
}

export default AccordionGroup
