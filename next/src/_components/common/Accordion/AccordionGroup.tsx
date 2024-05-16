import Accordion, { AccordionProps } from '@/_components/common/Accordion/Accordion'
import cn from '@/app/_utils/cn'

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
        'flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary py-2',
        className,
      )}
    >
      {accordionData.length > 0
        ? accordionData.map((accordion, index) => {
            return (
              <Accordion
                key={accordion.title}
                {...accordion}
                hasBottomBorder={index !== accordionData.length - 1}
              />
            )
          })
        : null}
    </div>
  )
}

export default AccordionGroup
