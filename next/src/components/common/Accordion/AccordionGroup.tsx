import Accordion, { AccordionProps } from '@/src/components/common/Accordion/Accordion'
import cn from '@/src/utils/cn'

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
        'flex flex-col divide-y divide-border-default overflow-hidden rounded-lg border border-border-default bg-background-primary px-4 py-2 lg:px-5',
        className,
      )}
    >
      {accordionData.length > 0
        ? accordionData.map((accordion, index) => {
            return (
              <Accordion
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                hideHorizontalPadding
                {...accordion}
              />
            )
          })
        : null}
    </div>
  )
}

export default AccordionGroup
