import React from 'react'

import { AccordionProps } from '@/src/components/common/Accordion/Accordion'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type AccordionWasteProps = Omit<AccordionProps, 'variant'>

const AccordionWaste = ({
  title,
  hasBottomBorder = true,
  children,
  className,
}: AccordionWasteProps) => {
  return (
    <div className="bg-background-primary">
      <details className="group flex w-full flex-col">
        <summary
          className={cn(
            'flex cursor-pointer items-center justify-between gap-4 p-4 text-left ring-offset-2 after:absolute after:inset-0 focus:outline-none focus:ring lg:p-8',
            { 'border-b border-border-default': hasBottomBorder },
          )}
        >
          <div className="flex flex-row gap-4 md:items-center">
            <div
              className={cn(
                'flex h-[3rem] w-[3rem] rounded-2xl bg-waste-paper p-3 text-white',
                className,
              )}
            >
              <Icon name="kos" />
            </div>

            <Typography variant="h5" className_onlyWhenNecessary="grow min-w-0 break-words">
              {title}
            </Typography>
          </div>

          <div aria-hidden>
            <Icon
              name="chevron-dole"
              className="size-6 transform fill-content-secondary transition-transform group-open:rotate-180"
            />
          </div>
        </summary>
        <div className="flex flex-col items-start justify-center border-b border-border-default lg:flex-row">
          {children}
        </div>
      </details>
    </div>
  )
}

export default AccordionWaste
