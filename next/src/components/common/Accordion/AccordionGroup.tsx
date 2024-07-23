import Accordion, { AccordionProps } from '@/src/components/common/Accordion/Accordion'
import cn from '@/src/utils/cn'

import SidebarDivider from '../Sidebar/SidebarDivider'

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
              <div>
                <Accordion
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  innerClassName="border-none"
                  {...accordion}
                />
                {index === accordionData.length - 1 ? null : <SidebarDivider />}
              </div>
            )
          })
        : null}
    </div>
  )
}

export default AccordionGroup
