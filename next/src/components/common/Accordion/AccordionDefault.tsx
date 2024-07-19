import React, { ReactNode } from 'react'

import { AccordionProps } from '@/src/components/common/Accordion/Accordion'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

type AccordionDefaultProps = Omit<AccordionProps, 'variant'> & {
  StartComponent?: ReactNode
  containerClassname?: string
}

const AccordionDefault = ({
  title,
  hasBottomBorder,
  children,
  className,
  StartComponent,
  containerClassname,
}: AccordionDefaultProps) => {
  return (
    <div className={cn('bg-background-primary', className)}>
      <details
        className={cn(
          'group flex w-full flex-col py-5',
          {
            'border-b border-border-default ': hasBottomBorder,
          },
          containerClassname,
        )}
      >
        <summary
          className={cn(
            'relative flex cursor-pointer items-center gap-4 text-left after:absolute after:inset-0',
            'ring-offset-2 focus:outline-none focus:ring',
          )}
        >
          {StartComponent}
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
export default AccordionDefault
